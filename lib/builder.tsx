import {render} from 'preact';
import * as React from 'preact/compat';
import {InputComponent} from './components/input/input.component';
import {TextComponent} from './components/text/text.component';
import './styles/main.scss';

class Builder {
    private readonly element: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
    }

    public text(text: string): void {
        render(TextComponent(text), this.element);
    }

    public input(text: string, buttonText: string): void {
        render(InputComponent(text, buttonText), this.element);
    }
}

export function init(element: HTMLElement) {
    return new Builder(element);
}
