class A {
    private x = 10;

    public sameAs(other: A) {
        return other.x === this.x
    }
}
