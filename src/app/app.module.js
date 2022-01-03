import { WFMModule } from '../framework/index'
import { appComponent } from './app.component'
import { appRoutes } from './app.routes'
import { appHeader } from './common/app.header'

class AppModule extends WFMModule {
    constructor(config) {
        super(config)
    }
}

export const appModule = new AppModule({
    components: [
        appHeader,
    ],

    main: appComponent,
    routes: appRoutes
})