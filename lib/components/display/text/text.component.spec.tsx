import {TestHelper} from '../../../helpers/test.helper';

describe('TextComponent', () => {
    let testHelper: TestHelper;
    beforeEach(() => {
        testHelper = new TestHelper();
    });

    it('should display a component with text', () => {
        const expectMessage = 'hello there';
        testHelper.mwc.display.text(expectMessage);
        expect(testHelper.rendered()).toHaveText(expectMessage);
    });
});
