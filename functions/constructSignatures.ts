type SomeObject = {
    value: number
}

type SomeConstructor = {
    new (s: string): SomeObject
}

function fn(ctor: SomeConstructor) {
    return new ctor("asd")
}

interface CallOrConstruct {
    (n?: number): string
    new (s: string): Date
}
