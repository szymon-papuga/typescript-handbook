type voidFunc = () => void

const f1: voidFunc = () => {
    return true
}

const f2: voidFunc = () => true

const f3: voidFunc = function () {
    return true
}

const v1 = f1()
const v2 = f2()
const v3 = f3()

const src = [1,2,3]
const dest = [0]

src.forEach((el) => dest.push(el))

function f4(): void {
    return true;
}

const f5 = function(): void {
    return true
} 
