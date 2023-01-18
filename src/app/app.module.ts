import { AuthenticationModule } from './modules/authentication.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard.module';
import { SimpleModule } from './modules/simple.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { SharedModule } from './modules/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,

  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    DashboardModule,
    SimpleModule,
    AppRoutingModule,
    DashboardModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
