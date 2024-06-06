function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0]
}

console.log(firstElement([]))

function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a
    } else {
        return b
    }
}

const longerArray = longest([1, 2], [1, 2, 2])
const longerString = longest("as", "asd")

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2)
}

const arr = combine<string | number>([1, 2], ["hello"])
