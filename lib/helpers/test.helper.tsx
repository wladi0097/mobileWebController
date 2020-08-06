import {h} from 'preact';
import {init} from '../builder';
import {DisplayComponents} from '../components/display/displayComponents';
import {GetComponents} from '../components/get/getComponents';

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
    // @ts-ignore
    private mwc;

    constructor() {
        this.injectHtml();
        this.extendMatchers();

        // @ts-ignore
        window.h = h;
    }

    public get display(): DisplayComponents {
        return this.mwc.displayComponents;
    }

    public get get(): GetComponents {
        return this.mwc.getComponents;
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
        this.mwc = init(newElement);
    }
}
