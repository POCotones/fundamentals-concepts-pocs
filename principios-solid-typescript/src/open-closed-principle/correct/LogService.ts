import { ILoggerEngine } from "./ILoggerEngine.js";

export class LogService {

    writeLog(logger: ILoggerEngine, message: string): void {
        logger.log(message);
    }
}
