import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';

import { FirstRunPage, LoginPage, MainPage } from '../pages/pages';
import { Settings } from '../providers/providers';
import SailsSocket from 'sails-socket';
import { Storage } from '@ionic/storage';
import { User } from '../providers/providers';


@Component({
  templateUrl: 'menu.html'
})

export class MyApp {
  rootPage:string;
  firstName:string;
  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
   //{ title: 'Tutorial', component: 'TutorialPage' },
   //{ title: 'Welcome', component: 'WelcomePage' },
   //{ title: 'Tabs', component: 'TabsPage' },
   //{ title: 'Cards', component: 'CardsPage' },
   //{ title: 'Content', component: 'ContentPage' },
   //{ title: 'Signup', component: 'SignupPage' },
   //{ title: 'Master Detail', component: 'ListMasterPage' },
   //{ title: 'Menu', component: 'MenuPage' },
   //{ title: 'Settings', component: 'SettingsPage' },
    { title: 'Signup', component: 'SignupPage' },
    { title: 'Login', component: 'LoginPage' },
    { title: 'Search', component: 'SearchPage' },
    { title: 'Babyfoot', component: 'BabyfootPage' },
    { title: 'User', component: 'UserPage' },
    { title: 'Team', component: 'TeamPage' },
    { title: 'Match', component: 'MatchPage' }
  ]

  constructor(private translate: TranslateService, platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen, private storage: Storage, public user: User) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

      const initialParams = {url: 'http://localhost:1337'};
      SailsSocket.connect(initialParams);
    this.checkLogin();
    this.initTranslate();

    //checkPreviousLogin();
  }

  checkLogin(){
    this.storage.get('token').then((val) => {
      console.log(val)
      if (val !==null)  {
        this.rootPage = MainPage 
        this.storage.get('user').then((val) => {
        this.firstName = val.firstName
        console.log(this.firstName)
      })
      } else {
        this.rootPage = LoginPage
      }
     
    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.user.logout();
    this.nav.setRoot(LoginPage);
  }
}
