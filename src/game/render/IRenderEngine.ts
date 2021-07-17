import IGameState from "@/game/state/IGameState";

export default interface IRenderEngine {
  update(state: IGameState): void;
}
