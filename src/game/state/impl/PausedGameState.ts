import IGameState from "@/game/state/IGameState";
import EGameState from "@/game/state/EGameState";
import IGameObject from "@/game/object/IGameObject";

export default class InGameState implements IGameState {
  value: EGameState = EGameState.InGame;
  pausedAt: Date;
  objects : Array<IGameObject> = [];

  constructor(pausedAt: Date) {
    this.pausedAt = pausedAt;
  }
}
