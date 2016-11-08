const gulp = require('gulp');
const configs = require('./gulpConfig').configs;
const requires = {};

var task, pipes, pipe, stream;

// Récupération des modules de chaque tâche pour les placer dans le tableau requires
for(task in configs){
    pipes = configs[task].pipes;
   for(pipe in pipes){
       requires[pipe] = require('gulp-'+pipe);
   }
}

// Définition de chaque tache depuis le fichier de configuration
for(task in configs){
    pipes = configs[task].pipes;
    gulp.task(task, function () {
        stream = gulp.src(configs[task].src);
        for(pipe in pipes){
            stream = stream.pipe(requires[pipe](pipes[pipe]));
        }
        stream.pipe(gulp.dest(configs[task].dest));
    });
}
