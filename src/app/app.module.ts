import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import {MatCardModule} from '@angular/material/card';
import { PricingComponent } from './pricing/pricing.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
// import { QrcodeComponent1 } from './qrcode1/qrcode1.component';
import { VerifyotpComponent } from './verifyotp/verifyotp.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SalarycardComponent } from './salarycard/salarycard.component';
import { CurrentaccountComponent } from './currentaccount/currentaccount.component';
import { SimplepayoutComponent } from './simplepayout/simplepayout.component';
import { BulkpayoutsComponent } from './bulkpayouts/bulkpayouts.component';
import { PayoutslinksComponent } from './payoutslinks/payoutslinks.component';
import { CollectionlinksComponent } from './collectionlinks/collectionlinks.component';
import { CollectionqrComponent } from './collectionqr/collectionqr.component';
import { PosComponent } from './pos/pos.component';
import { GiftcardComponent } from './giftcard/giftcard.component';
import { BrandvouchersComponent } from './brandvouchers/brandvouchers.component';
import { TermloanComponent } from './termloan/termloan.component';
import { OverdrafComponent } from './overdraf/overdraf.component';
import { ExpensecardComponent } from './expensecard/expensecard.component';
import { WorkinfcapitalComponent } from './workinfcapital/workinfcapital.component';
import { UtilitypaymentsComponent } from './utilitypayments/utilitypayments.component';
import { SliderComponent } from './slider/slider.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    PricingComponent,
    FooterComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    // QrcodeComponent1,
    VerifyotpComponent,
    SalarycardComponent,
    CurrentaccountComponent,
    SimplepayoutComponent,
    BulkpayoutsComponent,
    PayoutslinksComponent,
    CollectionlinksComponent,
    CollectionqrComponent,
    PosComponent,
    GiftcardComponent,
    BrandvouchersComponent,
    TermloanComponent,
    OverdrafComponent,
    ExpensecardComponent,
    WorkinfcapitalComponent,
    UtilitypaymentsComponent,
    SliderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
