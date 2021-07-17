<template>
  <div class="konva-canvas">


  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import IGameState from '@/game/state/IGameState';

@Component
export default class extends Vue {
  created() {
    this.$on('update-state', this.updateState);
  }

  updateState(state: IGameState) {
    console.log('UPDATE');
    // todo: use toViewStateRepr to map as view representation
  }

  private toViewStateRepr(unit: any) {
    return {color: "#ff0000", x: unit["pos"][0], y: unit["pos"][1]};
  }
}
</script>
