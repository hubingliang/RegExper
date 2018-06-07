<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script lang="ts">
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
import AV from "leancloud-storage";

@Component
export default class App extends Vue {
    @Emit()
    private AV() {
        const APP_ID = "NRa4AM1Qcb4hKUpR8bsCT7Ai-gzGzoHsz";
        const APP_KEY = "whcdEgtnUayiKhDDiDtbMd6C";

        AV.init({
            appId: APP_ID,
            appKey: APP_KEY
        });
    }
    private getQuestion() {
        const query = new AV.Query("question");
        query.get("5b18fb3cac502e003426f830").then(
            (todo: any) => {
                let storage = window.localStorage;
                console.log(todo.attributes.question.question);
                this.$store.commit("getQuestion",todo.attributes.question.question);
            },
            function(error: any) {
                // 异常处理
            }
        );
    }
    mounted() {
        this.AV();
        this.getQuestion();
    }
}
</script>


<style lang="less">
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
#app {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ff8008; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to right,
        #ffc837,
        #ff8008
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ffc837, #ff8008);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    overflow: hidden;
}
</style>
