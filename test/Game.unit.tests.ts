import "reflect-metadata"
import { suite, test } from '@testdeck/mocha';
import * as chai from 'chai';
import { mock, instance } from 'ts-mockito';

import IGameEngine from '../src/game/IGameEngine';
import IInputController from '../src/game/input/IInputController';
import INetworkEngine from '../src/game/net/INetworkEngine';
import IRenderEngine from '../src/game/render/IRenderEngine';
import IWindow from '../src/window/IWindow';

import IGame from '../src/game/IGame';
import Game from '../src/game/impl/Game';
import EGameState from "../src/game/impl/EGameState";
chai.should()

@suite class GameUnitTests {

  private game: IGame;

  private inputController = mock(IInputController);
  private networkEngine = mock(INetworkEngine);
  private gameEngine = mock(IGameEngine);
  private renderEngine = mock(IRenderEngine);
  private window = mock(IWindow);

  before() {
    this.game = new Game(
      instance(this.inputController),
      instance(this.networkEngine),
      instance(this.gameEngine),
      instance(this.renderEngine),
      instance(this.window)
    );
  }

  @test 'should be ingame right away'() {
    this.game.state.should.equal(EGameState.InGame);
  }

}
