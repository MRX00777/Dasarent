import pug from "gulp-pug"
import webpHtmlNosvg from "gulp-webp-html-nosvg"

export const html = () => {
    return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber())
    .pipe(pug({
        pretty: true,
        verbose: true
    }))
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    .pipe(webpHtmlNosvg())
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream())
}