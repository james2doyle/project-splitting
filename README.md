# Project splitting

> Experiments and proof-of-concepts for how to share code across projects locally.

Mostly thinking about themes for sites or sharing functions. The goal is not to leverage local NPM modules and instead try to load shared code locally via folders and paths. Thankfully, webpack is pretty good at this so most of these solutions are mostly about how to configure webpack.

Options:

## Folder Based

#### Benefits:

- very clear borders
- independent dependencies, commands/scripts, tests, configs, etc.
- framework agnostic
- different versions of deps. is possible

#### Issues

- no shared dependencies
- no shared commands for building
- keeping project configs in sync can be tough (n + 1)

## ENV Based

#### Benefits:

- transparent borders
- same commands with different names (one command for all builds)
- shared dependencies, commands/scripts, tests, configs, etc.

#### Issues

- framework lock-in (because of shared deps.)
- every dependency is shared even if it isnt used in all projects
- different versions of deps. is not possible
