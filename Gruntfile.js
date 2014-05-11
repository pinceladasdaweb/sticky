module.exports = function (grunt) {
    pkg: grunt.file.readJSON('package.json'),
    grunt.initConfig({
        uglify: {
            options: {
                preserveComments: 'all'
            },
            src: {
                files: {
                    'assets/js/sticky.min.js': ['assets/js/sticky.js']
                }
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', [ 'uglify' ]);
};
