import IGameState from "@/game/state/IGameState";

export interface IRenderEngine {
  render(state: IGameState): boolean;
}
