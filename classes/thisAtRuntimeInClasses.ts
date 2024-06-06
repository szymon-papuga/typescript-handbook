class MyClass {
    name = "MyClass"
    getName() {
        return this.name;
    }
}

const x = new MyClass()
const obj = {
    name: "obj",
    getName: x.getName
}

console.log(obj.getName())

class MyClassFixed {
    name = "MyClassFixed"
    getName = () => {
        return this.name
    }
}

const c = new MyClassFixed();
const g = c.getName

console.log(g());
