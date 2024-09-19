import { ILogger } from "./ILogger.js";
import * as fs from 'fs';

export class FileLogger implements ILogger {
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    log(message: string): void {
        fs.appendFileSync(this.filePath, `File log: ${message}\n`);
    }
}