import IGameSnapshot from "@/game/IGameSnapshot";
import IGameObject from "@/game/object/IGameObject";
import IRenderEngine from "@/game/render/IRenderEngine";
import Konva from "konva";
import UnitObjectKonva from "./object/UnitObjectKonva";

export default class VueKonvaRenderEngine implements IRenderEngine {
  private frameRequestHndl = 0;
  private stage!: Konva.Stage;
  private mapLayer: Konva.Layer = new Konva.Layer({
    id: "Map"
  });
  private uiLayer: Konva.Layer = new Konva.Layer({
    id: "Ui"
  });
  private timestampText: Konva.Text = new Konva.Text();
  private snapshot?: IGameSnapshot
  private mappedObjects: Map<number, UnitObjectKonva> = new Map<number, UnitObjectKonva>();

  constructor(
    canvasSelector: string
  ) {
    this.setupStage(canvasSelector);
    this.setupBackground();
    this.setupUi();
  }

  resume(): boolean {
    this.tickDrawLoop();
    return true;
  }

  pause(): boolean {
    window.cancelAnimationFrame(this.frameRequestHndl);
    return true;
  }

  updateSnapshot(
    snapshot: IGameSnapshot
  ): void {
    this.snapshot = snapshot;
  }

  private setupStage(canvasSelector: string) {
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight * .95;
    const viewportAspectRatio = viewportWidth / viewportHeight;
    this.stage = new Konva.Stage({
      width: viewportWidth,
      height: viewportHeight,
      container: canvasSelector,
    });
    this.stage.add(this.mapLayer);
    this.stage.add(this.uiLayer);
  }

  private setupBackground() {
    const background = new Konva.Rect({
      width: this.stage.width(),
      height: this.stage.height(),
      fill: 'black',
      // remove background from hit graph for better perf because we don't need any events on the background
      listening: false,
    });

    this.mapLayer.add(background);
  }

  private setupUi() {
    this.uiLayer.add(this.timestampText);
  }

  private tickDrawLoop() {
    this.frameRequestHndl = window.requestAnimationFrame((time: number) => {
      this.drawFrame();
      this.tickDrawLoop();
    });
  }

  private drawFrame() {
    this.snapshot?.objects?.forEach(object=>{
      const asMappedObject = this.mappedObjects.get(object.uid);
      if (asMappedObject != undefined) {
        asMappedObject.update(object);
      } else {
        const konvaObject = new UnitObjectKonva(object);
        this.mappedObjects.set(object.uid, new UnitObjectKonva(object));
        this.mapLayer.add(konvaObject)
      }
    });

    this.mapLayer.children?.forEach(child => {
      if (child instanceof UnitObjectKonva) {
        this.snapshot?.objects.forEach(obj => {
          if (child.objectUid == obj.uid) {
            child.update(this.snapshot!.objects[0]);
          }
        })
      }
    })
    this.timestampText.setText(Date.now().toString());
  }

}
