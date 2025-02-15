import {Component, ComponentChild, render} from 'preact';
import {SingleExample} from './single.example';

const exampleImage = 'https://img.pngio.com/sad-cat-pictures-clipart-images-gallery-for-free-download-myreal-sad-cat-transparent-532_540.png';

const displayExamples = [
    {
        code: 'mwc.display.text("hello world")',
        description: 'A simple text output with font autoscaling',
        title: 'Text',
    },
    {
        code: `mwc.display.image("${exampleImage}")`,
        description: 'show a simple image',
        title: 'Image',
    },
    {
        code: `mwc.display.textImageText("top", "${exampleImage}", "bottom")`,
        description: 'text - image - text',
        title: 'text - image - text',
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
    {
        code: 'const buttons = ["Ok then"]; const result = await mwc.get.buttons("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum", buttons)',
        description: 'button list',
        displayAs: 'mwc.display.text(result)',
        title: 'Get button input with long text',
    },
    {
        code: 'const buttons = ["yes", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"]; const result = await mwc.get.buttons("", buttons)',
        description: 'button list',
        displayAs: 'mwc.display.text(result)',
        title: 'Get button input with long button text',
    },
    {
        code: 'const buttons = ["1", "2", "3", "4", "5", "6", "7", "8"]; const result = await mwc.get.buttons("8 buttons", buttons)',
        description: 'button list',
        displayAs: 'mwc.display.text(result)',
        title: 'Get 8 buttons input',
    },
    {
        code: `const buttons = ["ohh maaan", "soo sad"]; const result = await mwc.get.imageButtons("${exampleImage}", buttons)`,
        description: 'image buttons list',
        displayAs: 'mwc.display.text(result)',
        title: 'Image buttons',
    },
    {
        code: `const result = await mwc.get.drawing("draw me like your french girls", "submit", ["#000", "#a90000"])`,
        description: 'drawing',
        displayAs: 'mwc.display.image(result)',
        title: 'Drawing',
    }
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
