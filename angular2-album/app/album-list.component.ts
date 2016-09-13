import { Component, OnInit } from '@angular/core';

import { Album } from './album';
import { AlbumService } from './album.service';

@Component({
  selector: 'album-list',
  templateUrl: 'app/album-list.component.html',
  providers: [ AlbumService ]
})
export class AlbumListComponent implements OnInit {

  albums: Album[] = [];

  constructor(private albumService: AlbumService) { }

  getAlbums(): void {

    //this.albumService.getAlbums().then(albums => this.albums = albums);
    if (this.albums.length==0) {
        this.albums = this.albumService.getAlbums();
    } else {
        console.log(this.albums.length);
    }
  }

  ngOnInit(): void {
    this.getAlbums();
  }
}
