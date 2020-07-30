import {ComponentChild, RenderableProps, VNode} from 'preact';
import {CommonDisplayComponent} from '../common/common.display.component';
import styles from './text.component.scss';

interface IProps {
    text?: string;
}

class TextComponent$ extends CommonDisplayComponent<IProps> {
    public render(props?: RenderableProps<IProps>): ComponentChild {
        return <div className={styles.textComponent}>
            <p style={`font-size: ${this.textSize()}`}>{props.text}</p>
        </div>;
    }

    private textSize(): string {
        const chars = this.props.text.length;
        switch (true) {
            case chars <= 5:
                return '23vw';
            case chars <= 10:
                return '14vw';
            case chars <= 20:
                return '10vw';
            case chars <= 200:
                return '8vw';
            default:
                return '20px';
        }
    }
}

export const TextComponent = (text: string): VNode => <TextComponent$ text={text}/>;
