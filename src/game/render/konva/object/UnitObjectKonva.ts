import Konva from "konva";
import IGameObject from "@/game/object/IGameObject";

export default class UnitObjectKonva extends Konva.Group {
  private pawn!: Konva.Circle;
  private label!: Konva.Text;
  readonly objectUid: number;

  constructor(
    object: IGameObject
  ) {
    super({
      x: object.position[0],
      y: object.position[1],
      offsetX: object.dimension[0] / 2,
      offsetY: object.dimension[1] / 2,
    });
    this.objectUid = object.uid;

    this.pawn = new Konva.Circle({
      fill: 'red',
      stroke: 'black',
      strokeWidth: 1,
      radius: object.dimension[0],
    });

    this.label = new Konva.Text({
      fill: 'white',
      text: object.title,
      offsetY: this.pawn.height()
    });

    this.label.offsetX(this.label.width() / 2);

    this.add(this.pawn);
    this.add(this.label);
  }

  update(
    object: IGameObject
  ) {
    this.label.text(object.title);
    this.x((object.position[0] + Date.now() / 5) % window.innerWidth);

    const stupidX = (object.position[0] + Date.now() / 5) % window.innerWidth;
    this.x(stupidX);

    this.y(object.position[1]);
    this.pawn.radius(object.dimension[0]);
  }

}
