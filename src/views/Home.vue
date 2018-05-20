<template>
  <div class="home">
    <Checkpoint></Checkpoint>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Checkpoint from "@/components/Checkpoint.vue"; // @ is an alias to /src
import Start from "@/views/Start.vue";

@Component({
    components: {
        Checkpoint
    }
})
export default class Home extends Vue {}
</script>

<style lang="less" scoped>
.home {
    padding: 100px;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: #ff8008; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to right,
        #ffc837,
        #ff8008
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ffc837, #ff8008);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
