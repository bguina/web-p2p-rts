import EGameState from "./impl/EGameState";

export default interface IGame {
  readonly title: string;
  readonly state: EGameState;
}
