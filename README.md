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

- Define interfaces in javascript -> js is poorly typed. Use client-side typescript?
- Choose a DI library / patterns.

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