import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url = 'http://localhost:3000/restaurants';

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server error.');
  }

  getList(): Observable<any> {
    return this.http.get<any>(this.url).pipe(catchError(this.errorHandler));
  }
}
