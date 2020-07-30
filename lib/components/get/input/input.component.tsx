import {Component, ComponentChild, RenderableProps, VNode} from 'preact';
import {TextHelper} from '../../../helpers/text.helper';

interface IProps {
    text?: string;
    buttonText?: string;
    resolver: (input: string) => void;
}

interface IState {
    inputText: string;
}

class InputComponent$ extends Component<IProps> {
    public state: Readonly<IState> = {inputText: ''};

    public done(): void {
        this.props.resolver(this.state.inputText);
    }

    public onInput(ev: { target: { value: string; }; }): void {
        this.setState({inputText: ev.target.value});
    }

    public render(props?: RenderableProps<IProps>): ComponentChild {
        return <div>
            <h1 style={TextHelper.fontSize(props.text, 0.7)}>{props.text}</h1>
            <input onInput={this.onInput.bind(this)}/>
            <button onClick={() => this.done()}>{props.buttonText}</button>
        </div>;
    }
}

export const InputComponent = (resolver: (input: string) => void, text: string, buttonText: string): VNode =>
    <InputComponent$ text={text} buttonText={buttonText} resolver={resolver}/>;
