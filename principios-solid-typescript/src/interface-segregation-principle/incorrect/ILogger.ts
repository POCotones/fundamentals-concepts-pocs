export interface ILogger {

    log(message: string): void;

    storeLog(message: string): void;

    truncateLog(filePath: string): void;

    renameLogFileName(filePath: string): void;

}
