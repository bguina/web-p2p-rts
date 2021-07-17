import IGameState from "@/game/state/IGameState";

export interface IRenderEngine {
  update(state: IGameState): void;
}
