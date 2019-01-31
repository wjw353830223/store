import app from './app.ui'
import { fetch } from "./static/utils/http"
let options = {
  app: app
}
ui.extend({
  fetch:fetch,
})
ui.start(options)