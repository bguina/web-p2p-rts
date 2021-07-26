export default interface IWindow {
  width(): Number
  height(): Number

  cancelAnimationFrame(handle: number): void;
  requestAnimationFrame(callback: FrameRequestCallback): number;
}
