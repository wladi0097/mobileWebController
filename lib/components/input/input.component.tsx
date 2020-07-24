import {ComponentChild, RenderableProps} from 'preact';
import Element = JSXInternal.Element;
import {JSXInternal} from 'preact/src/jsx';
import {CommonInputComponent} from '../common/common.input.component';

interface IProps {
    text?: string;
    buttonText?: string;
}

class InputComponent$ extends CommonInputComponent<IProps> {
    public render(
        props?: RenderableProps<IProps>
    ): ComponentChild {
        return <div>
            <h1>{this.props.text}</h1>
            <input/>
            <button>{this.props.buttonText}</button>
        </div>;
    }
}

export const InputComponent = (text: string, buttonText: string): Element => <InputComponent$ text={text}
                                                                                              buttonText={buttonText}/>;
