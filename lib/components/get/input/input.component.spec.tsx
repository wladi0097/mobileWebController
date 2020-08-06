import {TestHelper} from '../../../helpers/test.helper';

describe('InputComponent', () => {
    let testHelper: TestHelper;
    beforeEach(() => {
        testHelper = new TestHelper();
    });

    it('should display a single button with a header', () => {
        const text = 'hello there';
        const buttonText = 'hi';

        testHelper.mwc.get.input(text, buttonText);
        expect(testHelper.rendered().querySelector('h1')).toHaveText(text);
        expect(testHelper.rendered().querySelector('button')).toHaveText(buttonText);
    });

    it('should return the input', (done) => {
        const input = 'well hello there';

        testHelper.mwc.get.input('', '').then((value: string) => {
            expect(value).toBe(input);
            done();
        });

        testHelper.input('input', input);
        testHelper.waitForStateUpdate(() => {
            testHelper.click('button');
        });
    });

    it('should reject empty inputs', (done) => {
        const input = '';

        testHelper.mwc.get.input('', '').then(() => {
            fail('The request should never have been submitted');
        });
        expect(testHelper.rendered().querySelector('input').getAttribute('class')).toBe('');

        testHelper.input('input', input);
        testHelper.waitForStateUpdate(() => {
            testHelper.click('button');
        });
        testHelper.waitForStateUpdate(() => {
            done();
        });
    });

    it('should reject inputs longer then 80 chars', (done) => {
        const input = [...Array(81)].map(() => 'a').join('');

        testHelper.mwc.get.input('', '').then(() => {
            fail('The request should never have been submitted');
        });
        expect(testHelper.rendered().querySelector('input').getAttribute('class')).toBe('');

        testHelper.input('input', input);
        testHelper.waitForStateUpdate(() => {
            testHelper.click('button');
        });
        testHelper.waitForStateUpdate(() => {
            done();
        });
    });
});
