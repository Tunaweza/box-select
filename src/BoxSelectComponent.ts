import {Component, ElementRef, EventEmitter} from "angular2/core";
import {NgModel} from "angular2/common";
import {Input} from "angular2/core";
import {Output} from "angular2/core";
import {OnInit} from "angular2/core";
import {provide} from "angular2/core";
import {Control} from "angular2/common";
import {SimpleChange} from "angular2/core";

@Component({
    selector:'boxSelect',
    inputs: ['list', 'displayParam', 'returnParam'],
    outputs: [],
    template: `
        <div class="boxSelect">
            <ul class="boxSelectContainer">
                <li class="boxSelectItem" [ngClass]="{'boxSelectItemSelected': isSelected(item)}" *ngFor="#item of list" (click)="updateValue(item)">{{ getDisplayValue(item) }}</li>
            </ul>
        </div>
    `,
    directives: []
})

export class BoxSelectComponent implements OnInit {
    @Input('list')
    public list:any[];

    @Input('displayParam')
    public displayParam:string = '';

    @Input('returnParam')
    public returnParam:string = '';

    @Output()
    public BoxSelectChange:EventEmitter = new EventEmitter();

    @Output()
    public change:EventEmitter = new EventEmitter();

    public value:any;



    ngOnInit() {
    }

    getDisplayValue(item) {
        if (this.displayParam != '') {
            if (item.hasOwnProperty(this.displayParam)) {
                return item[this.displayParam];
            } else {
                return '';
            }
        } else {
            return item;
        }
    }

    updateValue(item) {
        this.BoxSelectChange.emit(item);
        this.change.emit(item);
        this.value = this.getReturnValue(item);
    }

    getReturnValue(item) {
        if (this.returnParam != '') {
            if (item.hasOwnProperty(this.returnParam)) {
                return item[this.returnParam];
            } else {
                return {};
            }
        } else {
            return item;
        }
    }

    isSelected(item) {
        if (this.value == this.getReturnValue(item)) {
            return true;
        } else {
            return false;
        }
    }

    setValue(item) {
        this.value = this.getReturnValue(item);
    }



}