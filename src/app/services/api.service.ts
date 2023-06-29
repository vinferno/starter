import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://pokeapi.co/api/v2/';
  constructor(
    private http: HttpClient,
  ) { }

  get<T>(url: string) {
    return this.http.get<T>(this.baseUrl + url);
  }
}
