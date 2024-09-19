import { ILogger } from "./ILogger.js";

export class LogService {
    private logger: ILogger;

    constructor(logger: ILogger) {
        this.logger = logger;
    }

    writeLog(message: string): void {
        this.logger.log(message);
    }
}
