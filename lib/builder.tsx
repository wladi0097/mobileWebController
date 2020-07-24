import {render} from 'preact';
import * as React from 'preact/compat';
import {CommonDisplayComponent} from './components/common/common.display.component';
import {CommonInputComponent} from './components/common/common.input.component';

class Builder {
    private element: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
    }

    public get(component: CommonInputComponent): void {
        render(component, this.element);
    }

    public display(component: CommonDisplayComponent): void {
        render(component, this.element);
    }
}

export function init(element: HTMLElement) {
    return new Builder(element);
}
