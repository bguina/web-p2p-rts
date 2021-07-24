import ERenderEngine from "./ERenderEngine"
import IRenderEngine from "./IRenderEngine"
import ThreeJsRenderEngine from "./threejs/ThreeJsRenderEngine"
import VueKonvaRenderEngine from "./konva/KonvaRenderEngine"
import IInputController from "../input/IInputController"

type RenderEngineBuilder = {
  [engineType in ERenderEngine]: (inputController: IInputController, sel: string) => IRenderEngine
}

const renderEngineBuilder: RenderEngineBuilder = {
  [ERenderEngine.VueKonva]: (inputController, sel) => new VueKonvaRenderEngine(inputController, sel),
  [ERenderEngine.ThreeJs]: (inputController, sel) => new ThreeJsRenderEngine(inputController, sel),
}

export default renderEngineBuilder;
