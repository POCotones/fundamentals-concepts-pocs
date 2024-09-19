export class LogService {


    writeLogInFile(message: string): void {
        console.log("printing in txt file")
    }

    writeLogInConsole(message: string): void {
        console.log("Printing in console");
    }

    writeLogInDatabase(message: string): void {
        console.log("Storing in  mongo...")
    }

    queueLog(message: string): void {
        console.log("Send log to asome Popular Broker");
        console.log("Do other stuff");
    }
    

}