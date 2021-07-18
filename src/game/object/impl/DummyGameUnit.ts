import Vector3f from "../Vector3f";
import AGameUnit from "./AGameUnit";

export default class DummyGameUnit implements AGameUnit {
  title = "Dummy";
  position : Vector3f = [50, 80, 10];
  dimension : Array<number> = [15, 3, 3];

}
