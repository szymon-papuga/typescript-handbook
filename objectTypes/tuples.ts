type StringNumberPair = [string, number]

function doSomething(pair: StringNumberPair) {
    console.log(typeof pair[0])
    console.log(typeof pair[1])
}

doSomething(["foo", 2])

function doSomething2(pair: StringNumberPair) {
    const [str, num] = pair
}

function doSomething3([str, num]: StringNumberPair) {
    console.log(str)
    console.log(num)
}

doSomething3(["bar", 1])

type Either2dOr3d = [number, number, number?]

function setCoordinate(coord: Either2dOr3d) {
    const [x, y, z] = coord;
    console.log(coord.length)
}

type StringNumberBooleans = [string, number, ...boolean[]]
type StringBooleansNumber = [string, ...boolean[], number]
type BooleansStringNumber = [...boolean[], string, number]

const tuple: BooleansStringNumber = [true, false, "foo", 1]
const tuple2: StringBooleansNumber = ["foo", true, false, 1]
