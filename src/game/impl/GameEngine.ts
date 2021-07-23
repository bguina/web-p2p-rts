import { injectable } from "inversify";
import IGameEngine from "../IGameEngine";
import IGameSnapshot from "../IGameSnapshot";

@injectable()
export default class GameEngine implements IGameEngine {
  private snapshots: Array<IGameSnapshot> = []

  getLastSnapshot() : IGameSnapshot {
    return this.snapshots[this.snapshots.length - 1];
  }

  restoreGameSave(
    gameSave: IGameSnapshot
  ) {
    this.snapshots = [gameSave];
  }
}
