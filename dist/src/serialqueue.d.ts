export declare class SerialQueue<T> {
    private buffer;
    private processor;
    private processing;
    constructor(consumer: (data: T) => Promise<void>);
    dispatch(data: T): void;
}
//# sourceMappingURL=serialqueue.d.ts.map