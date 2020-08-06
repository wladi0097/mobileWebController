import {Component, ComponentChild, RenderableProps, VNode} from 'preact';
import {TextHelper} from '../../../helpers/text.helper';
import style from './input.component.scss';

interface IProps {
    text?: string;
    buttonText?: string;
    resolver: (input: string) => void;
}

interface IState {
    inputText: string;
    valid: boolean;
}

class InputComponent$ extends Component<IProps> {
    public state: Readonly<IState> = {inputText: '', valid: true};

    public done(): void {
        if (this.validate()) {
            this.props.resolver(this.state.inputText);
        } else {
            this.setState({valid: false});
        }
    }

    public onInput(ev: { target: { value: string; }; }): void {
        this.setState({inputText: ev.target.value, valid: true});
    }

    public validate(): boolean {
        const input = this.state.inputText;
        return input.length >= 1 && input.length <= 80;
    }

    public render(props?: RenderableProps<IProps>): ComponentChild {
        return <div>
            <h1 style={TextHelper.fontSize(props.text, 0.7)}>{props.text}</h1>
            <input class={this.state.valid ? '' : style.invalid} onInput={this.onInput.bind(this)}/>
            <button onClick={() => this.done()}>{props.buttonText}</button>
        </div>;
    }
}

export const InputComponent = (resolver: (input: string) => void, text: string, buttonText: string): VNode =>
    <InputComponent$ text={text} buttonText={buttonText} resolver={resolver}/>;
