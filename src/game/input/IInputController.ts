
export default interface IInputController {
  lastEvent?: string;

  pressKey(
    keyCode: number
  ): boolean

  releaseKey(
    keyCode: number
  ): boolean

  mouseMove(
    x: number,
    y: number
  ) : boolean

  mouseClickDown(
    button: number,
    x: number,
    y: number
  ): boolean

  mouseClickUp(
    button: number,
    x: number,
    y: number
  ): boolean
}
