<template>
    <div class="checkPoint">
        <div class="chapter">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zhengzeshi"></use>
            </svg>
            <div class="starBox">
                <svg class="icon star" aria-hidden="true">
                    <use xlink:href="#icon-star"></use>
                </svg>
                <svg class="icon star" aria-hidden="true">
                    <use xlink:href="#icon-star"></use>
                </svg>
                <svg class="icon star solid" aria-hidden="true">
                    <use xlink:href="#icon-star2"></use>
                </svg>
            </div>
        </div>
        <div class="chapter">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zhengzeshi"></use>
            </svg>
            <div class="starBox">
                <svg class="icon star" aria-hidden="true">
                    <use xlink:href="#icon-star"></use>
                </svg>
                <svg class="icon star" aria-hidden="true">
                    <use xlink:href="#icon-star"></use>
                </svg>
                <svg class="icon star solid" aria-hidden="true">
                    <use xlink:href="#icon-star2"></use>
                </svg>
            </div>
        </div>
        <div class="chapter">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zhengzeshi"></use>
            </svg>
            <div class="starBox">
                <svg class="icon star" aria-hidden="true">
                    <use xlink:href="#icon-star"></use>
                </svg>
                <svg class="icon star" aria-hidden="true">
                    <use xlink:href="#icon-star"></use>
                </svg>
                <svg class="icon star solid" aria-hidden="true">
                    <use xlink:href="#icon-star2"></use>
                </svg>
            </div>
        </div>
        <div class="chapter">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zhengzeshi"></use>
            </svg>
            <div class="starBox">
                <svg class="icon star" aria-hidden="true">
                    <use xlink:href="#icon-star"></use>
                </svg>
                <svg class="icon star" aria-hidden="true">
                    <use xlink:href="#icon-star"></use>
                </svg>
                <svg class="icon star solid" aria-hidden="true">
                    <use xlink:href="#icon-star2"></use>
                </svg>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Checkpoint extends Vue {}
</script>

<style lang="less" scoped>
.checkPoint {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
    width: 100vw;
    height: 100vh;
    .chapter {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
        width: 110px;
        flex-wrap: wrap;
        .icon {
            font-size: 50px;
        }
        .starBox {
            display: flex;
            .star {
                font-size: 25px;
                margin: 0 5px;
            }
            .solid{}
        }
    }
}
</style>
