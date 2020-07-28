import {ComponentChild, RenderableProps, VNode} from 'preact';
import {CommonInputComponent} from '../common/common.input.component';
import styles from './input.component.scss';

interface IProps {
    text?: string;
    buttonText?: string;
}

class InputComponent$ extends CommonInputComponent<IProps> {
    public render(props?: RenderableProps<IProps>): ComponentChild {
        return <div className={styles.inputComponent}>
            <h1>{props.text}</h1>
            <input/>
            <button>{props.buttonText}</button>
        </div>;
    }
}

export const InputComponent = (text: string, buttonText: string): VNode => <InputComponent$
    text={text} buttonText={buttonText}/>;
