import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router'
import { RetrieveJournalEntriesService } from '../services/retrieve-journal-entries.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [RetrieveJournalEntriesService]
})
export class DetailsComponent implements OnInit {
  entry: any;
  constructor(private route: ActivatedRoute, private Journal: RetrieveJournalEntriesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getDetails(params['id']);
    });
  }

  getDetails(id){
    this.Journal.getEntryId(id)
      .subscribe((entry) => {
        this.entry = entry;
      });
  }

}
