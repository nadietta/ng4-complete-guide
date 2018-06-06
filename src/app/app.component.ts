import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    loadedFeature = 'recipe';
    myAppBool = false;

    ngOnInit(): void {
        firebase.initializeApp({
            apiKey: 'AIzaSyCdLZesJq2d4F5CVrxvQT0FBuNOgmoHcdA',
            authDomain: 'ng-test-6e49c.firebaseapp.com'
        })
    }

    onNavigate(feature: string) {
        this.loadedFeature = feature;
    }
}
