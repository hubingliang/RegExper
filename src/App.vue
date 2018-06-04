<template>
    <div id="app">
        <router-view/>
    </div>
</template>

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
