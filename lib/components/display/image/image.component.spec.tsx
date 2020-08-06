import {TestHelper} from '../../../helpers/test.helper';

describe('ImageComponent', () => {
    let testHelper: TestHelper;
    beforeEach(() => {
        testHelper = new TestHelper();
    });

    it('should display a image', () => {
        const imageUrl = 'http://url.com';

        testHelper.mwc.display.image(imageUrl);
        expect(testHelper.rendered().querySelector('img')).toHaveAttribute('src', imageUrl);
        expect(testHelper.rendered().querySelector('img')).not.toHaveAttribute('alt', '');

        expect(testHelper.rendered().querySelector('p')).toBe(null);
    });

    it('should display a top text', () => {
        const imageUrl = 'http://url.com';
        const topText = 'top';

        testHelper.mwc.display.textImageText(topText, imageUrl, null);
        expect(testHelper.rendered().querySelectorAll('p').length).toBe(1);
        expect(testHelper.rendered().querySelector('p')).toHaveText(topText);
    });

    it('should display a bottom text', () => {
        const imageUrl = 'http://url.com';
        const bottomText = 'top';

        testHelper.mwc.display.textImageText(null, imageUrl, bottomText);
        expect(testHelper.rendered().querySelectorAll('p').length).toBe(1);
        expect(testHelper.rendered().querySelector('p')).toHaveText(bottomText);
    });
});
