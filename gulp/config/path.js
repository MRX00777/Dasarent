// Получаем имя папки проекта
import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`
const srcFolder = `./src`

export const path = {
    build:{
        files: `${buildFolder}/files/`,
        html: `${buildFolder}/`,
        fonts: `${buildFolder}/fonts/`,
        css: `${buildFolder}/css/`,
        images: `${buildFolder}/img/`
    },
    src:{
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/*.pug`,
        scss: `${srcFolder}/scss/style.scss`,
        images: `${srcFolder}/img/**/*.{jpg,png,jpeg,webp,gif,jfif}`,
        svg: `${srcFolder}/img/**/*.svg`
    },
    watch:{
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/**/*.pug`,
        scss: `${srcFolder}/scss/**/*.scss`,
        images: `${srcFolder}/img/**/*.{jpg,png,jpeg,webp,gif,jfif}`
    },
    clean: buildFolder,
    srcFolder: srcFolder,
    rootFolder:rootFolder,
    ftp: ``
}