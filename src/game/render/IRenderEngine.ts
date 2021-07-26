import IGameSnapshot from "../IGameSnapshot";

export default interface IRenderEngine {
  readonly name: string
  resume(): boolean;
  pause(): boolean;

  updateSnapshot(
    uiTree?: string,
    snapshot?: IGameSnapshot
  ): void;
}
