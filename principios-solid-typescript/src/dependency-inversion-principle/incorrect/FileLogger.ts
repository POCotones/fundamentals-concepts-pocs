import { ILogger } from "./ILogger";
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
