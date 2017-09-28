import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router'

import { RetrieveJournalEntriesService } from './services/retrieve-journal-entries.service'

import { AppComponent } from './app.component';
import { MyHomeComponent } from './my-home/my-home.component';

const routes = [
  { path: '', component: MyHomeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent
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
