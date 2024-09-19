import { ILoggerStorable } from "./ILoggerStorable";
import * as fs from 'fs';

export class FileLogger implements ILoggerStorable {
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    log(message: string): void {
        fs.appendFileSync(this.filePath, `File log: ${message}\n`);
    }

    storeLog(message: string): void {
        this.log(message); // Puede ser el mismo método para simplificar
    }
}
