import {render} from 'preact';
import {Components} from '../components';
import {InputComponent} from './input/input.component';

export class GetComponents extends Components {
    public input(text: string, buttonText: string): Promise<string> {
        return new Promise((resolve) => {
            render(InputComponent(resolve, text, buttonText), this.element);
        });
    }
}
