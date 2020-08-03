import {Component, ComponentChild, render} from 'preact';
import {SingleExample} from './single.example';

const displayExamples = [
    {
        code: 'mwc.display.text("hello world")',
        description: 'A simple text output with font autoscaling',
        title: 'Text',
    },
    {
        code: 'mwc.display.image("https://img.pngio.com/sad-cat-pictures-clipart-images-gallery-for-free-download-myreal-sad-cat-transparent-532_540.png")',
        description: 'show a simple image',
        title: 'Image',
    }
].map((displayExample) => {
    const code = `mwc = mobileWebController.init(document.getElementById('main'));\n` + displayExample.code;
    return <SingleExample title={displayExample.title} code={code} description={displayExample.description}/>;
});

const getExamples = [
    {
        code: 'const result = await mwc.get.input("I need your info", "thanks")',
        description: 'Text request',
        displayAs: 'mwc.display.text(result)',
        title: 'Get text input',
    },
].map((getExample) => {
    const code = '(async function(){\n' +
        `mwc = mobileWebController.init(document.getElementById('main'));\n` +
        getExample.code + '\n' +
        getExample.displayAs + '\n' +
        '})()';
    return <SingleExample title={getExample.title} code={code} description={getExample.description}/>;
});

class Examples extends Component {
    public render(): ComponentChild {
        return <div>
            {displayExamples}
            {getExamples}
        </div>;
    }
}

render(<Examples />, document.getElementById('examples'));
