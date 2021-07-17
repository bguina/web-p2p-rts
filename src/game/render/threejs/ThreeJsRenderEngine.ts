import IGameState from "@/game/state/IGameState";
import { IRenderEngine } from "@/game/render/IRenderEngine";

export default class implements IRenderEngine {
  selector: string;

  constructor(canvasSelector: string) {
    this.selector = canvasSelector
  }

  update(state: IGameState): void {
    throw new Error("Method not implemented.");
  }
}
