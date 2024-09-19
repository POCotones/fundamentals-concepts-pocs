import { ConsoleLogger } from "./ConsoleLogger";
import { FileLogger } from "./FileLogger";
import { LogService } from "./LogService";

let logger = new FileLogger("log.txt");
let consoleLogger = new ConsoleLogger();

let logservice = new LogService(logger, "mi mensaje")