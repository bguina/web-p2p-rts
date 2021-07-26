import IGameSnapshot from "../IGameSnapshot";

export default interface IRenderEngine {
  resume() : boolean;
  pause() : boolean;

  updateSnapshot(
    uiTree?: string,
    snapshot?: IGameSnapshot
  ): void;
}
