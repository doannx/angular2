import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Album } from './album';
import { AlbumService } from './album.service';
import { ArtistService } from './artist.service';

@Component({
  selector: 'album-list',
  templateUrl: 'app/album-list.component.html'

})
export class AlbumListComponent implements OnInit {

  albums: Album[];
  artists: Album[];

  selectedAlbum: Album;

  constructor(
    private albumService: AlbumService,
    private artistService: ArtistService,
    private router: Router
  ) { }

  onSelect(album: Album): void {
    let link = ['/detail', album.id];
    this.selectedAlbum = album;
    this.router.navigate(link);
  }

  ngOnInit(): void {
    this.albumService.getAll()
      .subscribe(albums => this.albums = albums);
    this.artistService.getAll()
      .subscribe(artists => this.artists = artists);
  }
}
