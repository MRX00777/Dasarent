import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'
import cleancss from 'gulp-clean-css'
import autoprefixer from 'gulp-autoprefixer'
import groupMedia from 'gulp-group-css-media-queries'
import webpcss from 'gulp-webpcss'

const sass = gulpSass(dartSass)

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { soursemaps: true })
    .pipe(app.plugins.plumber())
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(groupMedia())
    .pipe(webpcss({
        webpClass: ".webp",
        noWebpClass: ".no-webp"
    }))
    .pipe(autoprefixer({
        grid: true,
        overrideBrowserList: ["last 3 versions"],
        cascade: true
    }))
    .pipe(cleancss())
    .pipe(rename({
        extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream())
}