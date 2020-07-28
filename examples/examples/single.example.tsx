import {Component, ComponentChild, RenderableProps} from 'preact';
import styles from './single.example.scss';

interface IProps {
    code: string;
    description: string;
    title: string;
}

export class SingleExample extends Component {
    public props: RenderableProps<IProps>;

    public render(props?: RenderableProps<IProps>): ComponentChild {
        return <div class={styles.single}>
            <h1>{props.title}</h1>
            <iframe>yes</iframe>
            <div><code>{props.code}</code></div>
            <div>{props.description}</div>
        </div>;
    }
}
