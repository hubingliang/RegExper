<template>
    <div class='challenge'>
        <aside class="aside">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zhengzeshi"></use>
            </svg>
        </aside>

        <section class="problem">
            <div class="logo">
                <span class="orange">2018</span> RegExper Challenge</div>
            <div class="level">
                1
            </div>
            <section class="want">
                <div class="question">I need :</div>
                <div class="detail">{{ want }}</div>
            </section>
            <section class="flagsBox">
                <div class="description">Flags :</div>
                <div class="flags" v-for="flag in flags" v-bind:key="flag">
                    {{ flag }}
                </div>
            </section>
        </section>

        <article>
            <div class="article" v-html="article">

            </div>
            <section class="input">
                <div class="wrapper">
                    <span>/</span>
                    <input v-model.trim='input' type='text' placeholder='regexp' id="entry" :style="{ width: inputWidth + 'px',fontSize: fontSize + 'px'}" @input="regexp()">
                    <span>/</span>
                    <input v-model.trim='inputFlags' type="text" placeholder='flags' id="flags" :style="{ width: flagsWidth + 'px',fontSize: fontSize + 'px'}" @input="regexp()">
                </div>
            </section>
        </article>
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

@Component
export default class Checkpoint extends Vue {
    @Provide() private initArticle: string = "hellow world";
    private article: string = "hellow world";
    private want: string = "world";
    private input: string = "";
    private inputFlags: string = "";
    private inputWidth: number = 100;
    private flagsWidth: number = 75;
    private fontSize: number = 20;
    private timeout: any = null;
    private flags: string[] = ["g", "i", "m", "u", "y"];
    @Emit()
    private regexp() {
        if (this.input === "") {
            // 控制input为空的时候不执行代码
            this.article = this.initArticle;
            return;
        }
        this.debounce();
    }
    private debounce(interval: number = 500) {
        this.article = this.initArticle; //reset article 的值
        clearTimeout(this.timeout); //清楚定时器
        this.timeout = setTimeout(() => {
            // 设置新的定时器
            const regexp: RegExp = new RegExp(this.input, this.inputFlags);
            const matches: any = this.article.match(regexp);
            let afterArticle: string = "";
            for (const match of matches) {
                const reg = new RegExp(match, this.inputFlags);
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
        // this.changeInputWidth();
    }
}
</script>

<style lang='less' scoped>
.flex {
    display: flex;
    justify-content: center;
    align-items: center;
}
.challenge {
    height: 90vh;
    width: 65vw;
    grid-area: challenge;
    background: white;
    display: grid;
    grid-template-columns: 4vw 20vw 41vw;
    grid-template-rows: auto;
    grid-template-areas: "aside problem article";
    overflow: hidden;
    article {
        grid-area: article;
        background: #333;
        font-size: 50px;
        color: white;
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: 60vh 20vh 10vh;
        grid-template-areas: "article" "input" "footer";
        .article {
            grid-area: article;
            .flex;
        }
        .input {
            grid-area: input;
            font-size: 20px;
            color: white;
            .wrapper {
                border-bottom: 1px solid #333;
                #entry {
                    border: none;
                    outline: none;
                    background-color: rgba(0, 0, 0, 0);
                    text-align: center;
                }
                #flags {
                    font-size: 20px;
                    border: none;
                    outline: none;
                    background-color: rgba(0, 0, 0, 0);
                    padding: 10px;
                    text-align: center;
                }
            }
            .flex;
        }
    }
    aside {
        grid-area: aside;
        display: flex;
        justify-content: center;
        padding: 10px 0 0;
        border-right: 1px solid #333;
        svg {
            font-size: 45px;
            fill: #ff8008;
        }
    }
    .problem {
        grid-area: problem;
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: 6vh 24vh 28vh 22vh 10vh;
        grid-template-areas: "logo" " level " "want" "flags" "s";
        .logo {
            .orange {
                color: #ff8008;
                padding-right: 5px;
            }
            grid-area: logo;
            font-size: 14px;
            display: flex;
            align-items: center;
            padding-left: 40px;
            font-weight: bold;
            border-bottom: 1px solid #333;
        }
        .level {
            grid-area: level;
            font-size: 60px;
            color: #ff8008;
            border-bottom: 1px solid #333;
            .flex;
        }
        .want {
            grid-area: want;
            flex-wrap: wrap;
            flex-direction: column;
            border-bottom: 1px solid #333;
            position: relative;
            .question {
                position: absolute;
                left: 10px;
                top: 10px;
                color: #333;
                width: 18vw;
                font-weight: bold;
            }
            .detail {
                color: #ff8008;
                font-size: 30px;
                width: 18vw;
                height: 13vh;
                background: #333;
                box-shadow: -7px 25px 48px -15px rgba(0, 0, 0, 0.75);
                .flex;
            }
            .flex;
        }
        .flagsBox {
            position: relative;
            border-bottom: 1px solid #333;
            .flags {
                width: 40px;
                height: 40px;
                background: #333;
                color: white;
                margin: 0 10px;
                .flex;
            }
            .description {
                position: absolute;
                font-weight: bold;
                left: 10px;
                top: 10px;
            }
            .flex;
        }
    }
}
</style>
