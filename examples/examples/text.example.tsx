import {Component, ComponentChild} from 'preact';
import {SingleExample} from './single.example';

export class TextExample extends Component {
    public getCode(): string {
        return `window.wmc.text('haha')`;
    }

    public render(): ComponentChild {
        return <SingleExample title='Text Example' code={this.getCode()} description='yeee'/>;
    }
}
