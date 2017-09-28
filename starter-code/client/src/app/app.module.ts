import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router'

import { RetrieveJournalEntriesService } from './services/retrieve-journal-entries.service'

import { AppComponent } from './app.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { DetailsComponent } from './details/details.component';

const routes = [
  { path: '', component: MyHomeComponent },
  { path: ':id', component: DetailsComponent},
  { path: '**', redirectTo: ''}
]
@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RetrieveJournalEntriesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
