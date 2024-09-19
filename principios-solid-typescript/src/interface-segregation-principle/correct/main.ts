import { ConsoleLogger } from "./ConsoleLogger";
import { FileLogger } from "./FileLogger";
import { ILogger } from "./ILogger";
import { ILoggerStorable } from "./ILoggerStorable";

function performLogging(logger: ILogger): void {
    logger.log("My first log!");
}

/*
Aquí violamos OCP porque modificamos el código 
¿que pasa si no solo tenemos FileLogger como subtipo de ILoggerStorable?
*/
function performLoggingViolatingOCP(logger: ILogger): void {
    logger.log("My first log!");

    if (logger instanceof FileLogger) {
        (logger as ILoggerStorable).storeLog("My first storeble log");
    } else {
        logger.log("My first log");
    }
}

const consoleLogger = new ConsoleLogger();
const fileLogger = new FileLogger("logs.txt");

performLogging(consoleLogger); 
performLogging(fileLogger);

function performAdvancedLogging(logger: ILoggerStorable): void {
    logger.storeLog("Advanced logging message!");
}

performAdvancedLogging(fileLogger);
