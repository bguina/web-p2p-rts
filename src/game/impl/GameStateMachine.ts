import { TypeState } from "typestate";
import IGameEngine from "../IGameEngine";
import EGameState from "./EGameState";

export default class GameStateMachine extends TypeState.FiniteStateMachine<EGameState> {
  constructor(
    readonly gameEngine: IGameEngine
  ) {
    super(EGameState.Menu);
    this.from(EGameState.Menu).to(EGameState.Lobby);
    this.from(EGameState.Lobby).to(EGameState.InGame);
    this.from(EGameState.InGame).to(EGameState.Menu);
  }
}
