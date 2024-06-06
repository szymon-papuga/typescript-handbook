//type DescribableFunction = {
//    description: string;
//    (n: number): boolean; 
//}

function doSomething(fn: {
    description: string;
    (n: number): boolean; 
}) {
    console.log(fn.description + " returned " + fn(6))
}

function myFunc(someArg: number) {
    return someArg > 3;
}

myFunc.description = "default description"

doSomething(myFunc)

let obj = {
    value1: number;
}

obj.value2 = "foo"
