<template>
  <div class="konva-canvas"></div>
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
  }
}
</script>
