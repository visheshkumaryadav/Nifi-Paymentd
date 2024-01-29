import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
// import { QrcodeComponent1 } from './qrcode1/qrcode1.component';
import { VerifyotpComponent } from './verifyotp/verifyotp.component';
import { ProductsComponent } from './products/products.component';
import { SalarycardComponent } from './salarycard/salarycard.component';
import { CurrentaccountComponent } from './currentaccount/currentaccount.component';
import { SimplepayoutComponent } from './simplepayout/simplepayout.component';
import { BulkpayoutsComponent } from './bulkpayouts/bulkpayouts.component';
import { PayoutslinksComponent } from './payoutslinks/payoutslinks.component';
import { CollectionlinksComponent } from './collectionlinks/collectionlinks.component';
import { CollectionqrComponent } from './collectionqr/collectionqr.component';
import { PosComponent } from './pos/pos.component';
import { ExpensecardComponent } from './expensecard/expensecard.component';
import { GiftcardComponent } from './giftcard/giftcard.component';
import { BrandvouchersComponent } from './brandvouchers/brandvouchers.component';
import { WorkinfcapitalComponent } from './workinfcapital/workinfcapital.component';
import { TermloanComponent } from './termloan/termloan.component';
import { UtilitypaymentsComponent } from './utilitypayments/utilitypayments.component';
import { OverdrafComponent } from './overdraf/overdraf.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'pricing', component:PricingComponent},
  { path:'footer',component:FooterComponent},
  { path:'contact',component:ContactComponent},
  { path:'about', component:AboutComponent},
  { path:"signup", component:SignupComponent},
  { path: "login", component: LoginComponent },
  // { path: "qrcode1", component: QrcodeComponent1 },
  { path: "verifyotp", component: VerifyotpComponent },
  { path:'product', component:ProductsComponent},

  { path:'account/salarycard', component:SalarycardComponent},
  { path:'account/currentaccount',component:CurrentaccountComponent},

  { path:'payout/simplepayout', component:SimplepayoutComponent},
  { path:'payout/bulkpayout', component:BulkpayoutsComponent},
  { path:'payout/payoutlink', component:PayoutslinksComponent},

  { path: "collection/collectionlink", component:CollectionlinksComponent },
  { path:'collection/collectionqr', component:CollectionqrComponent},
  { path:'collection/pos', component:PosComponent},

  { path:'card/expensecard', component:ExpensecardComponent},
  { path:'card/giftcard', component:GiftcardComponent},
  { path: "card/brandvouchers", component: BrandvouchersComponent },

  { path:'loan/workingcapital', component:WorkinfcapitalComponent},
  { path:'loan/termloan', component:TermloanComponent},
  { path:'loan/overdraft', component:OverdrafComponent},

  { path:'marketplace/utilitypayment', component:UtilitypaymentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
