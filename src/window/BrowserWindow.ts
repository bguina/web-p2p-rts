import { inject, injectable } from "inversify";
import IWindow from "./IWindow";

const windowCopy = window;

@injectable()
export default class BrowserWindow implements IWindow {

  width(): number {
    return window.innerWidth;
  }
  height(): number {
    return window.innerHeight;
  }

  cancelAnimationFrame(handle: number): void {
    window.cancelAnimationFrame(handle);
  }

  requestAnimationFrame(callback: FrameRequestCallback): number {
    return window.requestAnimationFrame(callback);
  }
}
