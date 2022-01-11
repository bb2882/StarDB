import { WFMModule } from '../framework/index'
import { appComponent } from './app.component'
import { appRoutes } from './app.routes'
import { appHeader } from './common/app.header'
import { appPlanets } from './common/app.planets'

class AppModule extends WFMModule {
    constructor(config) {
        super(config)
    }
}

export const appModule = new AppModule({
    components: [
        appHeader,
        appPlanets
    ],

    main: appComponent,
    routes: appRoutes
})