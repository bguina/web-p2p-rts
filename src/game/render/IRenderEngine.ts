import IGameState from "@/game/state/IGameState";

interface IRenderEngine {
    render(state: IGameState): boolean;
}

export default IRenderEngine;
