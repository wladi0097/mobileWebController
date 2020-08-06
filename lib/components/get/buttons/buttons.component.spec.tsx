import {TestHelper} from '../../../helpers/test.helper';

describe('ButtonsComponent', () => {
    let testHelper: TestHelper;
    beforeEach(() => {
        testHelper = new TestHelper();
    });

    it('should display a single button with a header', () => {
        const expectMessage = 'hello there';
        const buttons = ['hi'];

        testHelper.mwc.get.buttons(expectMessage, buttons);
        expect(testHelper.rendered().querySelector('h1')).toHaveText(expectMessage);
        expect(testHelper.rendered().querySelectorAll('button').length).toBe(1);
        expect(testHelper.rendered().querySelectorAll('button')[0]).toHaveText(buttons[0]);
    });

    it('should be able to display multiple buttons', () => {
        const buttons = ['0', '1', '2', '3', '4', '5', '6', '7'];

        testHelper.mwc.get.buttons('', buttons);
        expect(testHelper.rendered().querySelectorAll('button').length).toBe(8);

        const displayedButtons = Array.from(testHelper.rendered().querySelectorAll('button'))
            .map((button) => button.textContent);
        expect(displayedButtons).toEqual(buttons);
    });

    it('should be able to display an image with buttons', () => {
        const expectedImageUrl = 'http://url.com';
        const buttons = ['hi'];

        testHelper.mwc.get.imageButtons(expectedImageUrl, buttons);
        expect(testHelper.rendered().querySelector('img')).toHaveAttribute('src', expectedImageUrl);
    });

    it('should return the index from the clicked button', (done) => {
        const buttons = ['0', '1', '2', '3', '4', '5', '6', '7'];
        testHelper.mwc.get.imageButtons('', buttons).then((value: number) => {
            expect(value).toBe(0);
            done();
        });

        testHelper.click('button');
    });
});
