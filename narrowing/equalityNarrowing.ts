function printAll(strs: string | string[] | null) {
    if (strs !== null) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s.toLowerCase())
            } 
        }
    }
}

printAll(["foo", "bar"])
printAll(null)

interface Container {
    value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
    if (container.value != null) {
        console.log(container.value)
        container.value *= factor
    }
}

multiplyValue({ value: 2 }, 2)
multiplyValue({ value: null }, 2)
multiplyValue({ value: undefined }, 2)
