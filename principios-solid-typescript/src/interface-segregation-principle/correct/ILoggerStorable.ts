import { ILogger } from "./ILogger";

export interface ILoggerStorable extends ILogger {
    
    storeLog(message: string): void;

    truncateLog(filePath: string): void;

    renameLogFileName(filePath: string): void;
}