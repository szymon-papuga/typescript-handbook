type Fish = { swim: () => void }
type Bird = { fly: () => void }

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        return animal.swim()
    }

    return animal.fly()
}

move({ swim: () => {}})
move({ fly: () => {}})

let x = Math.random() < 0.5 ? 10 : "hello world!";
x = "goodbye!"
console.log(x.toLowerCase())
