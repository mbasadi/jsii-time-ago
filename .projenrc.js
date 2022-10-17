const { cdk } = require('projen');
const project = new cdk.JsiiProject({
  author: 'mbasadi',
  authorAddress: 'asadi.mohammadbagher@gmail.com',
  defaultReleaseBranch: 'main',
  name: 'jsii-time-ago',
  repositoryUrl: 'https://github.com/mbasadi/jsii-time-ago.git',
  defaultReleaseBranch: 'master',
  publishToPypi: {
    distName: 'jsii-time-ago-py',
    module: 'jsii-time-ago-py',
  },
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
