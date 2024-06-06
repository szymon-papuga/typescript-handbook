class Greeter {
    readonly name: string = "world"

   constructor(otherName?: string) {
       if (otherName !== undefined) {
           this.name = otherName
       }
   }
}

console.log(new Greeter(undefined))
