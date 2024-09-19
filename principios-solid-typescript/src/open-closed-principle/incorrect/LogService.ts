export enum LoggerEngine {
    CONSOLE,
    FILE,
    DATABASE
}

/*
No cumple OCP
*/
export class LogService {

    writeLog(loggerEngine: LoggerEngine, message: string): void {
        switch (loggerEngine) {
            case LoggerEngine.CONSOLE:
                console.log("Call function in OTHER clas (or not) to print in console");
                break;
            case LoggerEngine.FILE:
                console.log("Call function in OTHER class (or not) to print in file");
                break;

            case LoggerEngine.DATABASE:
                console.log("Call function to print in database");
                break;
            default:
                console.log("Not implemented\n");
                break;
        }
    }

}
