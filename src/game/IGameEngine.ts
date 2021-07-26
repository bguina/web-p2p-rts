import IGameSnapshot from "./IGameSnapshot";

export default interface IGameEngine {
  getLastSnapshot() : IGameSnapshot

  restoreGameSave(
    snapshot: IGameSnapshot
  ): void
}
