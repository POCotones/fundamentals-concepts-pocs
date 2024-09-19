import { ConsoleLogger } from "./ConsoleLogger";
import { FileLogger } from "./FileLogger";

export class LogService {

    /*LogServi depende de algo concreto, aquí hay INYECCIÓN DE DEPENDENCIAS 
    pero no es intercambiable (invertible), por tanto no hay INVERSION DE DEPENDENCIAS
    */
    private logger: ConsoleLogger;  

    constructor(logger: ConsoleLogger) {
        this.logger = logger;
    }

    writeLog(message: string): void {
        this.logger.log(message);
    }

    storeLog(message: string): void {
        //dificil de testear
        //acoplamiento
        //No invertible
        //viola OCP, SRP y DIP
        let loggerFile = new FileLogger("log.txt");

        console.log("store log")
    }
}
