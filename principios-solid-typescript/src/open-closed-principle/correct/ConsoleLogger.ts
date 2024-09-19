import { ILoggerEngine } from "./ILoggerEngine.js";

export class ConsoleLogger implements ILoggerEngine {
    
    log(message: string): void {
        console.log(`Console log: ${message}`);
    }
}