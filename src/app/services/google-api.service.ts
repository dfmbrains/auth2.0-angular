import {Injectable} from '@angular/core';
import {AuthConfig, OAuthService} from "angular-oauth2-oidc";
import {Subject} from "rxjs";
import {IUser} from "../models/User";

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '1097612416485-o93020hbrfo0micddl2kdaah2hqgpuhe.apps.googleusercontent.com',
  scope: 'openid profile email'
};

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  userProfileSubject = new Subject<IUser>();

  constructor(private readonly oAuthService: OAuthService) {
    oAuthService.configure(oAuthConfig);

    oAuthService.logoutUrl = 'https://www.google.com/accounts/Logout';

    oAuthService.loadDiscoveryDocument().then(() => {

      oAuthService.tryLoginImplicitFlow().then(() => {

        if (!oAuthService.hasValidAccessToken()) {
          oAuthService.initLoginFlow();
        } else {
          oAuthService.loadUserProfile().then((userProfile) => {
            this.userProfileSubject.next(userProfile as IUser);
          })
        }
      })
    })
  }

  isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken()
  }

  signOut() {
    this.oAuthService.logOut()
  }
}
