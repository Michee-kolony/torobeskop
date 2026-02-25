import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client/client.component';
import { HomeComponent } from './client/home/home.component';
import { ContactComponent } from './client/contact/contact.component';

const routes: Routes = [
  {path:'', redirectTo: 'boutique', pathMatch: 'full'},
  {path:'boutique', component: ClientComponent, 
    children: [
      {path:'', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path:'contact', component: ContactComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
