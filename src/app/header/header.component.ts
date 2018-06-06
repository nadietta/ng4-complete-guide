import {Component} from '@angular/core';
import {Response} from '@angular/http';

import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from "../auth/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    // @Output() featureSelected = new EventEmitter<string>();

    constructor(private dsService: DataStorageService,
                private authService: AuthService) {
    }

    // onSelect(feature: string) {
    //   this.featureSelected.emit(feature);
    // }
    onSaveRecipes() {
        this.dsService.storeRecipes().subscribe(
            (response: Response) => {
                console.log(response);
            }
        )
    }

    onRetrieveRecipes() {
        this.dsService.retrieveRecipes();
    }

    onLogout() {
        this.authService.logout();
    }
}
