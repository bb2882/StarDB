import { WFMComponent, http } from "../../framework";

class HomePageComponent extends WFMComponent {
    constructor(config) {
        super(config)

        this.data = {
            name: '',
            population: '',
            rotation: '',
            diameter: '',
            src: '',
        }
    }

    afterInit() {
        http.get("https://swapi.dev/api/planets/")
            .then(response => response.json())
            .then(data => {
                this.insertion(data, 1)
                let i = 2
                setInterval(() =>  {
                    if ( i == data.results.length ) i = 1

                    this.insertion(data, i)

                    i++
                }, 5000)
            });
    }

    insertion(data, i) {
        this.data.name = data.results[i].name
        this.data.population = data.results[i].population
        this.data.rotation = data.results[i].rotation_period
        this.data.diameter = data.results[i].diameter
        this.data.src = `https://starwars-visualguide.com/assets/img/planets/${i+1}.jpg`
        this.render()
    }
    
}

export const homePageComponent = new HomePageComponent({
    selector: 'home-page',
    template: `
        <div class="planet">
            <img class="planet__img" src='{{ src }}'>
            <div class="planet__info">
                <span class="planet__name">{{ name }}</span>
                <div class="planet__data">
                    <span class="planet__population">Population: {{ population }}</span>
                    <span class="planet__rotation">Rotation Period: {{ rotation }}</span>
                    <span class="planet__diameter">Diameter: {{ diameter }}</span>
                </div>
            </div>
        </div>
    `
})