import IGameObject from "./object/IGameObject";

interface IGameSnapshot {
  readonly objects : Array<IGameObject>;
}

export default IGameSnapshot;
