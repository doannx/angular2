import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Album } from './album';
import { AlbumService } from './album.service';

@Component({
  selector: 'album-list',
  templateUrl: 'app/album-list.component.html'
  
})
export class AlbumListComponent implements OnInit {

  albums: Observable<Album[]>;

  selectedAlbum: Album;

  constructor(
    private albumService: AlbumService,
    private router: Router
  ) { }

  getAlbums(): void {
    this.albums = this.albumService.getAlbums();
  }

  onSelect(album: Album): void {
    let link = ['/detail', album.id];
    this.selectedAlbum = album;
    this.router.navigate(link);
  }

  ngOnInit(): void {
    this.getAlbums();
  }
}
