import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { AlbumFormComponent} from './album-form.component';
import { AlbumListComponent} from './album-list.component';

import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent,
                  AlbumFormComponent,
                  AlbumListComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
