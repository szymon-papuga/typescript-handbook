function printName(obj: { first: string, last?: string }) {
    console.log(obj.first);
    console.log(obj.last?.toUpperCase());
}

printName({ first: "Magda" });
printName({ first: "Magda", last: "Papuga" });
