import IGameUnit from "../AGameUnit";

export default abstract class AGameUnit implements IGameUnit {
  abstract title: string;
  abstract position: Array<number>;
  abstract dimension: Array<number>;

}
