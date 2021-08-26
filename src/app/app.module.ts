import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { PlaylistService } from './core/services/playlist/playlist.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AdvertiserModule } from './modules/advertiser/advertiser.module';
import { AdministratorModule } from './modules/administrator/administrator.module';
import { SortablejsModule } from 'ngx-sortablejs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    SortablejsModule.forRoot({ 
      // multiDrag: true,
      // selectedClass: 'selected',
      animation: 150 }),
    BrowserAnimationsModule,
    AppRoutingModule
    
  ],
  providers: [
    AuthService, 
    AdvertiserService,
    DashboardService,
    MediaFileService,
    RoleService,
    UserService,
    UserKeysService,
    PlaylistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
