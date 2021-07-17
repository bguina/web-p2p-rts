<template>
  <div class="game-view">
    <h1>{{ game.title }}</h1>

    <canvas id="game-canvas"></canvas>
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

  get game(): IGame {
    return new Game(this.engine, '#game-canvas')
  }
}
</script>
