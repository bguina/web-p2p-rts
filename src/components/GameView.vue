<template>
  <div id="game-view"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import DiContainer from "../inversify.config";
import TYPES from "../inversify.types";
import IGame from "@/game/IGame";
import ERenderEngine from "@/game/render/ERenderEngine";
import Game from "../game/impl/Game";
import GameEngine from "../game/impl/GameEngine";
import InputController from "../game/input/impl/InputController";
import WebRtcNetworkEngine from "../game/net/impl/WebRtcNetworkEngine";
import VueKonvaRenderEngine from "@/game/render/konva/KonvaRenderEngine";

@Component
export default class GameView extends Vue {
  @Prop() engine!: ERenderEngine;
  private game!: IGame;

  mounted(): void {
    this.game = new DiContainer(
      VueKonvaRenderEngine,
      WebRtcNetworkEngine,
      GameEngine,
      InputController,
      Game,
      "#game-view"
    ).get<IGame>(TYPES.Game);
  }
}
</script>

<style scoped>
</style>
