import IGameUnit from "../AGameUnit";
import Vector3f from "../../../math/Vector3f";

export default abstract class AGameUnit implements IGameUnit {
  abstract title: string;
  abstract position: Vector3f;
  abstract dimension: Vector3f;

}
