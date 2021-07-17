import IRenderEngine from "@/game/render/IRenderEngine";
import IGameState from "@/game/state/IGameState";
import Konva from "konva";

export default class VueKonvaRenderEngine implements IRenderEngine {
  stage!: Konva.Stage
  layer!: Konva.Layer
  timestampText!: Konva.Text

  constructor(canvasSelector: string) {
    this.stage = new Konva.Stage({
       container: canvasSelector,
        width: window.innerWidth,
        height: window.innerHeight
    })
    this.layer = new Konva.Layer();
    this.stage.add(this.layer);
    this.timestampText = new Konva.Text({
      text: new Date().getTime().toString()
    })
    this.layer.add(this.timestampText)
  }

  update(state: IGameState): void {
      state.objects.forEach((object)=>{
          this.layer.add(new Konva.Circle({
            x: (object.position[0] + new Date().getTime()) % window.innerWidth,
            y: object.position[1],
            radius: object.dimension[0],
            fill: 'red',
            stroke: 'black',
            strokeWidth: 1,
          }));
      })
      this.timestampText.setText(new Date().getTime().toString());

      return
  }
}
