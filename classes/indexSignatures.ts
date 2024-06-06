class MyClass {
  [s: string]: boolean | ((s: string) => boolean);
 
  check(s: string) {
    return this[s] as boolean;
  }
}

const myClass = new MyClass()
myClass["bool"] = true
myClass["lambda"] = s => true

const lambda = myClass["lambda"]

console.log(myClass.check("lambda"))
const foo = myClass.check("lambda")

//foo("foo")
if (foo) {
    console.log("true")
}

declare function boolOrLambda(): boolean | ((s: string) => boolean)
boolOrLambda() as boolean
