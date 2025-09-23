export declare class Utf8 {
    readonly raw: Uint8Array;
    private readonly indexes;
    private readonly str;
    readonly byteLength: number;
    readonly length: number;
    constructor(input: ArrayBufferLike | string);
    private static loadUTF8CharCode;
    private static putUTF8CharCode;
    private static getUTF8CharLength;
    toString(): string;
    codeUnitAt(index: number): Uint8Array;
}
//# sourceMappingURL=utf8.d.ts.map