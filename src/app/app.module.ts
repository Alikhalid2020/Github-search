
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { ProfileService } from './service/service.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { ServicesCountPipe } from './services-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    StrikethroughDirective,
    ServicesCountPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }