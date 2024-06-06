class Base2 {
    name = "base"
    constructor() {
        console.log(this.name)
    }
}

class Derived2 extends Base2 {
    name = "derived"
}

new Derived2()
