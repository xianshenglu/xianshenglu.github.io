# test

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Online access

- https://xianshenglu.xyz

Which is proxied by NGINX to https://xianshenglu.github.io/dist/.

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### TODOS

- [ ] optimize iconfont size
- [x] split lib into separate url?
- [.] take better control of modules. For example, delay unimportant modules load and add loading, load hero elements first, etc.
- [ ] poll service worker or support show update tips without reload?
- [x] cache `index.html`, `iconfont`, `vue.min.js`, etc.
- [ ] fix github action
- [x] fix `ServiceWorker` not work at some devices.
- [x] add server push for crucial resources like vue.min.js and other resources instead of cdn because cdn need extra dns and tcp.
- [ ] customize add to home screen button in desktop and mobile.
- [x] replace static files path to jsdelivr
- [x] let service worker take control of static resources
- [x] replace `publicPath` to `/` and modify nginx config
- [x] add refresh button when there is new version.
- [ ] add network status bar.
- [x] avoid server 301
- [ ] reduce server waiting time.
