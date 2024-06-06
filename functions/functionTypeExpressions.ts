type GreetFunction = (a: string) => void

function greet(fn: GreetFunction) {
    fn("Hello world")
}

function printToConsole(str: string) {
    console.log(str)
}

greet(printToConsole)
