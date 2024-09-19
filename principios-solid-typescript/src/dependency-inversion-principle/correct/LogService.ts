import { FileLogger } from './FileLogger';
import { ILogger } from './ILogger';

export class LogService {
    private logger: ILogger;

    constructor(logger: ILogger) {
        this.logger = logger;
    }

    writeLog(message: string): void {
        this.logger.log(message);
    }
}
let file = new FileLogger("archivo")
let logger = new LogService(file);
