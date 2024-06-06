class Base {
    greet() {
        console.log("hello world")
    }
}

class Derived extends Base {
    greet(name?: string) {
        if (name === undefined) {
            super.greet()
        } else {
            console.log(`Hello ${name}`)
        }
    }
}

const d = new Derived()
d.greet()
d.greet("reader")
