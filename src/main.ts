import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router'
import './public/css/reset.css'
import { setupElem } from './libs/elem'

const app = createApp(App)

setupRouter(app)
setupElem(app)
router.isReady().then(() => {
  app.mount("#app")
});


