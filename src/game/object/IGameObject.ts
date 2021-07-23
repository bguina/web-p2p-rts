import Vector3f from "../../math/Vector3f";

export default interface IGameObject {
  readonly uid: number;
  title: string;
  position: Vector3f;
  dimension: Vector3f;

}
