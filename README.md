# p2p-rts

Peer-to-peer real time strategy game in your web browser.

## Target product

- Serverless
- Fluid
- Highly replayable
- Easy to learn and difficult to master
- Sandbox mode

### To be defined:
- Max number of players
- Allow drop-in / drop-out?

## Dependency injection

We are still unsure about the techs we want to use. This is why is it crucial to only rely on business-driven modelisation of the project through models + interfaces (versus building around library components) by extensively using dependency injection.

Choose among:
- [InversifyJS](https://inversify.io/) (a [bit of introduction](https://nehalist.io/dependency-injection-in-typescript/#dependencyinjectionintypescript]))
- [tsyringe](https://github.com/microsoft/tsyringe)

## Static layout

Pure HTML5? Less? Modernizr? Flexbox? Bootstrap?

## Real-time communication (RTC)

- WebRTC

## View

> We might change the view layer later.

#### Proof of concept / testing playground

[VueJS + Konva](https://github.com/konvajs/vue-konva).

#### Possibly upcoming

- WebGL
- ThreeJS


## Contribute

### Setup

#### On Windows
- [Install NVS](https://github.com/jasongin/nvs) (Node Version Switcher)
- Install latest node LTS + add it your PATH: `$ nvs install lts && nvs link lts`
- Install project dependencies: `$ npm i`

### Git flow

Prefix your commit messages with [an appropriate icon](https://gitmoji.dev/).

### Run
Actions are all listed in the [package.json](package.json) "scripts" object.
- Start as server: `$ npm run serve`
- Build as static: `$ npm run build`
