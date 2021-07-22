import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppareilService} from './services/appareil.service';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthentificationService} from './services/authentification.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {AuthGardeService} from './services/auth-garde.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserService} from './services/user.service';
import {UserModel} from './models/user.model';
import { NewUserComponent } from './new-user/new-user.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes=[
  {path: 'appareils', canActivate: [AuthGardeService], component: AppareilViewComponent},
  {path: 'appareils/:id', canActivate: [AuthGardeService], component: SingleAppareilComponent},
  {path: 'edit', canActivate: [AuthGardeService], component: EditAppareilComponent},
  {path:'authentification', component: AuthentificationComponent},
  {path: 'users', component:UserListComponent},
  {path:'newUsers', component:NewUserComponent},
  {path:'', component:AppareilViewComponent},
  {path:'not-found', component:FourOhFourComponent},
  {path: '**', redirectTo:'/not-found'}

];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthentificationComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //c-a-d toutes les routes qu'on veut enregistrer se trouvent dans la constante appRoutes
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppareilService, AuthentificationService,AuthGardeService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
