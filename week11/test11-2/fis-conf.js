
fis.match('*.js', {
    release: 'dist2/script/$0'
});
fis.match('*.{png,jpg}', {
    release: 'dist2/img/$0'
});
fis.match('*.css', {
    release: 'dist2/style/$0'
});
fis.match('*.html', {
    release: 'dist2/$0'
});
fis.match('*.{png,js,css}', {
    useHash:true
});



fis.match('*.js', {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});fis.match('::package', {
    spriter: fis.plugin('csssprites')
})

// 对 CSS 进行图片合并
fis.match('*.css', {
    // 给匹配到的文件分配属性 `useSprite`
    useSprite: true
});