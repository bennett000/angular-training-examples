// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md


declare var System: any;

(function () {
  /***********************************************************************************************
   * User Configuration.
   **********************************************************************************************/
  /** Map relative paths to URLs. */
  const map: any = {
  };

  /** User packages configuration. */
  const packages: any = {
    'rxjs'                             : {main: 'Rx'},
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////
  /***********************************************************************************************
   * Everything underneath this line is managed by the CLI.
   **********************************************************************************************/
  const barrels: string[] = [
    // App specific barrels.
    '../../app',
    'examples-rxjs',
    'code'
  ];

  const cliSystemConfigPackages: any = {};
  barrels.forEach((barrelName: string) => {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
  });

  /** Type declaration for ambient System. */
  System.config({
    map: {
      'rxjs': '/vendor/rxjs',
      'main': './main.js',
    },
    packages: cliSystemConfigPackages
  });

  // Apply the user's configuration.
  System.config({ map, packages });
}());
