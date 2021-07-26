<template>
  <div id="app">
    <router-view></router-view>
    <footer class="engine-selector">
      <li>
        <ul class="engine-option">
          <router-link :to="{ name: 'konva' }">Vue Konva</router-link>
        </ul>
        <ul class="engine-option">
          <router-link :to="{ name: 'threejs' }">Three.JS</router-link>
        </ul>
      </li>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GameView from "./components/GameView.vue";

@Component({
  components: {
    GameView,
  },
})
export default class App extends Vue {}
</script>

<style scoped>

li {
  list-style: none;
}
.engine-option {
  display: inline-flex;
}
</style>
