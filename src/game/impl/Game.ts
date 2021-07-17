import IGame from '@/game/IGame'
import IGameState from '@/game/state/IGameState';
import { ERenderEngine, engineBuilder } from '@/game/render/ERenderEngine';
import { IRenderEngine } from '@/game/render/IRenderEngine';
import PausedGameState from '@/game/state/impl/PausedGameState';

export default class implements IGame {
  title: string;
  private renderEngine: IRenderEngine;
  private state: IGameState = new PausedGameState(new Date());

  constructor(
    renderEngine: ERenderEngine,
    canvaSelector: string
  ) {
    this.title = `RTS engine ${renderEngine}`
    this.renderEngine = engineBuilder[renderEngine](canvaSelector);
  }
}
