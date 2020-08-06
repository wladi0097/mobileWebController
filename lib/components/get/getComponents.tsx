import {render} from 'preact';
import {Components} from '../components';
import {ButtonsComponent} from './buttons/buttons.component';
import {DrawingComponent} from './drawing/drawing.component';
import {InputComponent} from './input/input.component';

export class GetComponents extends Components {
    public input(text: string, buttonText: string): Promise<string> {
        return new Promise((resolve) => {
            render(InputComponent(resolve, text, buttonText), this.element);
        });
    }

    public buttons(text: string, buttons: string[]): Promise<number> {
        return new Promise((resolve) => {
            render(ButtonsComponent(resolve, text, buttons, false), this.element);
        });
    }

    public imageButtons(url: string, buttons: string[]): Promise<number> {
        return new Promise((resolve) => {
            render(ButtonsComponent(resolve, url, buttons, true), this.element);
        });
    }

    public drawing(text: string, buttonText: string, colors: string[]): Promise<string> {
        return new Promise((resolve) => {
            render(DrawingComponent(resolve, text, buttonText, colors), this.element);
        });
    }
}
