import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

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
import { SecteurEtQuartierComponent } from './secteur-et-quartier/secteur-et-quartier.component';
import { NotificationDetailsComponent } from './notification/notification-details/notification-details.component';
import { TaxetnbComponent } from './taxetnb/taxetnb.component';
import { FindbyredevableComponent } from './taxetnb/findbyredevable/findbyredevable.component';

import { SaveComponent } from './taxetnb/save/save.component';
import { TauxtnbComponent } from './tauxtnb/tauxtnb.component';

import { FindbystuffComponent } from './tauxtnb/findbystuff/findbystuff.component';
@NgModule({
  declarations: [
    AppComponent,
    RedevablesComponent,
    RedevableCreateComponent,
    RedevableListeComponent,
    NotificationComponent,
    RedevableChercherAchatComponent,
    SecteurEtQuartierComponent,
    NotificationDetailsComponent,
    TaxetnbComponent,
    FindbyredevableComponent,
    SaveComponent,
    TauxtnbComponent,
    FindbystuffComponent,
  ],
    imports: [
        CommonModule,
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
