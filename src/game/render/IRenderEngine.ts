import IGameSnapshot from "../IGameSnapshot";

export default interface IRenderEngine {
  resume() : boolean;
  pause() : boolean;

  updateSnapshot(
    snapshot: IGameSnapshot
  ): void;
}
