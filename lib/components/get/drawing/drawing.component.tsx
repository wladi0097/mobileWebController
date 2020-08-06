import {Component, ComponentChild, RenderableProps, VNode} from 'preact';
import {TextHelper} from '../../../helpers/text.helper';
import style from './drawing.component.scss';

interface IProps {
    text?: string;
    buttonText?: string;
    resolver: (input: string) => void;
}

interface IState {
    valid: boolean;
    touched: boolean;
}

class DrawingComponent$ extends Component<IProps, IState> {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private pos: { x: number, y: number } = {x: 0, y: 0};
    public state: Readonly<IState> = {valid: true, touched: false};

    public done(): void {
        if (this.validate()) {
            this.props.resolver(this.canvas.toDataURL());
        } else {
            this.setState({valid: false, touched: false});
        }
    }

    public validate(): boolean {
        return this.state.touched;
    }

    public componentDidMount(): void {
        const base = this.base as ParentNode;
        this.canvas = base.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.setUpCanvas();

        this.canvas.addEventListener('mousemove', this.cDraw.bind(this));
        this.canvas.addEventListener('mousedown', this.cSetPosition.bind(this));
    }

    public setUpCanvas(): void {
        this.ctx.canvas.width = this.canvas.getBoundingClientRect().width;
        this.ctx.canvas.height = this.canvas.getBoundingClientRect().height;
        this.ctx.lineWidth = 5;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.ctx.strokeStyle = '#c0392b';
    }

    public render(props?: RenderableProps<IProps>): ComponentChild {
        return <div>
            <h1 style={TextHelper.fontSize(props.text, 0.7)}>{props.text}</h1>
            <div>
                <canvas className={`${style.canvas} ${this.state.valid ? '' :  style.invalid}`}>
                </canvas>
            </div>
            <button onClick={() => this.done()}>{this.props.buttonText}</button>
        </div>;
    }

    private cDraw(event: MouseEvent): void {
        if (event.buttons !== 1) {
            return;
        }

        if (!this.state.touched) {
            this.setState({valid: true, touched: true});
        }

        this.ctx.beginPath();
        this.ctx.moveTo(this.pos.x, this.pos.y);
        this.ctx.lineTo(event.offsetX, event.offsetY);
        this.ctx.stroke();

        this.cSetPosition(event);
    }

    private cSetPosition(event: MouseEvent): void {
        [this.pos.x, this.pos.y] = [event.offsetX, event.offsetY];
    }
}

export const DrawingComponent =
    (resolver: (input: string) => void, text: string, buttonText: string): VNode =>
        <DrawingComponent$ resolver={resolver} text={text} buttonText={buttonText}/>;
