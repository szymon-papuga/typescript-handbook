import { posix } from "path/posix";

class Sprite {
    name = "";
    x = 0;
    y = 0;

    constructor(name: string) {
        this.name = name;
    }
}

type GConstructor<T = {}> = new (...args: any[]) => T;

function Scale<TBase extends GConstructor>(Base: TBase) {
    return class Scaling extends Base {

        _scale = 1;

        setScale(scale: number) {
            this._scale = scale;
        }

        get scale(): number {
            return this._scale;
        }
    }
}

const EightBitSprite = Scale(Sprite);

const flappySprite = new EightBitSprite("Bird");
flappySprite.setScale(0.8);
console.log(flappySprite.scale);

type Positionable = GConstructor<{ setPos: (x: number, y: number) => void }>;
type Spritable = GConstructor<Sprite>;
type Loggable = GConstructor<{ print: () => void }>;

function Jumpable<TBase extends Positionable>(Base: TBase) {
    return class Jumpable extends Base {

        jump() {
            this.setPos(0, 20);
        }
    }
}

