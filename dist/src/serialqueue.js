export class SerialQueue {
    constructor(consumer) {
        this.buffer = [];
        this.processing = false;
        this.processor = async () => {
            if (this.processing) {
                return;
            }
            this.processing = true;
            let d;
            while ((d = this.buffer.pop()) !== undefined) {
                await consumer(d);
            }
            this.processing = false;
        };
    }
    dispatch(data) {
        this.buffer.push(data);
        this.processor().then();
    }
}
//# sourceMappingURL=serialqueue.js.map