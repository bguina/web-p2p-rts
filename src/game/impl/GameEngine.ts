import { injectable } from "inversify";
import IGameEngine from "../IGameEngine";
import IGameSnapshot from "../IGameSnapshot";

@injectable()
export default class GameEngine implements IGameEngine {
  private snapshots: Array<IGameSnapshot> = []

  get lastSnapshot() {
    if (0 == this.snapshots.length) return undefined;
    return this.snapshots[this.snapshots.length - 1];
  }

  restoreGameSave(
    gameSave: IGameSnapshot
  ) {
    this.snapshots = [gameSave];
  }
}
