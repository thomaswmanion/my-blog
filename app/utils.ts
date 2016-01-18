export class Utils {
    public static CopyProperties(source: any, target: any): void {
        for (var prop in source) {
            target[prop] = source[prop];
        }
    }
}