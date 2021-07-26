import "reflect-metadata"
import { suite, test } from '@testdeck/mocha';
import * as chai from 'chai';
import { mock, instance } from 'ts-mockito';

import IGameEngine from '../src/game/IGameEngine';
import GameEngine from '../src/game/impl/GameEngine';

chai.should()

@suite class GameUnitTests {

  private gameEngine: IGameEngine;

  before() {
    this.gameEngine = new GameEngine();
  }

  @test 'should start without game state'() {
    chai.should().not.exist(this.gameEngine.lastSnapshot);
  }

}
