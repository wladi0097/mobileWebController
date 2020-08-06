import {TestHelper} from '../../../helpers/test.helper';

describe('TextComponent', () => {
    let mwc: TestHelper;
    beforeEach(() => {
        mwc = new TestHelper();
    });

    it('should display a component with text', () => {
        const expectMessage = 'hello there';
        mwc.display.text(expectMessage);
        expect(mwc.rendered()).toHaveText(expectMessage);
    });
});
