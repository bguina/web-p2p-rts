import IRenderEngine from "@/game/render/IRenderEngine";
import IInputController from "@/game/input/IInputController";
import IGameSnapshot from "@/game/IGameSnapshot";
import { inject, injectable } from "inversify";
import DI_TYPES from "@/inversify.types";

@injectable()
export default class ThreeJsRenderEngine implements IRenderEngine {
  selector: string;

  constructor(
    @inject(DI_TYPES.InputController) private inputController: IInputController,
    @inject(DI_TYPES.CanvasSelector) canvasSelector: string
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
    uiTree?: string,
    snapshot?: IGameSnapshot
  ): void {
    throw new Error("Method not implemented.");
  }
}
