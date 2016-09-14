import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Album } from './album';
import { AlbumService } from './album.service';

@Component({
  selector: 'album-form',
  templateUrl: 'app/album-form.component.html',
  providers: [ AlbumService ]
})
export class AlbumFormComponent implements OnInit {

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute
  ){}

  @Input()
  album: Album;

  active = true;
  submitted = false;

  onSubmit() {
    console.log("submit...");
    this.submitted = true;
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.album = this.albumService.getAlbum(id);
    })
  }
}
