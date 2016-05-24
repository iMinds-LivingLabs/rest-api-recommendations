"use strict()";

module.exports = function( grunt ){
  // Load grunt tasks automatically
  require( "jit-grunt" )( grunt );

  // Project configuration.
  grunt.initConfig( {
    "gh-pages": {
      options: {
        base: "dist"
      },
      src: [ "**" ]
    }
  } );
};