import {ComponentChild, RenderableProps, VNode} from 'preact';
import {CommonDisplayComponent} from '../common/common.display.component';
import styles from './text.component.scss';

interface IProps {
    text?: string;
}

class TextComponent$ extends CommonDisplayComponent<IProps> {
    public render(props?: RenderableProps<IProps>): ComponentChild {
        return <div className={styles.textComponent}>
            <p>{props.text}</p>
        </div>;
    }
}

export const TextComponent = (text: string): VNode => <TextComponent$ text={text}/>;
