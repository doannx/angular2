import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router
  ){}

  editMode = false;
  submitted = false;

  onSubmit() {
    if (!this.editMode) {
      this.submitted = true;
      this.editMode = !this.editMode;
    } else {
      // save
      console.log('new album: ', this.album);
      // back to list screen
      let link = ['/artists/43ZHCT0cAZBISjO8DG9PnE'];
      this.router.navigate(link);
    }
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      if (id) {
        this.albumService.getAlbum(id).then(album => {
          this.album = album;
        });
      } else {
        this.album = new Album(1, '', '', '');
        this.editMode = true;
      }
    });
  }

  goBack(): void {
    window.history.back();
  }
}
