import "reflect-metadata";
import { Container } from "inversify";
import { interfaces } from "inversify/lib/interfaces/interfaces";
import DI_TYPES from "./inversify.types";
import INetworkEngine from "./game/net/INetworkEngine";
import WebRtcNetworkEngine from "./game/net/impl/WebRtcNetworkEngine";
import IGameEngine from "./game/IGameEngine";
import GameEngine from "./game/impl/GameEngine";
import IGame from "./game/IGame";
import Game from "./game/impl/Game";

class DiContainer extends Container {

  constructor(
    networkEngineType: interfaces.Newable<INetworkEngine>,
    gameEngineType: interfaces.Newable<IGameEngine>,
    gameType: interfaces.Newable<IGame>,
  ) {
    super();
    this.bind<INetworkEngine>(DI_TYPES.NetworkEngine).to(networkEngineType).inSingletonScope();
    this.bind<IGameEngine>(DI_TYPES.GameEngine).to(gameEngineType).inSingletonScope();
    this.bind<IGame>(DI_TYPES.Game).to(gameType).inSingletonScope();
  }
}

const diContainer = new DiContainer(
  WebRtcNetworkEngine,
  GameEngine,
  Game
);

export default diContainer;
