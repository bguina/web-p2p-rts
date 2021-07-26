import { injectable } from "inversify";
import IInputController from "../IInputController";

@injectable()
export default class InputController implements IInputController {

  lastEvent?: string = undefined;

  pressKey(
    keyCode: number
  ): boolean {
    this.lastEvent = `pressKey ${keyCode}`
    return true;
  }

  releaseKey(
    keyCode: number
  ): boolean {
    this.lastEvent = `releaseKey ${keyCode}`
    return true;
  }

  mouseMove(
    x: number,
    y: number
  ): boolean {
    this.lastEvent = `mouseMove ${x} ${y}`
    return true;
  }

  mouseClickDown(
    button: number,
    x: number,
    y: number
  ): boolean {
    this.lastEvent = `pressClick ${button} ${x} ${y}`
    return true;
  }

  mouseClickUp(
    button: number,
    x: number,
    y: number
  ): boolean {
    this.lastEvent = `releaseClick ${button} ${x} ${y}`
    return true;
  }
}
