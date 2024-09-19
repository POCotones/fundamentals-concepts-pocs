import { FileLogger } from "./single-responsability/correct/FileLogger.js";
import { LogService } from "./single-responsability/correct/LogService.js";

let logger = new FileLogger("logs.txt");
const logService = new LogService(logger);

logService.writeLog("My first log")



