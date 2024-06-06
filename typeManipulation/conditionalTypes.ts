interface Animal {
    live(): void;
}

interface Dog extends Animal {
    woof(): void;
}

type Example1 = Dog extends Animal ? number : string;

interface IdLabel {
    id: number /* some fields */;
}
interface NameLabel {
    name: string /* other fields */;
}

declare function strOrNum(): string | number;

const strOrNumVar = strOrNum()

//function createLabel(id: number): IdLabel;
//function createLabel(name: string): NameLabel;
//function createLabel(nameOrId: string | number): IdLabel | NameLabel;
//function createLabel(nameOrId: string | number): IdLabel | NameLabel {
//    throw "unimplemented"
//}

type NameOrId<T extends number | string> = T extends number
    ? IdLabel
    : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
    throw "unimplemented"
}

