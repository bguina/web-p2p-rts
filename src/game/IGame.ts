import IGameState from "@/game/state/IGameState";

 export interface IGame {
    title: string;
    state: IGameState;

}

export default IGame;
