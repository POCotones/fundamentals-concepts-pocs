import { ILogger } from "./ILogger";

export class ConsoleLogger implements ILogger {

    log(message: string): void {
        console.log(`Console log: ${message}`);
    }

    storeLog(message: string): void {
        throw new Error("Method not implemented.");
    }
    truncateLog(filePath: string): void {
        throw new Error("Method not implemented.");
    }
    renameLogFileName(filePath: string): void {
        throw new Error("Method not implemented.");
    }

}
