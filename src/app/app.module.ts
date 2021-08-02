import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './core/services/auth.service';
import { AdvertiserService } from './core/services/advertiser/advertiser.service';
import { DashboardService } from './core/services/dashboard/dashboard.service';
import { MediaFileService } from './core/services/mediaFile/media-file.service';
import { RoleService } from './core/services/role/role.service';
import { UserService } from './core/services/user/user.service';
import { UserKeysService } from './core/services/user-keys/user-keys.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthService, 
    AdvertiserService,
    DashboardService,
    MediaFileService,
    RoleService,
    UserService,
    UserKeysService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
