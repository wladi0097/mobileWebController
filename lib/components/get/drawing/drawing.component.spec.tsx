import {TestHelper} from '../../../helpers/test.helper';

describe('DrawingComponent', () => {
    let testHelper: TestHelper;
    beforeEach(() => {
        // @ts-ignore
        HTMLCanvasElement.prototype.getContext = () => {
            return {
                canvas: {
                    height: 0,
                    width: 0
                }
            };
        };

        testHelper = new TestHelper();
    });

    it('should have a canvas with text and submit', () => {
        const expectMessage = 'hello there';
        const buttonMessage = 'hi';

        testHelper.mwc.get.drawing(expectMessage, buttonMessage);
        expect(testHelper.rendered().querySelector('h1')).toHaveText(expectMessage);
        expect(testHelper.rendered().querySelector('button')).toHaveText(buttonMessage);
        expect(testHelper.rendered().querySelectorAll('canvas').length).toBe(1);
    });
});
