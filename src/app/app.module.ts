import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LayoutMainComponent } from './layout_main/layout_main.component';
import { LandingHeaderComponent } from './landingHeader/landingHeader.component';
import { landingFooterComponent } from './landingFooter/landingft.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PremiumComponent } from './Premium/premium.component';
import { ExploreComponent } from './body/startExplore.component';
import { getStartedComponent } from './body/getStarted.component';
import { ProblemSetComponent } from './problemSet/problemSet.component';
import { SigninComponent } from './Signin/signin.component';
import { ipadComponent } from './body/ipad.component';
import { TextContentComponent } from './body/textContent.component';
import { companyComponent } from './body/company.component';
import { joinUsComponent } from './body/joinUs.component';
import { QuestionsComponent } from './body/questions.component';
import { PriceComponent } from './Premium/price.component';
import { developerComponent } from './body/developer.component';
import { BusinessComponent } from './business/business.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
    imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    UserInfoComponent,
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
    companyComponent,
    joinUsComponent,
    ExploreComponent,
    QuestionsComponent,
    PriceComponent,
    developerComponent,
    BusinessComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
