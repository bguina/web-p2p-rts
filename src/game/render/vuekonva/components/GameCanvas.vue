<template>
  <div ref="canvas">

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import IGameState from '@/game/state/IGameState';

@Component
export default class extends Vue {
  @Prop() private msg!: string;
  @Prop() gameState!: IGameState;

  constructor() {
    super()
    const element = this.$refs.canvas as Vue;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
