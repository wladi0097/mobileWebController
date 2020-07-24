import {JSXInternal} from 'preact/src/jsx';
import {InputComponent} from './input/input.component';
import {TextComponent} from './text/text.component';
import Element = JSXInternal.Element;

export class Components {
    public static text(text: string): Element {
        return TextComponent(text);
    }

    public static input(text: string, buttonText: string): Element {
        return InputComponent(text, buttonText);
    }
}
