class Jumpable {
  jump() {}
}
 
class Duckable {
  duck() {}
}
 
// Including the base
class Sprite {
  x = 0;
  y = 0;
}

interface Sprite extends Jumpable, Duckable {}

applyMixins(Sprite, [Jumpable, Duckable]);

let player = new Sprite();
player.jump();
console.log(player.x, player.y)

function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                    Object.create(null)
            )
        })
    })
}

