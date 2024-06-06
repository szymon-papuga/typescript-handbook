function doStuff(values: readonly string[]) {
    const copy = values.slice();
}

let x: readonly string[] = [];
let y: string[] = [];

x = y;
//y = x; can't assign in this direction

const arr: readonly { field: number }[] = [{ field: 2 }]
arr[0].field = 3
console.log(arr)
