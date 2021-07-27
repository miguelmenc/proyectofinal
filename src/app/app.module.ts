import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';

// firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import {AngularFireStorageModule, BUCKET } from '@angular/fire/storage';

// formularios reactivos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// etiquetas de alertas
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';

// ngx pagination
import {NgxPaginationModule} from 'ngx-pagination';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotasComponent } from './components/notas/notas.component';
import { CreateNotasComponent } from './components/create-notas/create-notas.component';


import { PipePipe } from './shared/pipes/pipe.pipe';
import { ChatComponent } from './components/chat/chat.component';
import { ChatMessComponent } from './components/chat/chat-mess/chat-mess.component';
import { MessageComponent } from './components/chat/chat-mess/message/message.component';
import { MessageInputComponent } from './components/chat/message-input/message-input.component';
import { UserListComponent } from './components/chat/user-list/user-list.component';
import { UserItemComponent } from './components/chat/user-list/user-item/user-item.component'; // <-- import the module
import { AuthService } from './shared/services/auth.service';
import { ChatService } from './shared/services/chat.service';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { ContentPostComponent } from './components/content-post/content-post.component';
import { PoliticsComponent } from './components/politics/politics.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageContentComponent,
    CarruselComponent,
    MainPageComponent,
    HomePageComponent,
    NotasComponent,
    CreateNotasComponent,
    PipePipe,
    ChatComponent,
    ChatMessComponent,
    MessageComponent,
    MessageInputComponent,
    UserListComponent,
    UserItemComponent,
    LoginComponent,
    SigninComponent,
    ContentPostComponent,
    PoliticsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireAnalyticsModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatFormFieldModule,
    MatNativeDateModule,
    NgxPaginationModule,
    MatPaginatorModule,
    MatInputModule,
    
    
  ],
  providers: [AuthService, ChatService, {provide: BUCKET, useValue:"proyecto-final-a8b18.appspot.com"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
