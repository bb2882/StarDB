import { WFMComponent } from "../framework";

class AppComponent extends WFMComponent {
    constructor(config) {
        super(config)
    }
}

export const appComponent = new AppComponent({
    selector: 'app-root',
    template: `
        <header class="header main"></header>
        <planets class="planets main"></planets>

        <router-outlet class="router-outlet"></router-outlet>
        <not-found class="not-found"></not-found>
    `
})