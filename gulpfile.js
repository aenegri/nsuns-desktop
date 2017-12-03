const fs = require('fs')

const gulp = require('gulp')
const babel = require('gulp-babel')
const webpack = require('gulp-webpack')
const eslint = require('gulp-eslint')

const del = require('del')
const merge = require('merge-stream')

const STATIC_CONTENT = [
    'app/static/*',
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/bootstrap/dist/js/bootstrap.min.js'
]

gulp.task('clean', () => del(['build']))

gulp.task('copy_static', ['clean'], () => {
    var tasks = STATIC_CONTENT.map((element) => {
        return gulp.src(element)
            .pipe(gulp.dest('build/static'))
    })

    return merge(tasks)
})

gulp.task('lint_js', ['copy_static'], () =>
    gulp.src('app/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
)

gulp.task('build_main', ['lint_js'], () =>
    gulp.src('app/main.js')
        .pipe(babel())
        .pipe(gulp.dest('build'))
)

gulp.task('bundle_main', ['build_main'], () =>
    gulp.src('build/main.js')
        .pipe(webpack({
            target: 'electron-main',
            output: { filename: 'main.bundle.js'},
            node: {
                __dirname: false
            }
        }))
        .pipe(gulp.dest('build/static'))
)

gulp.task('build_gui', ['lint_js'], () =>
    gulp.src('app/js/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('build/js'))
)

gulp.task('bundle_gui', ['build_gui'], () =>
    gulp.src('build/js/client.js')
        .pipe(webpack({ 
            output: { filename: 'client.bundle.js'},
            node: {
                __dirname: false
            },
            target: 'electron-renderer'
        }))
        .pipe(gulp.dest('build/static'))
)

gulp.task('build', ['bundle_gui', 'bundle_main'])