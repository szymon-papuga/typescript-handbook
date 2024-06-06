class Base4 {
    protected x = 1;
}

class Derived4 extends Base4 {
    protected x = 5;
}

class Derived5 extends Base4 {
    f1(other: Derived5) {
        other.x = 10;
    }

    f2(other: Derived4) {
        other["x"] = 10
        other.x = 10;
    }
}
