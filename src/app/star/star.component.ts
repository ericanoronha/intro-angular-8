import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

    @Input() //elegível para receber informação // propriedade da tag app-star
    rating: number = 0;

    starWidth: number;

    ngOnChanges(): void { 
        this.starWidth = this.rating * 74/5;
    }

}