import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Album } from './album';
import { AlbumService } from './album.service';

@Component({
  selector: 'album-form',
  templateUrl: 'app/album-form.component.html'
  
})
export class AlbumFormComponent implements OnInit {

  album: Album;
  
  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute
  ){}

  active = true;
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.albumService.getAlbum(id).then(album => {
        this.album = album;
      });
    });
  }

  goBack(): void {
    window.history.back();
  }
}
