import "reflect-metadata";
import { Container } from "inversify";
import { interfaces } from "inversify/lib/interfaces/interfaces";
import DI_TYPES from "./inversify.types";
import INetworkEngine from "./game/net/INetworkEngine";
import IGameEngine from "./game/IGameEngine";
import IInputController from "./game/input/IInputController";
import IGame from "./game/IGame";
import IRenderEngine from "./game/render/IRenderEngine";

export default class DiContainer extends Container {
  constructor(
    renderEngineType: interfaces.Newable<IRenderEngine>,
    networkEngineType: interfaces.Newable<INetworkEngine>,
    gameEngineType: interfaces.Newable<IGameEngine>,
    inputControllerType: interfaces.Newable<IInputController>,
    gameType: interfaces.Newable<IGame>,
    convasSelector: string
  ) {
    super();
    this.bind<IRenderEngine>(DI_TYPES.RenderEngine).to(renderEngineType).inSingletonScope();
    this.bind<INetworkEngine>(DI_TYPES.NetworkEngine).to(networkEngineType).inSingletonScope();
    this.bind<IGameEngine>(DI_TYPES.GameEngine).to(gameEngineType).inSingletonScope();
    this.bind<IInputController>(DI_TYPES.InputController).to(inputControllerType).inSingletonScope();
    this.bind<IGame>(DI_TYPES.Game).to(gameType).inSingletonScope();
    this.bind<string>(DI_TYPES.CanvasSelector).toConstantValue(convasSelector);
  }
}
