import { Input, Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector :'mov-rating',
    templateUrl : './rating.component.html',
    styleUrls : [ './rating.component.css']
})

export class RatingComponent {

    @Input() ratings:number;
    starWidth:number;

    @Output() ratingClick : EventEmitter<string>  = new EventEmitter<string>();

    ngOnChanges(): void {
      this.starWidth = +this.ratings * 75/5;
    }

    onclick() : void{
        this.ratingClick.emit(`Movie Rating is ${this.ratings}`)
    }

}