<template>
  <div class="home">
    <Checkpoint></Checkpoint>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Checkpoint from '@/components/Checkpoint.vue'; // @ is an alias to /src
import Start from '@/views/Start.vue';

@Component({
    components: {
        Checkpoint,
    },
})
export default class Home extends Vue {}
</script>

<style lang="less" scoped>
.home {
    width: 100vw;
    height: 100vh;
}
</style>
