import {Component, ComponentChild} from 'preact';
import {SingleExample} from './single.example';

export class TextExample extends Component {
    public getCode(): string {
        return `
        (async function(){
        const wmc = mobileWebController.init(document.getElementById('main'))
        const aa = await wmc.input('haha', 'brrrr');
        wmc.text(aa)
        })()
        `;
    }

    public render(): ComponentChild {
        return <SingleExample title='Text Example' code={this.getCode()} description='yeee'/>;
    }
}
