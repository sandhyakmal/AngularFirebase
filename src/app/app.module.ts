import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { PageStudentListComponent } from './pages/page-student-list/page-student-list.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { CardPlanComponent } from './pages/components/card-plan/card-plan.component';
import { CardTodoComponent } from './pages/components/card-todo/card-todo.component';
import { CardDoneComponent } from './pages/components/card-done/card-done.component';
import { SanlloNavbarComponent } from './pages/components/sanllo-navbar/sanllo-navbar.component';
import { PageSanlloComponent } from './pages/page-sanllo/page-sanllo.component';

@NgModule({
  declarations: [
    AppComponent,
    PageStudentListComponent,
    CardPlanComponent,
    CardTodoComponent,
    CardDoneComponent,
    SanlloNavbarComponent,
    PageSanlloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
