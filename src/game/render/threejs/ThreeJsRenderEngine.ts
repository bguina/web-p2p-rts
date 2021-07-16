import IGameState from "@/game/state/IGameState";
import IRenderEngine from "@/game/render/IRenderEngine";

class ThreeJsRenderEngine implements IRenderEngine {
    selector: string;

    constructor(canvasSelector: string) {
        this.selector = canvasSelector
    }

    render(state: IGameState): boolean {
        throw new Error("Method not implemented.");
    }
}

export default ThreeJsRenderEngine;
