import { ILogger } from "./ILogger";

export interface ILoggerStorable extends ILogger {
    storeLog(message: string): void;
}