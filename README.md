# p2p-rts

Peer-to-peer real time strategy game in your web browser.

## Target product

- <s>Serverless</s> No solution for being free of any server from a web page.
- Fluid
- Highly replayable
- Easy to learn and difficult to master
- Sandbox / testing mode

### To be defined:
- Max number of players
- Allow drop-in / drop-out?

## Dependency injection

We build the dependency components tree using [InversifyJS](https://inversify.io/).  
Their types are [enumerated](src/inversify.types.ts) and bound by our custom [Inversify Container](src/inversify.config.ts).

## Game rendering

The page is rendered with VueJS.  
The game canvas is drawn using a loosely coupled library (Konva for now).

## Game engine

> TODO

## Game networking

> TODO: Most probably WebRTC.

## Contribute

### Setup

#### On Windows
- [Install NVS](https://github.com/jasongin/nvs) (Node Version Switcher)
- Install latest node LTS + add it your PATH: `$ nvs install lts && nvs link lts`
- Install Yarn: `npm install -g yarn`
- Install project dependencies: `$ yarn install`

### Git flow

Prefix your commit messages with [an appropriate icon](https://gitmoji.dev/).

### Run
Actions are all listed in the [package.json](package.json) "scripts" object.
- Start as server: `$ npm run serve`
- Build as static: `$ npm run build`
