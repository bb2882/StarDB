import { WFMComponent } from "../../framework";

class PlanetsPageComponent extends WFMComponent {
    constructor(config) {
        super(config)
    }
}

export const planetsPageComponent = new PlanetsPageComponent({
    selector: 'planets-page',
    template: 'Nothing to show now about planets!'
})