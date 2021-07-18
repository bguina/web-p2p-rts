import IGame from '@/game/IGame'
import IGameState from '@/game/state/IGameState';
import ERenderEngine from '@/game/render/ERenderEngine';
import IRenderEngine from '@/game/render/IRenderEngine';
import renderEngineBuilder from '../render/RenderEngineBuilder';
import TestGameState from '../state/impl/TestGameState';

export default class implements IGame {
  title: string;
  private renderEngine: IRenderEngine;
  private state: IGameState = new TestGameState();
  private lastRender = 0

  constructor(
    renderEngine: ERenderEngine,
    canvaSelector: string
  ) {
    this.title = `RTS engine ${renderEngine}`
    this.renderEngine = renderEngineBuilder[renderEngine](canvaSelector);
    window.requestAnimationFrame((time) => { this.loop(time) });
  }

  loop(timestamp: number): void {
    this.renderEngine.update(this.state);

    this.lastRender = timestamp
    window.requestAnimationFrame((time) => { this.loop(time) });
  }

}
