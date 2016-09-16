import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/Rx';

import { Album } from './album';
import { ALBUMS } from './mock-albums';

@Injectable()
export class AlbumService {

  constructor(private http: Http) {}
  
  getAlbums(): Observable<Album[]> {
    return this.http.get("http://localhost:3000/albums").map((r: Response) => r.json() as Album[]).catch(this.handleError);
  }
  
  getAlbum(id: string): Observable<Album> {
    return this.http.get("http://localhost:3000/albums/" + id).map((r: Response) => r.json() as Album).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
