import { WFMComponent } from "../../framework";

class StarshipsPageComponent extends WFMComponent {
    constructor(config) {
        super(config)
    }
}

export const starshipsPageComponent = new StarshipsPageComponent({
    selector: 'starships-page',
    template: 'Nothing to show now about starships!'
})