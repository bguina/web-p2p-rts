import IGameObject from "./IGameObject";

export default abstract class AGameUnit implements IGameObject {
  abstract title: string;
  abstract position: Array<number>;
  abstract dimension: Array<number>;
}
