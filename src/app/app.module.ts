import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollToModule } from 'ng2-scroll-to';
import { RouterModule, Routes } from '@angular/router';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { BelowTheFoldComponent } from './below-the-fold/below-the-fold.component';
import { WhoIAmComponent } from './who-i-am/who-i-am.component';
import { WhatIDoComponent } from './what-i-do/what-i-do.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ResumeComponent } from './resume/resume.component';
import { WhoaComponent } from './whoa/whoa.component';
import { P5Component } from './p5/p5.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'whoiam', component: WhoIAmComponent },
  { path: 'whatido', component: WhatIDoComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'whoa', component: WhoaComponent },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumboComponent,
    BelowTheFoldComponent,
    WhoIAmComponent,
    WhatIDoComponent,
    WelcomeComponent,
    ResumeComponent,
    WhoaComponent,
    PdfViewerComponent,
    P5Component
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
