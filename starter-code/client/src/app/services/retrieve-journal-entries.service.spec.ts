import { TestBed, inject } from '@angular/core/testing';

import { RetrieveJournalEntriesService } from './retrieve-journal-entries.service';

describe('RetrieveJournalEntriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetrieveJournalEntriesService]
    });
  });

  it('should be created', inject([RetrieveJournalEntriesService], (service: RetrieveJournalEntriesService) => {
    expect(service).toBeTruthy();
  }));
});
