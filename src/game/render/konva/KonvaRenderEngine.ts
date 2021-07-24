import IGameSnapshot from "@/game/IGameSnapshot";
import IInputController from "@/game/input/IInputController";
import IRenderEngine from "@/game/render/IRenderEngine";
import DI_TYPES from "@/inversify.types";
import { inject, injectable } from "inversify";
import Konva from "konva";
import UnitObjectKonva from "./object/UnitObjectKonva";
import KonvaNamedEvent from "./KonvaNamedEvent";

@injectable()
export default class VueKonvaRenderEngine implements IRenderEngine {
  private frameRequestHndl = 0;
  private stage!: Konva.Stage;
  private mapLayer: Konva.Layer = new Konva.Layer({ id: "Map" });
  private uiLayer: Konva.Layer = new Konva.Layer({ id: "Ui" });
  private debugText: Konva.Text = new Konva.Text({ fill: 'white' });
  private timestampText: Konva.Text = new Konva.Text({ fill: 'white' });
  private snapshot?: IGameSnapshot
  private mappedObjects: Map<number, UnitObjectKonva> = new Map<number, UnitObjectKonva>();

  constructor(
    @inject(DI_TYPES.InputController) private inputController: IInputController,
    @inject(DI_TYPES.CanvasSelector) canvasSelector: string
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
    uiTree?: string,
    snapshot?: IGameSnapshot
  ): void {
    if (undefined != uiTree) {
      this.debugText.setText(uiTree);
    }
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

    this.stage.on('contextmenu', (e) => { e.evt.preventDefault(); });
    Object.values(KonvaNamedEvent).forEach(eventName => {
      this.stage.addEventListener(eventName as string, e => {
        if (this.onKonvaEvent(eventName, e))
          e.preventDefault();
      });
    });
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
    this.uiLayer.add(this.debugText);
  }

  private onKonvaEvent(eventName: KonvaNamedEvent, e: Event): boolean {
    switch (eventName) {
      case KonvaNamedEvent.MOUSE_OVER:
        this.assertIsEventType<MouseEvent>(e);
        return this.inputController.mouseMove(e.screenX, e.screenY);
      case KonvaNamedEvent.MOUSE_OUT:
        this.assertIsEventType<MouseEvent>(e);
        return this.inputController.mouseMove(-1, -1);
      case KonvaNamedEvent.MOUSE_MOVE:
        this.assertIsEventType<MouseEvent>(e);
        return this.inputController.mouseMove(e.screenX, e.screenY);
      case KonvaNamedEvent.MOUSE_DOWN:
        this.assertIsEventType<MouseEvent>(e);
        return this.inputController.mouseClickDown(e.button, e.screenX, e.screenY);
      case KonvaNamedEvent.MOUSE_UP:
        this.assertIsEventType<MouseEvent>(e);
        return this.inputController.mouseClickUp(e.button, e.screenX, e.screenY);
      case KonvaNamedEvent.KEY_DOWN:
        this.assertIsEventType<KeyboardEvent>(e);
        return this.inputController.pressKey(e.keyCode)
      case KonvaNamedEvent.KEY_UP:
        this.assertIsEventType<KeyboardEvent>(e);
        return this.inputController.releaseKey(e.keyCode)
    }
  }

  private assertIsEventType<T>(e: any): asserts e is T {
    if (null == e as T)
      throw `expected a Konva.KeyboardEvent, got ${typeof e}`;
  }

  private tickDrawLoop() {
    this.frameRequestHndl = window.requestAnimationFrame((time: number) => {
      this.drawFrame();
      this.tickDrawLoop();
    });
  }

  private drawFrame() {
    this.snapshot?.objects?.forEach(object => {
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
    this.debugText.y(this.timestampText.height());

  }

}
