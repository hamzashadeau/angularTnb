import { Routes, RouterModule } from '@angular/router';
import {RedevablesComponent} from './redevables/redevables.component';
import {NotificationComponent} from './notification/notification.component';
import {RedevableCreateComponent} from './redevables/redevable-create/redevable-create.component';
import {RedevableListeComponent} from './redevables/redevable-liste/redevable-liste.component';
import {RedevableChercherAchatComponent} from './redevables/redevable-chercher-achat/redevable-chercher-achat.component';




const routes: Routes = [

  { path: 'redevable', children : [
      { path : 'ajouter-redevable', component : RedevableCreateComponent},
      { path : 'acheter-terrain', component : RedevableChercherAchatComponent},
      { path : 'chercher-achat', component : RedevableListeComponent}
    ]},
  { path: 'notification', component: NotificationComponent },
  { path: '**', redirectTo: 'redevable/ajouter-redevable'}
];
export const AppRoutingModule = RouterModule.forRoot(routes)
