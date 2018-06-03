<template>
    <div class='challenge'>
        <article v-html="article">
        </article>
        <section class="want">
            {{ want }}
        </section>
        <section class="input">
            <div class="wrapper">
                <span>/</span>
                <input v-model.trim='input' type='text' placeholder='regexp' id="entry" :style="{ width: inputWidth + 'px',fontSize: fontSize + 'vw'}" @input="changeInputWidth();regexp()">
                <span>/</span>
                <input v-model.trim='flags' type="text" placeholder='flags' id="flags" :style="{ width: flagsWidth + 'px',fontSize: fontSize + 'vw'}" @input="changeFlagsWidth();regexp()">
            </div>
        </section>

    </div>
</template>

<script lang='ts'>
import {
    Component,
    Emit,
    Inject,
    Model,
    Prop,
    Provide,
    Vue,
    Watch
} from "vue-property-decorator";
import { constants } from "http2";
import { setTimeout, clearTimeout } from "timers";
import { emit } from "cluster";

@Component
export default class Checkpoint extends Vue {
    @Provide() private initArticle: string = "hellow world";
    @Provide() private article: string = "hellow world";
    @Provide() private want: string = "ell";
    @Provide() private input: string = "";
    @Provide() private flags: string = "";
    @Provide() private inputWidth: number = 100;
    @Provide() private flagsWidth: number = 75;
    @Provide() private fontSize: number = 6.66;
    @Provide() private timeout: any = null;
    @Emit()
    private regexp() {
        if (this.input === "") {
            // 控制input为空的时候不执行代码
            this.article = this.initArticle;
            return;
        }
        this.te();
    }
    @Emit()
    private te(interval: number = 500) {
        this.article = this.initArticle; //reset article 的值
        clearTimeout(this.timeout); //清楚定时器
        this.timeout = setTimeout(() => {
            // 设置新的定时器
            const regexp: RegExp = new RegExp(this.input, this.flags);
            const matches: any = this.article.match(regexp);
            let afterArticle: string = "";
            for (const match of matches) {
                const reg = new RegExp(match, this.flags);
                afterArticle = this.article.replace(
                    reg,
                    `<span style="color: #ff8008;">${match}</span>`
                );
            }
            this.article = afterArticle;
        }, interval);
    }
    private changeInputWidth() {
        const inputHtml: any = document.getElementById("entry");
        this.inputWidth = inputHtml.value.length * 15;

        if (this.inputWidth < 100) {
            this.inputWidth = 100;
            this.fontSize = 6.66;
        } else if (this.inputWidth < 280) {
            this.fontSize = 6.66;
        } else {
            this.fontSize = 4.5;
            this.inputWidth = 280;
        }
    }
    private changeFlagsWidth() {
        const flagsHtml: any = document.getElementById("flags");
        this.flagsWidth = flagsHtml.value.length * 25;
        if (this.flagsWidth === 0) {
            this.flagsWidth = 65;
        } else if (this.flagsWidth > 100) {
            this.flagsWidth = 100;
        }
    }
    private mounted() {
        this.changeInputWidth();
    }
}
</script>

<style lang='less' scoped>
.highlight {
    color: red;
}
.flex {
    display: flex;
    justify-content: center;
    align-items: center;
}
.challenge {
    height: 100vh;
    width: 100vw;
    padding: 40px;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 200px auto;
    grid-template-areas: "article" "want" "input";
    grid-row-gap: 40px;
    article {
        grid-area: article;
        background: white;
        border-radius: 10px;
        font-size: 50px;
        .flex;
    }
    .want {
        grid-area: want;
        background: #333;
        border-radius: 10px;
        color: white;
        font-size: 50px;
        .flex;
    }
    .input {
        grid-area: input;
        font-size: 50px;
        .wrapper {
            border-bottom: 1px solid #333;
            #entry {
                border: none;
                outline: none;
                background-color: rgba(0, 0, 0, 0);
                padding: 10px;
                text-align: center;
            }
            #flags {
                font-size: 50px;
                border: none;
                outline: none;
                background-color: rgba(0, 0, 0, 0);
                padding: 10px;
                text-align: center;
                width: 200px;
            }
        }
        .flex;
    }
}
</style>
