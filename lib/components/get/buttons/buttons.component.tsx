import {Component, ComponentChild, RenderableProps, VNode} from 'preact';
import {TextHelper} from '../../../helpers/text.helper';
import style from './buttons.component.scss';

interface IProps {
    text?: string;
    buttons: string[];
    isImage: boolean;
    resolver: (input: number) => void;
}

class ButtonsComponent$ extends Component<IProps> {
    public done(index: number): void {
        this.props.resolver(index);
    }

    public render(props?: RenderableProps<IProps>): ComponentChild {
        return <div class={style.imageComponent}>
            {
                this.props.isImage ?
                    <img src={this.props.text} alt='image'/> :
                    <h1 style={TextHelper.fontSize(props.text, 0.7)}>{props.text}</h1>
            }
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

export const ButtonsComponent =
    (resolver: (input: number) => void, text: string, buttons: string[], isImage: boolean): VNode =>
    <ButtonsComponent$ resolver={resolver} buttons={buttons} text={text} isImage={isImage}/>;
