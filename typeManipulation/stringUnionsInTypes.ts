const person = makeWatchedObject({
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26
})

type PropEventSource<Type> = {
    on<Key extends string & keyof Type>
        (eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void): void
}

function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type> {
    return {
        ...obj,
        on<Key extends string & keyof Type>
            (eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void): void {
            callback(obj[eventName.slice(0, eventName.indexOf('C'))])
        }
    };
}

person.on("firstNameChanged", newValue => {
    console.log(`firstName was changed to ${newValue}!`);
})

