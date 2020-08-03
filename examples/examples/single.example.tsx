import {Component, ComponentChild, RenderableProps} from 'preact';
import styles from './single.example.scss';

interface IProps {
    code: string;
    description: string;
    title: string;
}

interface IState {
    code: string;
}

export class SingleExample extends Component<IProps, IState> {
    public props: RenderableProps<IProps>;
    public state: Readonly<IState> = {code: this.props.code};
    private editor;

    public componentDidMount(): void {
        const base = this.base as ParentNode;

        this.fillIframeWithCode();

        if (window.CodeMirror) {
            this.editor = window.CodeMirror(base.querySelector('.editor'), {
                lineNumbers: true,
                mode: 'javascript',
                showCursorWhenSelecting: true,
                value: String(this.props.code),
            });

            this.editor.on('change', () => {
                this.setState({code: this.editor.getValue()});
            });
        }
    }

    public onInput(ev: { target: { value: string; }; }): void {
        this.setState({code: ev.target.value});
    }

    public render(props?: RenderableProps<IProps>): ComponentChild {
        return <div class={styles.single}>
            <div class={styles.phone}>
                <iframe width='400' height='720'>filled later</iframe>
            </div>
            <div class={styles.describer}>
                <h1>{props.title}</h1>
                <div>
                    {props.description}
                </div>
                <div>
                    <p>Try it out:</p>
                    <div class='editor'></div>
                    <button onClick={this.fillIframeWithCode.bind(this)}>redraw</button>
                </div>
            </div>
        </div>;
    }

    private fillIframeWithCode(): void {
        const base = this.base as ParentNode;
        const iframe = base.querySelector('iframe');
        const iframeContent = `
        <link rel="stylesheet" type="text/css" href="main.css" />
        <div id="main"></div>
        <script src="mobileWebController.js"></script>
        <script>
            ${this.state.code}
        </script>
        `;

        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(iframeContent);
        iframe.contentWindow.document.close();
    }
}
