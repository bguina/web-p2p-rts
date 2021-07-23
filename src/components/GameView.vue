<template>
  <div id="game-view">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import IGame from '@/game/IGame';
import ERenderEngine from '@/game/render/ERenderEngine';
import renderEngineBuilder from '@/game/render/RenderEngineBuilder';
import container from "@/inversify.config";
import IRenderEngine from "@/game/render/IRenderEngine";
import TYPES from "../inversify.types";

@Component
export default class GameView extends Vue {
  @Prop() engine!: ERenderEngine;
  private game!: IGame;

  mounted() {
    const renderEngine = renderEngineBuilder[this.engine]('#game-view')
    container.bind<IRenderEngine>(TYPES.RenderEngine).toConstantValue(renderEngine);
    this.game = container.get<IGame>(TYPES.Game);
  }

}
</script>

<style scoped>

</style>
