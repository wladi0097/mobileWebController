import {render} from 'preact';
import {Components} from '../components';
import {ButtonTextComponent} from './buttonText/buttonText.component';
import {InputComponent} from './input/input.component';

export class GetComponents extends Components {
    public input(text: string, buttonText: string): Promise<string> {
        return new Promise((resolve) => {
            render(InputComponent(resolve, text, buttonText), this.element);
        });
    }

    public buttonsText(text: string, buttons: string[]): Promise<number> {
        return new Promise((resolve) => {
            render(ButtonTextComponent(resolve, text, buttons), this.element);
        });
    }
}
