import {Component} from '@angular/core';
import {GoogleApiService} from "./services/google-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private readonly googleApi: GoogleApiService) {
  }
  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn()
  }
}
