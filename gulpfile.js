// Основной модуль
import gulp from "gulp"
// Импорт путей
import { path } from "./gulp/config/path.js"
import { plugins } from "./gulp/config/plugins.js"
// передаём значения в глобальную переменную
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}
// импорт задач
import { copy } from "./gulp/tasks/copy.js"
import { reset } from "./gulp/tasks/reset.js"
import { html } from "./gulp/tasks/html.js"
import { server } from "./gulp/tasks/server.js"
import { scss } from "./gulp/tasks/scss.js"
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js" 
import { images } from "./gulp/tasks/images.js"

// Наблюдатель за изменениями файлов
function watcher() {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, scss)
    gulp.watch(path.watch.images, images)
}
// Подключение шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)
// основные задачи
const mainTasks = gulp.series(reset, copy, html, scss, images)

// построение сценариев выполнения задач
const dev = gulp.series(mainTasks, fonts, gulp.parallel(watcher, server))
// выполнение сценария по умолчанию
gulp.task('default', dev)
