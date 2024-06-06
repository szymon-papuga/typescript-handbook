const anyVar: any = 2
// anyVar.b() - this will fail in runtime
console.log(anyVar.someProp) // this will print 'undefined'
const unknownVar: unknown = 2
// unknownVar.b() - this will fail in compile time
// console.log(unknownVar.someProp) - this will also fail in compile time
let s1: string = anyVar
// let s2: string = unknownVar - this will fail in compile time
// s1.toLowerCase() - this will fail in runtime
// console.log(s1.someProp) - this will fail in compile time
let s2 = "foo"
s2 = anyVar
console.log(typeof s2)
const anotherUnknown: unknown = unknownVar
const num: number = unknownVar as number
const str: string = unknownVar as string
// console.log(str.toLowerCase()) - this will fail in runtime

if (typeof unknownVar === 'number') {
    unknownVar.toFixed()
}

const num2 = "foo" as number
// let s3: string = 10 compile eror

// Conclusions:
// 1. Calling function on any will fail in runtime, on unknow will fail in compile time
// 2. Accessing property on any will return undefined, on unknown will fail in compile time
// 3. Any can be assigned to any type, unknown can be assigned only to unknown
// 6. 'as' does not throw exception on incorrect conversion, for unknown
// 7. Instead typeof can be used in if statement to execute code based on what's underlying type of variable
//
