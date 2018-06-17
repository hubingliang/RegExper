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
                <div class="flags" v-for="flag in flags" @mouseenter="flagHover(flag)" @mouseleave="flagHover(flag)" v-bind:key="flag.flag" @click="changeFlags(flag);regexp()" :class="{ active: flag.status }">
                    {{ flag.flag }}
                </div>
                <div class="detail">
                    {{flagDetail}}
                </div>
            </section>
            <section class="test">
                <svg class="icon animated bounceIn" aria-hidden="true" v-if="pass">
                    <use xlink:href="#icon-duihao"></use>
                </svg>
                <button @click="testCode()" v-else>Test Code</button>
            </section>
        </section>

        <article>
            <div class="article" v-html="article" id="article">

            </div>
            <section class="input">
                <div class="wrapper">
                    <span>/</span>
                    <input v-model.trim='input' type='text' placeholder='regexp' id="entry" :style="{ width: inputWidth + 'px',fontSize: fontSize + 'px'}" @input="changeInputWidth();regexp()">
                    <span>/</span>
                    <input type="text" id="flags" :value="inputFlags" placeholder="flags" readonly="readonly">
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
import { setTimeout } from "timers";

@Component
export default class Checkpoint extends Vue {
    @Provide() private initArticle: string = "";
    private article: string = "";
    private want: string = "";
    private input: string = "";
    private inputFlags: string = "";
    private inputWidth: number = 100;
    private flagsWidth: number = 75;
    private fontSize: number = 20;
    private timeout: any = null;
    private flags: object[] = [
        {
            flag: "g",
            status: false,
            detail: "global"
        },
        {
            flag: "i",
            status: false,
            detail: "case insensitive"
        },
        {
            flag: "m",
            status: false,
            detail: "multiline"
        },
        {
            flag: "u",
            status: false,
            detail: "unicode"
        },
        {
            flag: "y",
            status: false,
            detail: "sticky"
        }
    ];
    private flagDetail: string = "";
    private questionData: object[] = [];
    private currentQuestion: object = {};
    private test: string = "";
    private pass: boolean = false;
    private questionIndex: number = 0;
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
        this.article = this.initArticle; // reset article 的值
        clearTimeout(this.timeout); // 清楚定时器
        this.timeout = setTimeout(() => {
            // 设置新的定时器
            if (this.inputFlags === "flags") {
                this.inputFlags = "";
            }
            const regexp: RegExp = new RegExp(this.input, this.inputFlags);
            console.log("​Checkpoint -> this.timeout -> regexp", regexp);

            const matches: any = this.article.match(regexp);
            console.log("​Checkpoint -> this.timeout -> matches", matches);

            let afterArticle: string = "";
            for (const match of matches) {
                const reg = new RegExp(match, this.inputFlags);
                afterArticle = this.article.replace(
                    reg,
                    `<span style="color: #ff8008;display: inline">${match}</span>`
                );
            }
            this.article = afterArticle;
        }, interval);
    }
    private changeInputWidth() {
        const inputHtml: any = document.getElementById("entry");
        let width: number = inputHtml.value.length * 15;
        if (width > 120) {
            this.inputWidth = width;
        } else {
            this.inputWidth = 120;
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
    private changeFlags(flagObj: flagObj) {
        interface flagObj {
            flag: string;
            status: boolean;
        }
        if (this.inputFlags.includes(flagObj.flag)) {
            flagObj.status = false;
            this.inputFlags = this.inputFlags.replace(flagObj.flag, "");
        } else {
            flagObj.status = true;
            this.inputFlags = `${this.inputFlags}${flagObj.flag}`;
        }
    }
    private flagHover(flagObj: flagObj) {
        interface flagObj {
            flag: string;
            status: boolean;
            detail: string;
        }
        if (this.flagDetail === "") {
            this.flagDetail = flagObj.detail;
        } else {
            this.flagDetail = "";
        }
    }
    private initQuestionData(questionIndex: number) {
        setTimeout(() => {
            this.questionData = this.$store.state.questionData;
            this.currentQuestion = this.$store.state.questionData[
                questionIndex
            ];
            this.article = this.$store.state.questionData[
                questionIndex
            ].article;
            if (this.article.length > 20) {
            }
            this.initArticle = this.$store.state.questionData[
                questionIndex
            ].article;
            this.want = this.$store.state.questionData[questionIndex].want;
            this.test = this.$store.state.questionData[questionIndex].test;
        }, 0);
    }
    private testCode() {
        const regexp: RegExp = new RegExp(this.input, this.inputFlags);
        if (regexp.exec(this.test)) {
            this.nextQuestion();
        } else {
            alert("don't work");
        }
    }
    private nextQuestion() {
        alert("nb");
        this.pass = true;
        setTimeout(() => {
            this.pass = false;
            this.questionIndex++;
            this.initQuestionData(this.questionIndex++);
        }, 1000);
    }
    mounted() {
        this.initQuestionData(this.questionIndex);
    }
}
</script>

<style lang='less'>
.flex {
    display: flex;
    justify-content: center;
    align-items: center;
}
.smallSize {
    font-size: 16px;
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
        padding: 40px;
        .article {
            grid-area: article;
            width: 100%;
            text-align: center;
            .flex;
        }
        .input {
            grid-area: input;
            font-size: 20px;
            .wrapper {
                border-bottom: 1px solid #ff8008;
                color: #ff8008;
                flex-wrap: wrap;
                #entry {
                    color: white;
                    border: none;
                    outline: none;
                    background-color: rgba(0, 0, 0, 0);
                    text-align: center;
                }
                #flags {
                    color: white;
                    font-size: 20px;
                    border: none;
                    outline: none;
                    background-color: rgba(0, 0, 0, 0);
                    padding: 10px;
                    text-align: center;
                    width: 100px;
                }
                .flex;
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
        grid-template-areas: "logo" " level " "want" "flags" "test";
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
                flex-wrap: wrap;
                .flex;
            }
            .active {
                color: #ff8008;
            }
            .description {
                position: absolute;
                font-weight: bold;
                left: 10px;
                top: 10px;
            }
            .detail {
                position: absolute;
                bottom: 20px;
                font-size: 20px;
                color: #ff8008;
                .flex;
            }
            .flex;
        }
        .test {
            button {
                background: #333;
                border: none;
                width: 120px;
                height: 40px;
                color: #ff8008;
                font-weight: bold;
                font-size: 18px;
            }
            svg {
                font-size: 35px;
                fill: #ff8008;
            }
            grid-area: test;
            .flex;
        }
    }
}
</style>
