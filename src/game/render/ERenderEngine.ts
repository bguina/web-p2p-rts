import { IRenderEngine } from "./IRenderEngine";
import ThreeJsRenderEngine from "./threejs/ThreeJsRenderEngine";
import VueKonvaRenderEngine from "./vuekonva/VueKonvaRenderEngine";

type CanvasSelector = string

type EngineFactory = (sel: CanvasSelector) => IRenderEngine
type EngineDestructor = (engine: IRenderEngine) => void

export enum ERenderEngine {
  VueKonva,
  ThreeJs
}

type EngineFactories = {
  [engineType in ERenderEngine]: EngineFactory
}

export const engineBuilder: EngineFactories = {
  [ERenderEngine.VueKonva]: sel => new VueKonvaRenderEngine(sel),
  [ERenderEngine.ThreeJs]: sel => new ThreeJsRenderEngine(sel),
}
