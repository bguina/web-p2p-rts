import ERenderEngine from "./ERenderEngine"
import IRenderEngine from "./IRenderEngine"
import ThreeJsRenderEngine from "./threejs/ThreeJsRenderEngine"
import VueKonvaRenderEngine from "./konva/KonvaRenderEngine"

type RenderEngineBuilder = {
  [engineType in ERenderEngine]: (sel: string) => IRenderEngine
}

const renderEngineBuilder: RenderEngineBuilder = {
  [ERenderEngine.VueKonva]: sel => new VueKonvaRenderEngine(sel),
  [ERenderEngine.ThreeJs]: sel => new ThreeJsRenderEngine(sel),
}

export default renderEngineBuilder;
