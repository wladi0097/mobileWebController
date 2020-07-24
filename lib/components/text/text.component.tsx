import {JSXInternal} from 'preact/src/jsx';
import {CommonDisplayComponent} from '../common/common.display.component';
import Element = JSXInternal.Element;

interface IProps {
    text?: string;
}

class TextComponent$ extends CommonDisplayComponent<IProps> {
    public render(): Element {
        return <div>
            <p>{this.props.text}</p>
        </div>;
    }
}

export const TextComponent = (text: string): Element => <TextComponent$ text={text}/>;
