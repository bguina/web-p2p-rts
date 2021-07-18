import Vector3f from "../../../math/Vector3f";
import AGameUnit from "./AGameUnit";

export default class DummyGameUnit implements AGameUnit {
  title = "Dummy";
  position : Vector3f = [50, 80, 10];
  dimension : Vector3f = [15, 3, 3];

}
