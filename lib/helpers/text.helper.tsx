export class TextHelper {
    public static fontSize(text: string, intensity: number = 1): string {
        return `font-size: ` + [[5, 90], [10, 55], [20, 40], [200, 30], [0, 20]]
            .find(([check]) => check > text.length || check === 0)[1] * intensity + ';';
    }
}
