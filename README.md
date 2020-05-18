# Homepage

![CI](https://github.com/xianshenglu/xianshenglu.github.io/workflows/Vue%20Project%20CI/badge.svg?branch=master)

### Online access

- https://xianshenglu.xyz

Which is proxied by NGINX to https://xianshenglu.github.io/dist/.

### Project setup

```
npm install
```

#### Compiles and hot-reloads for development

```
npm run serve
```

#### Compiles and minifies for production

```
npm run build
```

#### Run your unit tests

```
npm run test:unit
```

#### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### TODOS

- [ ] fix firefox https security.ssl.enable_ocsp_must_staple bug
- [x] add dynamic background before loaded
- [ ] load core-js on demand by userAgent
- [ ] poll service worker or support show update tips without reload?
- [ ] replace service-worker dependencies URL from workbox-cdn to other cdn
- [ ] reduce dns time
- [ ] take better control of modules. For example, delay unimportant modules load and add loading, load hero elements first, etc.
- [ ] consider the effect of 1M bandwidth
- [ ] extract production config from vue.config.js
- [ ] how to push all resources under specific folder with server push
- [ ] optimize iconfont size
- [ ] customize add to home screen button in desktop and mobile.
- [ ] add network status bar.
- [x] split lib into separate url?
- [x] cache `index.html`, `iconfont`, `vue.min.js`, etc.
- [x] fix github action
- [x] fix `ServiceWorker` not work at some devices.
- [x] add server push for crucial resources like vue.min.js and other resources instead of cdn because cdn need extra dns and tcp.
- [x] replace static files path to jsdelivr
- [x] let service worker take control of static resources
- [x] replace `publicPath` to `/` and modify nginx config
- [x] add refresh button when there is new version.
- [x] avoid server 301
- [x] reduce server waiting time.
