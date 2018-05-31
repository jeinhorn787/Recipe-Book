import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyD6k3HyhgbPIRelI1ZHyadOCl1Qb1tVYho",
      authDomain: "udemy-recipe-book-19755.firebaseapp.com"
    });
  }

  onNavigate(choice: string) {
    this.loadedFeature = choice;
  }
}
