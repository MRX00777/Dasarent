import replace from "gulp-replace";  // поиск и замену
import plumber from "gulp-plumber"  // Обработка ошибок
import notify from "gulp-notify"// сообщения подсказка
import browsersync from "browser-sync"; // локальный сервер
import newer from "gulp-newer";// Проверка обновления


export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer
}
