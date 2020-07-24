import {ComponentChild, RenderableProps, VNode} from 'preact';
import {CommonDisplayComponent} from '../common/common.display.component';

interface IProps {
    text?: string;
}

class TextComponent$ extends CommonDisplayComponent<IProps> {
    public render(props?: RenderableProps<IProps>): ComponentChild {
        return <div>
            <p>{props.text}</p>
        </div>;
    }
}

export const TextComponent = (text: string): VNode => <TextComponent$ text={text}/>;
