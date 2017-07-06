import {Component,Input} from '@angular/core'
@Component({
    selector: 'city-list',
    template: `
    <select name="cityName" [(ngModel)]="selectedCity">
        <option [value]="city.name" *ngFor="let city of cities">
            {{city.name}}
        </option>
</select>
  `
})
export class CListComponent {

    @Input()
    cities: any[] = [];

}