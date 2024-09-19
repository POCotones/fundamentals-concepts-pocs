import { ILoggerEngine } from "./ILoggerEngine.js";
import * as fs from 'fs';

export class FileLogger implements ILoggerEngine {
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    log(message: string): void {
        fs.appendFileSync(this.filePath, `File log: ${message}\n`);
    }
}