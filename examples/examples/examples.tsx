import {Component, ComponentChild, render} from 'preact';
import {TextExample} from './text.example';

class Examples extends Component {
    public render(): ComponentChild {
        return <div>
            <TextExample />
        </div>;
    }
}

render(<Examples />, document.getElementById('examples'));
