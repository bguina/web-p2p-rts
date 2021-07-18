import IGameObject from "./IGameObject";
import Vector3f from "./Vector3f";

export default abstract class AGameUnit implements IGameObject {
  abstract title: string;
  abstract position: Vector3f;
  abstract dimension: Array<number>;
}
