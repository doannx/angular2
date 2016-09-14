import { Injectable } from '@angular/core';

import { Album } from './album';
import { ALBUMS } from './mock-albums';

@Injectable()
export class AlbumService {
  getAlbums(): Album[] {
    return ALBUMS;
  }
  getAlbum(id: number): Album {
    return this.getAlbums().find(album => {
      return (album.id == id);
    });
  }
}
