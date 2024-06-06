interface Checkable {
    check(name: string): boolean
}

class NameChecker implements Checkable {
    check(s) {
        return s.toLowerCase() === "ok"
    }
}

const checker = new NameChecker()
checker.check("foo")
