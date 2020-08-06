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
    });

    it('should have a image with alt', () => {
        const imageUrl = 'http://url.com';
        const imageAlt = 'alt boiii';

        testHelper.mwc.display.image(imageUrl, imageAlt);
        expect(testHelper.rendered().querySelector('img')).toHaveAttribute('src', imageUrl);
        expect(testHelper.rendered().querySelector('img')).toHaveAttribute('alt', imageAlt);
    });
});
