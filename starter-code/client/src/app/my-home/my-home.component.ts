import { Component, OnInit } from '@angular/core';
import { RetrieveJournalEntriesService } from '../services/retrieve-journal-entries.service'

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css'],
  providers: [RetrieveJournalEntriesService ]
})
export class MyHomeComponent implements OnInit {
  list: any;

  constructor(private journal: RetrieveJournalEntriesService) { }

  ngOnInit() {
    this.journal.getList()
    .subscribe((list)=>{
      return this.list = list;
    })
  }

}
