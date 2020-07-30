import {ComponentChild, RenderableProps, VNode} from 'preact';
import {TextHelper} from '../../helpers/text.helper';
import {CommonDisplayComponent} from '../common/common.display.component';

interface IProps {
    text?: string;
}

class TextComponent$ extends CommonDisplayComponent<IProps> {
    public render(props?: RenderableProps<IProps>): ComponentChild {
        return <div>
            <p style={TextHelper.fontSize(props.text)}>{props.text}</p>
        </div>;
    }
}

export const TextComponent = (text: string): VNode => <TextComponent$ text={text}/>;
