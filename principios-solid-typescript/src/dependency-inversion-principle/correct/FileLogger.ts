import { ILogger } from "./ILogger";
import * as fs from 'fs';

export class FileLogger implements ILogger {
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    truncateLog(filePath: string): void {
        console.log("Implemented ok")
    }
    renameLogFileName(filePath: string): void {
        console.log("Implemented ok")
    }

    log(message: string): void {
        fs.appendFileSync(this.filePath, `File log: ${message}\n`);
    }

    storeLog(message: string): void {
        console.log("Store log")
    }
}
