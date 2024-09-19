import { ILogger } from "./ILogger.js";

export class ConsoleLogger implements ILogger {
    
    log(message: string): void {
        console.log(`Console log: ${message}`);
    }
}