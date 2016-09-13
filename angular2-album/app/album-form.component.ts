import { Component } from '@angular/core';
import { Album } from './album';

@Component({
  selector: 'album-form',
  templateUrl: 'app/album-form.component.html'
})
export class AlbumFormComponent {
  model = new Album(1, '', '', '');
  active = true;
  submitted = false;

  onSubmit() {
    console.log("submit...");
    this.submitted = true;
    console.log(this.model.name);
  }
}
