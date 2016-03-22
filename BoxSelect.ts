import { BoxSelectComponent } from './src/BoxSelectComponent';
import { BoxSelectValueAccessor } from './src/BoxSelectValueAccessor';
/**
 *
 * A list of all the box select directives used as part of a `@View` annotation.
 *
 *  This is a shorthand for importing them each individually.
 *
 * ### Example
 *
 * ```typescript
 * @Component({
 *   selector: 'my-app',
 *   directives: [BOXSELECT_DIRECTIVES]
 * })
 * class MyApp {}
 * ```
 */
export const BOXSELECT_DIRECTIVES:any[] = [BoxSelectComponent, BoxSelectValueAccessor];
