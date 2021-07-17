import IGameState from "@/game/state/IGameState";
import { IRenderEngine } from "@/game/render/IRenderEngine";
import { Component, Vue } from 'vue-property-decorator';
import GameCanvas from './components/GameCanvas.vue';

class VueKonvaRenderEngine implements IRenderEngine {
  selector: string;
  canvas: Vue;

  constructor(canvasSelector: string) {
    this.selector = canvasSelector

    this.canvas = new Vue({
      render: h => h(GameCanvas),
    }).$mount(canvasSelector)
  }

  update(state: IGameState): void {
    this.canvas.$emit('update-state', state)
  }
}

export default VueKonvaRenderEngine;
