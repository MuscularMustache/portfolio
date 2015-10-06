module.exports = function(grunt){

  // NOTE this holds all of the initial configurations for all of our tasks
  grunt.initConfig({

    stylus: {
      options: {
        compress: true,
      },
      compile: {
        files: {
          'build/assets/css/styles.css': ['client/assets/stylesheets/*.styl']
        },
      },
    }

  });

  // predefined grunt tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  // NOTE - default to concat files then run changes
  grunt.registerTask('default', ['stylus']);
};
