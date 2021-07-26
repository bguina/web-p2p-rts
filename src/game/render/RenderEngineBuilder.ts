import ERenderEngine from "./ERenderEngine"
import IRenderEngine from "./IRenderEngine"
import ThreeJsRenderEngine from "./threejs/ThreeJsRenderEngine"
import VueKonvaRenderEngine from "./konva/KonvaRenderEngine"
import IInputController from "../input/IInputController"
import IWindow from "@/window/IWindow"

type RenderEngineBuilder = {
  [engineType in ERenderEngine]: (window: IWindow, inputController: IInputController, sel: string) => IRenderEngine
}

const renderEngineBuilder: RenderEngineBuilder = {
  [ERenderEngine.VueKonva]: (window, inputController, sel) => new VueKonvaRenderEngine(window, inputController, sel),
  [ERenderEngine.ThreeJs]: (window, inputController, sel) => new ThreeJsRenderEngine(window, inputController, sel),
}

export default renderEngineBuilder;
