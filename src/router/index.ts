import { RouteConfig } from 'vue-router';
import VueRouter from 'vue-router';
import { ERenderEngine } from '@/game/render/ERenderEngine';
import GameView from '@/components/GameView.vue';

const makeRoute = (name: string, engine: ERenderEngine): RouteConfig => ({
  name,
  path: `/${name}`,
  component: GameView,
  props: { engine }
});

export default new VueRouter({
  routes: [
    makeRoute('konva', ERenderEngine.VueKonva),
    makeRoute('threejs', ERenderEngine.ThreeJs)
  ]
});
