import { SocialAuthService,FacebookLoginProvider} from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-google';
  user: any;
  loggedIn: any;
  constructor(private authService: SocialAuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user:any) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log("this.user", this.user)
    });
  }

  loginWithFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
      .then((user: any) => {
        console.log("Facebook User",user);
        // You can now access user details like user.id, user.name, user.email, etc.
      })
      .catch(error => {
        console.error(error);
      });
  }
  signOut(): void {
    this.authService.signOut();
  }
}
