import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNotasComponent } from './components/create-notas/create-notas.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NotasComponent } from './components/notas/notas.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { ContentPostComponent } from './components/content-post/content-post.component';
import { PoliticsComponent } from './components/politics/politics.component';

const routes: Routes = [
  {
    path: 'page-content/:id', component : PageContentComponent
  },
  {
    path: '', component : MainPageComponent
  },
  {
    path: 'home', component : HomePageComponent
  },
  {
    path: 'informacion-legal', component : PoliticsComponent
  },
  {
    path: 'notas', component : NotasComponent
  },
  {
    path: 'create-notas', component : CreateNotasComponent
  },
  {
    path: 'chat', component: ChatComponent
  },
  {
    path: 'login', component : LoginComponent
  },
  {
    path: 'signin', component : SigninComponent
  },
  {
    path: 'post-content/:id', component : ContentPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
