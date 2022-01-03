import { appModule } from "./app/app.module";
import { start } from "./framework";
import {wfm} from './framework/index'

wfm.delay(2000).then(() => {
    start(appModule)
})