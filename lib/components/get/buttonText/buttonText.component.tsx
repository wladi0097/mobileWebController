import {Component, ComponentChild, RenderableProps, VNode} from 'preact';
import {TextHelper} from '../../../helpers/text.helper';
import style from './buttonText.component.scss';

interface IProps {
    text?: string;
    buttons: string[];
    resolver: (input: number) => void;
}

interface IState {
    inputText: string;
}

class ButtonTextComponent$ extends Component<IProps, IState> {
    public done(index: number): void {
        this.props.resolver(index);
    }

    public render(props?: RenderableProps<IProps>): ComponentChild {
        return <div>
            <h1 style={TextHelper.fontSize(props.text, 0.7)}>{props.text}</h1>
            {
                this.props.buttons.map((button: string, index: number) => {
                    return <button class={style.button}
                        onClick={() => this.done(index)}
                    >{button}</button>;
                })
            }
        </div>;
    }
}

export const ButtonTextComponent = (resolver: (input: number) => void, text: string, buttons: string[]): VNode =>
    <ButtonTextComponent$ resolver={resolver} buttons={buttons} text={text}/>;
