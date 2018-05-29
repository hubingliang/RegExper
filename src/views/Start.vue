<template>
    <div class="start">
        <div class="logo animated bounceIn">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zhengzeshi"></use>
            </svg>
            RegExper
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { watch } from 'fs';

@Component
export default class Start extends Vue {
    private mounted() {
        setTimeout(() => {
            this.$router.push('home');
        }, 2000);
    }
}
</script>

<style lang="less" scoped>
.start {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #ff8008; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to right,
        #ffc837,
        #ff8008
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ffc837, #ff8008);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    .logo {
        font-size: 3.125rem;
        font-weight: bold;
        color: white;
    }
    .icon {
        font-size: 1.5rem;
    }
}
</style>
