import EGameState from "@/game/state/EGameState";
import IGameObject from "../object/IGameObject";

export default interface IGameState {
  value: EGameState;
  objects: Array<IGameObject>;
}
