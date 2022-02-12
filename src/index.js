import { appModule } from "./app/app.module";
import { start } from "./framework";
import {wfm} from './framework/index';
import "./scss/style.scss";

wfm.delay(1000).then(() => {
    start(appModule)
})