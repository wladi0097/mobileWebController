import {h} from 'preact';
import {init} from '../builder';

/* tslint:disable */
declare global {
    namespace jest {
        // @ts-ignore
        interface Matchers<R> {
            toHaveText(expected: string): CustomMatcherResult

            toHaveAttribute(attribute: string, value: string): CustomMatcherResult
        }
    }
}

/* tslint:enable */

export class TestHelper {
    private readonly testElementName: string = 'testElement';

    /* tslint:disable */
    // @ts-ignore
    private _mwc;

    /* tslint:enable */

    constructor() {
        this.injectHtml();
        this.extendMatchers();

        // @ts-ignore
        window.h = h;
    }

    // tslint:disable-next-line:no-any
    public get mwc(): any {
        return this._mwc;
    }

    public click(query: string): void {
        const event = new MouseEvent('click');
        const element = document.getElementById(this.testElementName).querySelector(query);

        if (!element) {
            throw new Error(`element with the query ${query} could not be found`);
        }
        element.dispatchEvent(event);
    }

    public waitForStateUpdate(callback: () => void): void {
        // To be honest, I gave up trying to get the real callback mock.
        setTimeout(() => {
            callback();
        }, 10);
    }

    public input(query: string, input: string): void {
        const element = document.getElementById(this.testElementName).querySelector(query) as HTMLInputElement;

        if (!element) {
            throw new Error(`element with the query ${query} could not be found`);
        }

        const event = new KeyboardEvent('input');
        element.value = input;
        element.dispatchEvent(event);
    }

    public rendered(): HTMLElement {
        return document.getElementById(this.testElementName);
    }

    private extendMatchers() {
        expect.extend(({
            toHaveText(received: HTMLElement, expected: string): jest.CustomMatcherResult {
                const pass = received.textContent.includes(expected);
                const message = () => `The element does not contain the expected text ${expected}`;

                return {
                    message,
                    pass
                };
            },
            toHaveAttribute(received: HTMLElement, attribute: string, value: string): jest.CustomMatcherResult {
                const pass = received.hasAttribute(attribute) ? received.getAttribute(attribute) === value : false;
                const message = () => `The element does not have the attribute ${attribute} with the value ${value}`;

                return {
                    message,
                    pass
                };
            }
        }));
    }

    private injectHtml() {
        const existingElement = document.getElementById(this.testElementName);
        if (existingElement) {
            document.body.removeChild(existingElement);
        }

        const newElement = document.createElement('div');
        newElement.id = this.testElementName;
        document.body.append(newElement);
        this._mwc = init(newElement);
    }
}
