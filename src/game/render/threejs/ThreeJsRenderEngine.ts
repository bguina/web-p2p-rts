import IGameSnapshot from "@/game/IGameSnapshot";
import IRenderEngine from "@/game/render/IRenderEngine";

export default class ThreeJsRenderEngine implements IRenderEngine {
  selector: string;

  constructor(
    canvasSelector: string
  ) {
    this.selector = canvasSelector;
  }

  resume(): boolean {
    throw new Error("Method not implemented.");
  }
  
  pause(): boolean {
    throw new Error("Method not implemented.");
  }

  updateSnapshot(
    snapshot: IGameSnapshot
  ): void {
    throw new Error("Method not implemented.");
  }
}
