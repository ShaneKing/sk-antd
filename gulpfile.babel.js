import gulp from 'gulp';
import gbabel from 'gulp-babel';
import gclean from 'gulp-clean';

gulp.task('clean', () => {
  return gulp.src(['lib'], {read: false})
    .pipe(gclean());
});
gulp.task('build', () => {
  return gulp.src('src/**/*.js')
    .pipe(gbabel({
      'presets': [
        'es2015',
        'stage-0',
        'stage-1',
        'stage-2',
        'stage-3',
        'react'
      ],
      'plugins': [
        [
          "add-module-exports"
        ],
        [
          "import",
          [
            {
              "libraryName": "antd",
              "libraryDirectory": "lib",
              "style": true
            },
            {
              "libraryName": "antd-mobile",
              "libraryDirectory": "component"
            }
          ]
        ]
      ],
      'sourceMaps': 'both'
    }))
    .pipe(gulp.dest('lib'));
});
gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
