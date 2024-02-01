import fs from 'fs'
import fonter from 'gulp-fonter'
import ttf2woff2 from 'gulp-ttf2woff2'

export const otfToTtf = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
        .pipe(app.plugins.plumber())
        // конвертируем в .ttf
        .pipe(fonter({
            formats: ['ttf']
        }))
        // Выгружаю в конечную папку dist/fonts
        .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}
export const ttfToWoff = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
        .pipe(app.plugins.plumber())
        // конвертируем в .woff
        .pipe(fonter({
            formats: ['woff']
        }))
        // Выгружаю в конечную папку dist/fonts
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))
        // Достаём файлы .ttf
        .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
        // конвертируем в woff2
        .pipe(ttf2woff2())
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))
}
export const fontsStyle = () => {
    // fonts.scss
    let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`
    // Проверка на наличие файла со шрифтами
    fs.readdir(app.path.build.fonts, function (fontsFiles) {
        if(fontsFiles){
            // если fontsFiles есть
            if(!fs.existsSync(fontsFile)){
                fs.writeFile(fontsFile, '', cb)
                let newFile
                for (let i = 0; i < fontsFiles.length; i++) {
                    let fileName = fontsFiles[i].split('.')[0]
                    if (newFile !== fileName){
                        let nameFont = fileName.split('-')[0] ? fileName.split('-')[0] : fileName
                        let fontWeight = fileName.split('-')[1] ? fileName.split('-')[1] : fileName
                        if (fontWeight.toLowerCase() === 'thin'){
                            fontWeight = 100
                        }
                        else if (fontWeight.toLowerCase() === 'extralignt'){
                            fontWeight = 200
                        }
                        else if (fontWeight.toLowerCase() === 'light'){
                            fontWeight = 300
                        }
                        else if (fontWeight.toLowerCase() === 'medium') {
                            fontWeight = 500
                        }
                        else if (fontWeight.toLowerCase() === 'semibold') {
                            fontWeight = 600
                        }
                        else if (fontWeight.toLowerCase() === 'bold') {
                            fontWeight = 700
                        }
                        else if (fontWeight.toLowerCase() === 'heavy') {
                            fontWeight = 800
                        }
                        else if (fontWeight.toLowerCase() === 'extrabold') {
                            fontWeight = 800
                        }
                        else if (fontWeight.toLowerCase() === 'black') {
                            fontWeight = 900
                        }
                        else {
                            fontWeight = 400
                        }
                        fs.appendFile(fontsFile,
                            `@font-face{
                                font-family: ${nameFont};
                                font-display: swap;
                                src: url("../fonts/${fileName}.woff2") format("woff2"), url("../fonts/${fileName}");
                                font-weight: ${fontWeight};
                                font-style: normal;
                            }\r\n`, cb)
                            newFile = fileName
                    }
                }
            }
            else{
                // если файл fonts.scss существует, выведи ошибку
                console.log('файл fonts.scss существует, для перезаписи файл нужно удалить');
            }
        }
    })
    return app.gulp.src(`${app.path.srcFolder}`)
    function cb(){}
}