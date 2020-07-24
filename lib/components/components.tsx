import {VNode} from 'preact';
import {InputComponent} from './input/input.component';
import {TextComponent} from './text/text.component';

export class Components {
    public static text(text: string): VNode {
        return TextComponent(text);
    }

    public static input(text: string, buttonText: string): VNode {
        return InputComponent(text, buttonText);
    }
}
