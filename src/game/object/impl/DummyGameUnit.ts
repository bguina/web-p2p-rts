import AGameUnit from "./AGameUnit";

export default class DummyGameUnit implements AGameUnit {
  title = "Dummy";
  position: Array<number> = [50, 80, 10];
  dimension: Array<number> = [15, 3, 3];

}
