import { Injectable } from '@angular/core';

import { Album } from './album';
import { ALBUMS } from './mock-albums';

@Injectable()
export class AlbumService {
  
  getAlbums(): Promise<Album[]> {
    return Promise.resolve(ALBUMS);
  }
  
  getAlbum(id: number): Promise<Album> {
    return this.getAlbums()
               .then(albums => albums.find(album => album.id === id));
  }
}
