import {Component, ComponentChild, RenderableProps, VNode} from 'preact';
import styles from './image.component.scss';

interface IProps {
    src: string;
    alt?: string;
}

class ImageComponent$ extends Component<IProps> {
    public render(props?: RenderableProps<IProps>): ComponentChild {
        return <div class={styles.imageComponent}>
            <img src={this.props.src} alt={this.props.alt}/>
        </div>;
    }
}

export const ImageComponent = (src: string, alt: string): VNode => <ImageComponent$ src={src} alt={alt}/>;
