import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SwPush, SwUpdate} from '@angular/service-worker';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSnackBarModule,
  MatSnackBar
} from '@angular/material';
import {NavbarModule} from './navbar/navbar.module';
import {AddrecipeModule} from './addrecipe/addrecipe.module';

@NgModule({
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    AppRoutingModule,
    NavbarModule,
    AddrecipeModule

  ],
  providers: [SwUpdate],
  bootstrap: [AppComponent],
})
export class AppModule {

}
