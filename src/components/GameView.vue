<template>
  <div class="game-view">
    <div id="game-canvas"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import IGame from '@/game/IGame';
import Game from '@/game/impl/Game';
import { ERenderEngine } from '@/game/render/ERenderEngine';

@Component
export default class GameView extends Vue {
  @Prop() engine!: ERenderEngine;
  private game!: IGame;

  mounted() {
    this.game = new Game(this.engine, '#game-canvas');
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
