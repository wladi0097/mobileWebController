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

    public componentDidMount(): void {
        this.fillIframeWithCode();
    }

    public onInput(ev): void {
        this.setState({ code: ev.target.value });
    }

    public render(props?: RenderableProps<IProps>): ComponentChild {
        return <div class={styles.single}>
            <h1>{props.title}</h1>
            <div>
                <div class={styles.content}>
                    <iframe width='400' height='720'>filled later</iframe>
                </div>
                <div class={styles.content}>
                    <div>
                        {props.description}
                    </div>
                    <div>
                    <textarea value={this.state.code} onInput={this.onInput}>

                    </textarea>
                        <button onClick={this.fillIframeWithCode.bind(this)}>redraw</button>
                    </div>
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
            window.wmc = mobileWebController.init(document.getElementById('main'))
            ${this.state.code}
        </script>
        `;

        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(iframeContent);
        iframe.contentWindow.document.close();
    }
}
