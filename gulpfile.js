// For this to work I installed thw following packages:
// npm install --save-dev gulp gulp-typescript
//
var gulp = require("gulp");
var ts = require("gulp-typescript");

var tsProject = ts.createProject("tsconfig.json");

gulp.task("typescript", function() {
    return tsProject.src()      //  This specifies the list of sources from the tsconfig (include/exclude/files/filesGlob....etc)
        .pipe(tsProject())    //  Compile the sources using the options specified in the tsProject file
                                //  Look here for more options:  https://www.npmjs.com/package/gulp-typescript
        .pipe(gulp.dest("build/"));   //  Simply output the files in the root folder (this is why the empty dest string "")
});

gulp.task("watch", function() {
    gulp.watch("*.ts",          //  Watch all *.ts files...
        ["typescript"]          //  ...then run the "typescript" (above) when the files being watched change
    );
})

gulp.task("default", ["watch"]);    //  Default gulp task rung the "watch" task above