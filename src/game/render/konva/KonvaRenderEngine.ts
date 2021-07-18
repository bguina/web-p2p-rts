import IRenderEngine from "@/game/render/IRenderEngine";
import IGameState from "@/game/state/IGameState";
import Konva from "konva";

export default class VueKonvaRenderEngine implements IRenderEngine {
  stage!: Konva.Stage
  mapLayer: Konva.Layer = new Konva.Layer({
    id: "Map"
  })
  timestampText: Konva.Text = new Konva.Text()

  constructor(canvasSelector: string) {
    this.stage = new Konva.Stage({
      container: canvasSelector,
      width: window.innerWidth,
      height: window.innerWidth * .5
    });
    this.stage.add(this.mapLayer);

    const background = new Konva.Rect({
      x: 0,
      y: 0,
      width: this.stage.width(),
      height: this.stage.height(),
      fill: 'black',
      // remove background from hit graph for better perf because we don't need any events on the background
      listening: false,
    });

    this.mapLayer.add(background);
    this.mapLayer.add(this.timestampText);
  }

  update(state: IGameState): void {
    state.objects.forEach((object) => {
      this.mapLayer.add(new Konva.Circle({
        x: object.position[0],
        y: object.position[1],
        radius: object.dimension[0],
        fill: 'red',
        stroke: 'black',
        strokeWidth: 1,
      }));
    });
    this.timestampText.setText(Date.now().toString());
  }
}
