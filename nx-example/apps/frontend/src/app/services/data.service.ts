import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JournalEntry } from '@nx-example/types';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  fetch() {
    return this.http.get<JournalEntry[]>(`${environment.apiUrl}/api/journals`);
  }

  save(entry: JournalEntry) {
    return this.http.post(`${environment.apiUrl}/api/journals`, entry);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/api/journals/${id}`);
  }
}