import {render} from 'preact';
import {Components} from '../components';
import {ImageComponent} from './image/image.component';
import {TextComponent} from './text/text.component';

export class DisplayComponents extends Components {
    public text(text: string): void {
        render(TextComponent(text), this.element);
    }

    public image(src: string, alt: string): void {
        render(ImageComponent(src, alt), this.element);
    }
}
