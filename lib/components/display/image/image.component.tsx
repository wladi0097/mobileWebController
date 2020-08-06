import {Component, ComponentChild, RenderableProps, VNode} from 'preact';
import {TextHelper} from '../../../helpers/text.helper';
import styles from './image.component.scss';

interface IProps {
    src: string;
    topText?: string;
    bottomText?: string;
}

class ImageComponent$ extends Component<IProps> {
    public render(props?: RenderableProps<IProps>): ComponentChild {
        return <div class={styles.imageComponent}>
            {props.topText ? <p style={TextHelper.fontSize(props.topText)}>{props.topText}</p> : null}
            <img src={this.props.src} alt='Image could not be loaded'/>
            {props.bottomText ? <p style={TextHelper.fontSize(props.bottomText)}>{props.bottomText}</p> : null}
        </div>;
    }
}

export const ImageComponent = (src: string, topText: string = null, bottomText: string = null): VNode =>
    <ImageComponent$ src={src} topText={topText} bottomText={bottomText}/>;
