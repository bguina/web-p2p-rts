import { EGameState } from "@/game/state/EGameState";

export default interface IGameState {
  value: EGameState;
  units: Array<any>
}
