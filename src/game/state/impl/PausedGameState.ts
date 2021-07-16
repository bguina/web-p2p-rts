import { EGameState } from "@/game/state/EGameState";
import IGameState from "@/game/state/IGameState";

class PausedGameState implements IGameState {
  value: EGameState = EGameState.Paused;
  pausedAt: Date

  constructor(pausedAt: Date) {
    this.pausedAt = pausedAt
  }
}

export default PausedGameState;
