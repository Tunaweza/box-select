import {ControlValueAccessor} from "angular2/common";
import {BoxSelectComponent} from "./BoxSelectComponent";
import {Renderer} from "angular2/core";
import {ElementRef} from "angular2/core";
import {Directive} from "angular2/core";
import {NG_VALUE_ACCESSOR} from "angular2/common";
import {forwardRef} from "angular2/core";
import {Provider} from "angular2/core";

const CUSTOM_VALUE_ACCESSOR = new Provider(
    NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => BoxSelectValueAccessor), multi: true});

@Directive({
    selector: 'boxSelect',
    host: {'(BoxSelectChange)': 'onChange($event)'},
    providers: [CUSTOM_VALUE_ACCESSOR]
})

export  class BoxSelectValueAccessor implements ControlValueAccessor {
    onChange = (_) => {};
    onTouched = () => {};

    constructor(private host: BoxSelectComponent) { }

    writeValue(value: any): void {
        this.host.setValue(value);
    }

    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}
