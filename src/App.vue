<template>
  <div id="app">
    <header class="engine-selector">
      <div class="engine-option" v-for="link in links" :key="link.engine">
        <router-link :to="{ name: link.name, params: { engine: link.engine } }">
          {{ link.name }}
        </router-link>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GameView from './components/GameView.vue';
import { ERenderEngine } from './game/render/ERenderEngine';

type Link = {
  name: string,
  engine: ERenderEngine
}

@Component({
  components: {
    GameView,
  },
})
export default class App extends Vue {
  private links: Link[] = [
    { name: 'konva', engine: ERenderEngine.VueKonva },
    { name: 'threejs', engine: ERenderEngine.ThreeJs }
  ]
}
</script>
