//interface SquareConfig {
//  color?: string;
//  width?: number;
//}
 
function createSquare(config: { color?: string; width?: number; }): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}
const obj = { color: "red", width: 100, thirdProp: 100 } 
let mySquare = createSquare(obj);
