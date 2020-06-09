import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JournalEntry } from '@nx-example/types';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

 fetch() {
   return this.http.get<JournalEntry[]>('/api/journals');
 }

 save(entry: JournalEntry) {
   return this.http.post('/api/journals', entry);
 }

 delete(id: number) {
   return this.http.delete(`/api/journals/${id}`);
 }
}