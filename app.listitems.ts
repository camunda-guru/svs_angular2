import {Component} from '@angular/core'

@Component({
    selector: 'clist-demo',
    template: `
        <h1>Select City</h1>
        <city-list [cities]="cityData"></city-list>
    `
})
export class ListItemComponent {

    cityData: any[] = [
        { name: 'Chennai' },
        { name: 'Trichy' },
        { name: 'Coimbatore' }
    ];

}
