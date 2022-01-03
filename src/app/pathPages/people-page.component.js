import { WFMComponent } from "../../framework";

class PeoplePageComponent extends WFMComponent {
    constructor(config) {
        super(config)
    }
}

export const peoplePageComponent = new PeoplePageComponent({
    selector: 'people-page',
    template: 'Nothing to show now about people!'
})