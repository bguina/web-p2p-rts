import IGameSnapshot from "./IGameSnapshot";

export default interface IGameEngine {
  readonly lastSnapshot?: IGameSnapshot

  restoreGameSave(
    snapshot: IGameSnapshot
  ): void
}
