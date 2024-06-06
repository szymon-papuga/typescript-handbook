function printId(id: number | string) {
    if (typeof id === "string") {
        console.log("Your ID is: " + id.toUpperCase());
    } else {
        console.log(id);
    }
        
}

printId(101);
printId("202");

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        console.log("Hello, " + x.join(" and "));
    } else {
        console.log("Welcome lone traveler " + x);
    }
}

welcomePeople("Mark")
welcomePeople(["Mark"])
welcomePeople(["Mark", "Betty"])
welcomePeople([])
