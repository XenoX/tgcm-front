import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, timeout} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${url}`).pipe(
      timeout(10_000),
      catchError((error: HttpErrorResponse) => {
        if (!environment.production) {
          console.error('Erreur de requête API :', error);
        }
        throw error;
      })
    );
  }
}
