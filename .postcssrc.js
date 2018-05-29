module.exports = {
    "plugins":
        {
            "postcss-aspect-ratio-mini": {},
            "postcss-write-svg": {
                utf8: false
            },
            "postcss-cssnext": {},
            "postcss-px-to-viewport": {
                viewportWidth: 750, //设置视觉设计稿的宽度
                viewportHeight: 1334, //设置视觉设计稿的高度
                unitPrecision: 3, //单位的精度，即保留多少位小数
                viewportUnit: 'vw', //转换的单位
                selectorBlackList: ['.ignore', '.hairlines'], //需要忽略的选择器
                minPixelValue: 1, //最小像素值
                mediaQuery: false //是否允许媒体查询转换为 px
            },
            "postcss-viewport-units": {},
            "cssnano": {
                preset: "advanced",
                autoprefixer: false,
                "postcss-zindex": false
            }
        }
}