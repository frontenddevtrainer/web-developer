const messageHandler = function(applicationName){
    const print = function(message){
        console.log(`Application Name: ${applicationName}, Message: ${message}`);
    }
    return print
}

const printHandler = new messageHandler("Demo");

console.log(printHandler);

printHandler("Hello World!!!");