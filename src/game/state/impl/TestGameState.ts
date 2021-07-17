import IGameState from "@/game/state/IGameState";
import EGameState from "@/game/state/EGameState";
import IGameObject from "@/game/object/IGameObject";
import DummyGameUnit from "@/game/object/impl/DummyGameUnit";

export default class TestGameState implements IGameState {
  value: EGameState = EGameState.Paused;
  objects : Array<IGameObject> = [
    new DummyGameUnit()
  ];

  constructor() {
  }
}
