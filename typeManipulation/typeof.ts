let s = "foo"
let s2: typeof s;

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;

function f() {
    return { x: 10, y: 3 }
}
type P = ReturnType<typeof f>
