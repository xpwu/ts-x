import { Millisecond } from "./duration";
export async function Delay(d) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, d / Millisecond);
    });
}
//# sourceMappingURL=delay.js.map