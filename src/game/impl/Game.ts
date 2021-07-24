import { inject, injectable } from "inversify";
import DI_TYPES from '@/inversify.types';
import IGame from '@/game/IGame'
import GameStateMachine from './GameStateMachine';
import EGameState from './EGameState';
import IGameEngine from '@/game/IGameEngine';
import INetworkEngine from '@/game/net/INetworkEngine';
import IRenderEngine from '@/game/render/IRenderEngine';
import GameSnapshot from "./GameSnapshot";
import IInputController from "../input/IInputController";

@injectable()
export default class Game implements IGame {
  readonly title: string = 'Some RTS';
  private tickRequestHndl = 0;
  private sm: GameStateMachine;

  constructor(
    @inject(DI_TYPES.InputController) private readonly inputController: IInputController,
    @inject(DI_TYPES.NetworkEngine) private readonly networkEngine: INetworkEngine,
    @inject(DI_TYPES.GameEngine) private readonly gameEngine: IGameEngine,
    @inject(DI_TYPES.RenderEngine) private readonly renderEngine: IRenderEngine
  ) {
    this.sm = new GameStateMachine(gameEngine);
    this.sm.onEnter(EGameState.InGame, (_?: EGameState) => { return this.onGameStart(); });
    this.sm.onExit(EGameState.InGame, (_?: EGameState) => { return this.onGameStop(); });

    this.sm.go(EGameState.Lobby);

    // load dummy snapshot
    gameEngine.restoreGameSave(new GameSnapshot());
    
    this.sm.go(EGameState.InGame);
  }

  private onGameStart(): boolean {
    this.tickLoop();
    return this.renderEngine.resume();
  }

  private onGameStop(): boolean {
    window.cancelAnimationFrame(this.tickRequestHndl);
    return this.renderEngine.pause();
  }

  private tickLoop() : void {
    this.tick();
    this.tickRequestHndl = window.requestAnimationFrame((time) => { this.tickLoop() });
  }

  private tick(): void {
    this.renderEngine.updateSnapshot(this.inputController.lastEvent, this.gameEngine.getLastSnapshot());
  }

}
