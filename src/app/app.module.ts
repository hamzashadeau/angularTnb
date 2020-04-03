import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RedevablesComponent } from './redevables/redevables.component';
import { RedevableCreateComponent } from './redevables/redevable-create/redevable-create.component';
import { RedevableListeComponent } from './redevables/redevable-liste/redevable-liste.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { NotificationComponent } from './notification/notification.component';
import {AppRoutingModule} from './app-routing.module';
import { RedevableChercherAchatComponent } from './redevables/redevable-chercher-achat/redevable-chercher-achat.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    RedevablesComponent,
    RedevableCreateComponent,
    RedevableListeComponent,
    NotificationComponent,
    RedevableChercherAchatComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        NgbModule
    ],
  providers: [],
  bootstrap: [RedevablesComponent]
})
export class AppModule { }
