/* stephe/artiste
 *
 * /gulpfile.js - Gulp tasks
 *
 * coded by stephecloutier@gmail.com
 * started at 27/02/2017
 */

var gulp = require("gulp"),
    image = require("gulp-image"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    csso = require("gulp-csso"),
    pug = require("gulp-pug");

// --- Tasks for images

    gulp.task("images", function() {
        gulp.src("src/images/**")
            .pipe(image())
            .pipe(gulp.dest("assets/images"));
   });

// --- Tasks for styles

    gulp.task("css", function() {
        gulp.src("src/sass/**/*.scss")
            .pipe(sass().on("error", sass.logError))
            .pipe(autoprefixer())
            .pipe(csso())
            .pipe(gulp.dest("assets/css"));
   });

// --- Tasks for pug

    gulp.task("html", function() {
        gulp.src("src/pug/**/*.pug")
            .pipe(pug({}))
            .pipe(gulp.dest("."))
   });


// --- Watch tasks

    gulp.task("watch", function(){
        gulp.watch("src/images/**", ["images"]);
        gulp.watch("src/sass/**/*.scss", ["css"]);
        gulp.watch("src/pug/**/*.pug", ["html"]);
   });

// --- Aliases

    gulp.task("default", ["images", "html", "css"]);
    gulp.task("work", ["default", "watch"]);
