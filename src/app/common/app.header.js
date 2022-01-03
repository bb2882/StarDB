import { WFMComponent } from '../../framework/index'

class AppHeader extends WFMComponent {
    constructor(config) {
        super(config)
    }
}

export const appHeader = new AppHeader({
    selector: 'header',
    template: `
        <div class="header__links">
            <a href="#" class="header__link special">StarDB</a>
            <a href="#people" class="header__link">People</a>
            <a href="#planets" class="header__link">Planets</a>
            <a href="#starships" class="header__link">Starships</a>
        </div>
    `
}) 