const express = require('express');
const app = express();
const request = require('request');
const cheerio = require('cheerio');
const path = require('path');
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/downloads'));
app.get('/resumedownload', (req, res) => { res.download(__dirname + '/downloads/Resume.pdf', 'Resume.pdf'); })

app.get('/getStockData/:tickerSymbol/:timeFrame', (req, res) => {
  let tickerSymbol = req.params.tickerSymbol.toLowerCase();
  let timeFrame = req.params.timeFrame;
  let stockDataObjects = [];
  let stockData = [];

  request(`https://www.nasdaq.com/symbol/${tickerSymbol}/historical`, (err, response, html) => {
    if (!err && response.statusCode == 200) {
      let $ = cheerio.load(html);
      $("#historicalContainer").find("tr").each((i, el) => {
        if (el.parent.name == "tbody") {
          for (let i = 1; i < el.children.length; i++) {
            if (el.children[i].type == 'tag')
              stockData.push((el.children[i].children[0].data).trim());
          }
        }
      })
      let obj;
      for (let i = 0; i < stockData.length; i++) {
        switch (i % 6) {
          case 0:
            obj = new DataRow();
            if (stockData[i].indexOf(':') == -1)
              obj.date = stockData[i]
            else {
              let today = new Date();
              let dd = today.getDate();
              let mm = today.getMonth() + 1;
              let yyyy = today.getFullYear();
              if (dd < 10)
                dd = '0' + dd;
              if (mm < 10)
                mm = '0' + mm;
              obj.date = today = mm + '/' + dd + '/' + yyyy;
            }
            break;
          case 1:
            obj.open = Number.parseFloat(stockData[i]);
            break;
          case 2:
            obj.high = Number.parseFloat(stockData[i]);
            break;
          case 3:
            obj.low = Number.parseFloat(stockData[i]);
            break;
          case 4:
            obj.close = Number.parseFloat(stockData[i]);
            break;
          case 5:
            obj.volume = Number.parseFloat(stockData[i].split(",").join(""));
            stockDataObjects.push(obj);
            break;
          default:
            break;
        }
      }
      res.send(JSON.stringify(new StockAnalyzer().calculateProfit(stockDataObjects)));
    } else {
      res.send(null);
    }
  })
})

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', (req, res) => res.sendFile(path.join(__dirname + '/dist/index.html')));

app.listen(process.env.PORT || 8080);

class DataRow {
  constructor() {
    this.date = "";
    this.open = 0;
    this.high = 0;
    this.low = 0;
    this.close = 0;
    this.volume = 0;
  }
}

class FullGapLongPosition {
  constructor(boughtAt) {
    this.boughtAt = boughtAt;
    this.stopLoss = boughtAt * 0.9;
    this.sold = false;
    this.profit = 0;
    this.daysHeld = 0;
  }

  advanceDay(current) {
    if (this.sold == false) {
      this.daysHeld++;
      this.updateStopLoss(current);
      if (this.isReadyToSell(current))
        this.sell(current);
    }
  }

  isReadyToSell(current) { return current <= this.stopLoss; }

  updateStopLoss(current) {
    this.stopLoss = Math.max(this.stopLoss, current * 0.9)
  }

  sell(current) {
    this.sold = true;
    this.profit = current - this.boughtAt;
  }
}


class BuyHoldLongPosition {
  constructor(boughtAt) {
    this.boughtAt = boughtAt;
    this.stopLoss = boughtAt * 0.9;
    this.sold = false;
    this.profit = 0;
    this.daysHeld = 0;
  }

  advanceDay(current) {
    if (this.sold == false) {
      this.daysHeld++;
      this.updateStopLoss(current);
      if (this.isReadyToSell(current))
        this.sell(current);
    }
  }

  isReadyToSell(current) { return current <= this.stopLoss; }

  updateStopLoss(current) {
    this.stopLoss = Math.max(this.stopLoss, current * 0.9)
  }

  sell(current) {
    this.sold = true;
    this.profit = current - this.boughtAt;
  }
}

class StockAnalyzer {
  constructor() {
    this.openPositions = [];
    this.benchmarkPositions = [];
    this.profit = 0;
    this.buyAndHoldBenchmark = 0;
    this.benchmarkInvestment = 0;
    this.avgDaysHeld = 0;
    this.totalDaysHeld = 0;
    this.totalInvestment = 0;
  }

  calculateProfit(days) {

    for (let i = days.length - 2; i >= 1; i--) {
      for (let j = 0; j < this.openPositions.length; j++)
        this.openPositions[j].advanceDay(days[i].open);

      for (let j = 0; j < this.openPositions.length; j++)
        this.benchmarkPositions[j].advanceDay(days[i].open);

      this.benchmarkPositions.push(new BuyHoldLongPosition(days[i].open));
      this.benchmarkInvestment += days[i].open;
      
      if (days[i].open < days[i + 1].low) {
        this.openPositions.push(new FullGapLongPosition(days[i].open));
        this.totalInvestment += days[i].open;
      }
    }

    for (let stock of this.openPositions) {
      if (stock.sold == false)
        stock.sell(days[1].open);
      this.totalDaysHeld += stock.daysHeld;
      this.profit += stock.profit;
    }

    for (let stock of this.benchmarkPositions) {
      if (stock.sold == false)
        stock.sell(days[1].open);
      this.buyAndHoldBenchmark += stock.profit;
    }
    this.avgDaysHeld = this.totalDaysHeld / this.openPositions.length
    return { 'profit': this.profit,'totalInvestment':this.totalInvestment, 'ROI': this.profit/this.totalInvestment, 'avgDaysHeld': this.avgDaysHeld, 'buyHoldBenchmark': this.buyAndHoldBenchmark, 'benchmarkInvestment':this.benchmarkInvestment, 'benchmarkROI':this.buyAndHoldBenchmark/this.benchmarkInvestment }
  }
}