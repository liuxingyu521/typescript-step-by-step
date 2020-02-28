const gulp = require("gulp");
const ts = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");
const tsProject = ts.createProject("tsconfig.json");
const del = require("del");

const { src, dest, task, series } = gulp;

function delTask() {
  return del("./output/");
}

function tsTask() {
  const tsResult = src("src/**/*.ts")
    .pipe(sourcemaps.init())
    .pipe(tsProject());

  return tsResult.js
    .pipe(sourcemaps.write("./sourcemaps"))
    .pipe(dest("./output/"));
}

task("default", series(delTask, tsTask));
