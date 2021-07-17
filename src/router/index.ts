import { RouteConfig } from 'vue-router';
import VueRouter from 'vue-router';
import GameView from '@/components/GameView.vue';

const makeRoute = (name: string): RouteConfig => ({
  name,
  path: `/${name}`,
  component: GameView,
  props: route => ({ engine: route.params.engine })
})

export default new VueRouter({
  routes: [
    makeRoute('konva'),
    makeRoute('threejs')
  ]
})
