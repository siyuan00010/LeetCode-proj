import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { getStartedComponent } from './body/getStarted.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingHeaderComponent } from './landingHeader/landingHeader.component';
import { PremiumComponent } from './Premium/premium.component';
import { ProblemSetComponent } from './problemSet/problemSet.component';
import { SigninComponent } from './signin/signin.component';
import { LayoutMainComponent } from './layout_main/layout_main.component';
import { ipadComponent } from './body/ipad.component';
import { TextContentComponent } from './body/textContent.component';
import { centerTextComponent } from './body/centerText.component';
import { contentCenterComponent } from './body/contentCenter.component';
import { companyComponent } from './body/company.component';
import { joinUsComponent } from './body/joinUs.component';
import { ExploreComponent } from './body/startExplore.component';
import { QuestionsComponent } from './body/questions.component';
import { landingFooterComponent } from './landingFooter/landingft.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    getStartedComponent,
    LandingHeaderComponent,
    landingFooterComponent,
    PremiumComponent,
    ProblemSetComponent,
    SigninComponent,
    LayoutMainComponent,
    ipadComponent,
    TextContentComponent,
    centerTextComponent,
    contentCenterComponent,
    companyComponent,
    joinUsComponent,
    ExploreComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
