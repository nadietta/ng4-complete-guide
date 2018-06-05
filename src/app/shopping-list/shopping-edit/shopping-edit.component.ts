import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
    @ViewChild('f') slForm: NgForm;
    subscription: Subscription;
    editMode = false;
    editedIngredientIndex: number;
    editedIngredient: Ingredient;

    constructor(private slService: ShoppingListService) {
    }

    ngOnInit() {
        this.subscription = this.slService.startedEditing.subscribe(
            (index: number) => {
                this.editedIngredientIndex = index;
                this.editMode = true;
                this.editedIngredient = this.slService.getIngredient(index);
                this.slForm.setValue({
                    'name': this.editedIngredient.name,
                    'amount': this.editedIngredient.amount
                });
            }
        );
    }

    onSubmitIngredient(form: NgForm) {
        const value = form.value;
        const newIngredient = new Ingredient(value.name, value.amount);
        if (this.editMode) {
            this.slService.updateIngredient(this.editedIngredientIndex, newIngredient);
        } else {
            this.slService.addIngredient(newIngredient);
        }
        this.editMode = false;
        form.reset();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onClear() {
        this.slForm.reset();
        this.editMode = false;
    }

    onDeleteIngredient() {
        this.slService.deleteIngredient(this.editedIngredientIndex);
        this.onClear();
    }
}
