import IGameState from "@/game/state/IGameState";
import { IRenderEngine } from "@/game/render/IRenderEngine";
import { Component, Vue } from 'vue-property-decorator';
import GameCanvas from './components/GameCanvas.vue';

@Component({
  components: {
    GameCanvas,
  },
})
class GameRootVue extends Vue { }

class VueKonvaRenderEngine implements IRenderEngine {
  selector: string;
  vueRoot: Vue;

  constructor(canvasSelector: string) {
    this.selector = canvasSelector

    this.vueRoot = new Vue({
      render: h => h(GameRootVue),
    }).$mount(canvasSelector)
  }

  render(state: IGameState): boolean {
    // fixme: update state to render by our GameRootVue
    throw new Error("Method not implemented.");
  }
}

export default VueKonvaRenderEngine;
