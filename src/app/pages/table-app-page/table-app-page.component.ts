import {Component, OnInit} from '@angular/core';
import {GoogleApiService} from "../../services/google-api.service";
import {IUser} from "../../models/User";

@Component({
  selector: 'app-table-app-page',
  templateUrl: './table-app-page.component.html',
  styleUrls: ['./table-app-page.component.scss']
})
export class TableAppPageComponent implements OnInit {

  userInfo?: IUser;

  constructor(private readonly googleApi: GoogleApiService) {
    googleApi.userProfileSubject.subscribe(info => {
      this.userInfo = info
    })
  }

  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn()
  }

  logout() {
    this.googleApi.signOut()
  }

  ngOnInit(): void {
  }

}
