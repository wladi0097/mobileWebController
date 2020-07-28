import {Component, ComponentChild} from 'preact';
import {SingleExample} from './single.example';

export class TextExample extends Component {
    public render(): ComponentChild {
        return <SingleExample title='text Example' code='aaa' description='yeee'  />;
    }
}
