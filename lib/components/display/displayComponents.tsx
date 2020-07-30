import {render} from 'preact';
import {Components} from '../components';
import {TextComponent} from './text/text.component';

export class DisplayComponents extends Components {
    public text(text: string): void {
        render(TextComponent(text), this.element);
    }
}
