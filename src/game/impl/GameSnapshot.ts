import IGameSnapshot from "../IGameSnapshot";
import IGameObject from "../object/IGameObject";
import DummyGameUnit from "../object/impl/DummyGameUnit";

export default class GameSnapshot implements IGameSnapshot {
  readonly objects : Array<IGameObject> = [
    new DummyGameUnit()
  ];
}
