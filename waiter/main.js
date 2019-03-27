import app from './app.ui'
import { fetch } from "./static/utils/http"
let options = {
  app: app,
  beforeEach (to, from, next) {
    next()
  }
}
ui.extend({
  fetch:fetch
})
ui.start(options)