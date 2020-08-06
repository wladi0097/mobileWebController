import * as React from 'preact/compat';
import {DisplayComponents} from './components/display/displayComponents';
import {GetComponents} from './components/get/getComponents';
import styles from './styles/main.scss';

class Builder {
    private readonly displayComponents: DisplayComponents;
    private readonly getComponents: GetComponents;

    constructor(element: HTMLElement) {
        this.displayComponents = new DisplayComponents(element);
        this.getComponents = new GetComponents(element);
    }

    public get display(): DisplayComponents {
        return this.displayComponents;
    }

    public get get(): GetComponents {
        return this.getComponents;
    }
}

export function init(element: HTMLElement): Builder {
    element.classList.add(styles.mobileWebControllerMain);
    return new Builder(element);
}
