import IGame from '@/game/IGame'
import IGameState from '@/game/state/IGameState';
import ERenderEngine from '@/game/render/ERenderEngine';
import IRenderEngine from '@/game/render/IRenderEngine';
import PausedGameState from '@/game/state/impl/PausedGameState';
import VueKanvaRenderEngine from '@/game/render/vuekanva/VueKanvaRenderEngine';
import ThreeJsRenderEngine from '@/game/render/threejs/ThreeJsRenderEngine';

class Game implements IGame {
    state: IGameState = new PausedGameState();
    title: string;
    renderEngine: IRenderEngine;

    constructor(
        renderEngine: ERenderEngine,
        canvaSelector: string
    ) {
        this.title = "RTS alpha"
        // fixme: implement from main.ts with dependency injection component
        switch (renderEngine) {
            case ERenderEngine.VueKanva:
                this.renderEngine = new VueKanvaRenderEngine(canvaSelector);
                break;
            default:
                this.renderEngine = new ThreeJsRenderEngine(canvaSelector);
                break;
        }
    }
}

export default Game