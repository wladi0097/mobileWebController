import {TestHelper} from '../../../helpers/test.helper';

describe('ImageComponent', () => {
    let mwc: TestHelper;
    beforeEach(() => {
        mwc = new TestHelper();
    });

    it('should display a image', () => {
        const imageUrl = 'http://url.com';

        mwc.display.image(imageUrl);
        expect(mwc.rendered().querySelector('img')).toHaveAttribute('src', imageUrl);
        expect(mwc.rendered().querySelector('img')).not.toHaveAttribute('alt', '');
    });

    it('should have a image with alt', () => {
        const imageUrl = 'http://url.com';
        const imageAlt = 'alt boiii';

        mwc.display.image(imageUrl, imageAlt);
        expect(mwc.rendered().querySelector('img')).toHaveAttribute('src', imageUrl);
        expect(mwc.rendered().querySelector('img')).toHaveAttribute('alt', imageAlt);
    });
});
