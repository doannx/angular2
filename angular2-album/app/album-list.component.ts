import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Album } from './album';
import { AlbumService } from './album.service';

@Component({
  selector: 'album-list',
  templateUrl: 'app/album-list.component.html',
  providers: [ AlbumService ]
})
export class AlbumListComponent implements OnInit {

  albums: Album[] = [];

  selectedAlbum: Album;

  constructor(
    private albumService: AlbumService,
    private router: Router
  ) { }

  getAlbums(): void {
    //this.albumService.getAlbums().then(albums => this.albums = albums);
    if (this.albums.length==0) {
        this.albums = this.albumService.getAlbums();
    } else {
        console.log(this.albums.length);
    }
  }

  onSelect(album: Album): void {
    let link = ['/detail', album.id];
    this.selectedAlbum = album;
    console.log(album.name);
    this.router.navigate(link);
  }

  ngOnInit(): void {
    this.getAlbums();
  }
}
