export class TimeFormatter {
    Debug(tag, msg) {
        return `${new Date().toISOString()} Debug: ${tag}  --->  ${msg}`;
    }
    Error(tag, msg) {
        return `${new Date().toISOString()} Error: ${tag}  --->  ${msg}`;
    }
    Info(tag, msg) {
        return `${new Date().toISOString()} Info: ${tag}  --->  ${msg}`;
    }
    Warn(tag, msg) {
        return `${new Date().toISOString()} Warn: ${tag}  --->  ${msg}`;
    }
}
export const ConsoleLogger = {
    w: console,
    f: new TimeFormatter()
};
export const NoLog = {
    w: {
        debug: () => { },
        info: () => { },
        warn: () => { },
        error: () => { }
    },
    f: {
        Debug: () => "",
        Error: () => "",
        Info: () => "",
        Warn: () => ""
    }
};
//# sourceMappingURL=logger.js.map