import {Routes, RouterModule} from '@angular/router';
import {NotificationComponent} from './notification/notification.component';
import {RedevableCreateComponent} from './redevables/redevable-create/redevable-create.component';
import {RedevableListeComponent} from './redevables/redevable-liste/redevable-liste.component';
import {RedevableChercherAchatComponent} from './redevables/redevable-chercher-achat/redevable-chercher-achat.component';
import {SecteurEtQuartierComponent} from './secteur-et-quartier/secteur-et-quartier.component';
import {NotificationDetailsComponent} from './notification/notification-details/notification-details.component';
import {TaxetnbComponent} from './taxetnb/taxetnb.component';
import {FindbyredevableComponent} from './taxetnb/findbyredevable/findbyredevable.component';

import {SaveComponent} from './taxetnb/save/save.component';
import {TauxtnbComponent} from './tauxtnb/tauxtnb.component';
import {FindbystuffComponent} from './tauxtnb/findbystuff/findbystuff.component';


const routes: Routes = [
  {
    path: 'notification', children: [
      {path: '', component: NotificationComponent},
      {path: 'details', component: NotificationDetailsComponent}
    ]
  },
  {path: 'secteur-quartier', component: SecteurEtQuartierComponent},
  {
    path: 'redevable', children: [
      {path: 'ajouter-redevable', component: RedevableCreateComponent},
      {path: 'acheter-terrain', component: RedevableListeComponent},
      {path: 'chercher-achat', component: RedevableChercherAchatComponent}
    ]
  },
  {path: 'notification', component: NotificationComponent},
  {path: 'taxetnb', children:[
      {path: '', component: TaxetnbComponent},
      {path: 'findbyredevableid', component: FindbyredevableComponent},
      {path: 'save', component: SaveComponent}
    ]},
  {path: 'tauxtnb', children:[
      {path: '', component: TauxtnbComponent},
      {path: 'findbystuff', component: FindbystuffComponent},

    ]},

  {path: '**', redirectTo: 'redevable/ajouter-redevable'}
];
export const AppRoutingModule = RouterModule.forRoot(routes);
