import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
      <h1>{{title}}</h1>
      <a routerLink="/artists/43ZHCT0cAZBISjO8DG9PnE">Album List</a>
      <a routerLink="/create">Create Album</a>
      <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = "Simple CRUD Angular2 App"
}