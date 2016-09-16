import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/Rx';

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

  editMode = true;
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
    /*
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      if (id) {
        this.album = this.albumService.getAlbum(id);
      } else {
        this.editMode = true;
      }
    });
    */
    
    this.route.params.flatMap(params => this.albumService.getAlbum(params['id']))
              .subscribe(album => this.album = album);
  }

  goBack(): void {
    window.history.back();
  }
}
