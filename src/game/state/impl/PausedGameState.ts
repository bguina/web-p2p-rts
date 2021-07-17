import IGameState from "@/game/state/IGameState";
import { EGameState } from "@/game/state/EGameState";

export default class PausedGameState implements IGameState {
  value: EGameState = EGameState.Paused;
  pausedAt: Date;
  units : Array<any> = [
    { name: "one", pos: [0.5, 0.5] }
  ]

  constructor(pausedAt: Date) {
    this.pausedAt = pausedAt
  }
}
