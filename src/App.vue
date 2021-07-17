<template>
  <div id="app">
    <header class="engine-selector">
      <div class="engine-option">
        <router-link :to="{ name: 'konva' }">Vue Konva</router-link>
      </div>
      <div class="engine-option">
        <router-link :to="{ name: 'threejs' }">Three.JS</router-link>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GameView from './components/GameView.vue';

@Component({
  components: {
    GameView,
  },
})
export default class App extends Vue {}
</script>
