<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <GameCanvas msg="Welcome to Your Vue.js + TypeScript App"/>
    <GameRenderEngineSelector/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GameCanvas from './components/GameContainer.vue';
import GameRenderEngineSelector from './components/GameRenderEngineSelector.vue';

@Component({
  components: {
    GameCanvas,
    GameRenderEngineSelector,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
