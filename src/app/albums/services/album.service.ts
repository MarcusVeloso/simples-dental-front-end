import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { Album } from '../models/album';
import { Photograph } from '../models/photograph';

@Injectable()
export class AlbumService extends BaseService {

  constructor(private http: HttpClient) { super(); }

  obterTodosAlbuns(): Observable<Album[]>{
    return this.http
               .get<Album[]>(this.UrlAPIV1 + 'albums');
  }

  obterPhotos(): Observable<Photograph[]>{
    return this.http
               .get<Photograph[]>(this.UrlAPIV1 + 'photos');
  }

  obterPhotosPorId(id:string): Observable<Photograph[]>{
    return this.http
               .get<Photograph[]>(this.UrlAPIV1 + 'photos?albumId=' + id);
  }
}