import { WFMComponent, http } from '../../framework/index'

class AppPlanets extends WFMComponent {
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
                let i = 2
                this.fill(data, 1)

                setInterval(() =>  {
                        if ( i == data.results.length ) i = 1

                        this.fill(data, i)

                        i++
                }, 4000)
            });
    }

    fill(data, i) {
        this.data.name = data.results[i].name
        this.data.population = data.results[i].population
        this.data.rotation = data.results[i].rotation_period
        this.data.diameter = data.results[i].diameter
        this.data.src = `https://starwars-visualguide.com/assets/img/planets/${i+1}.jpg`
        
        this.render()
    }
}

export const appPlanets = new AppPlanets({
    selector: 'planets',
    template: `
        <img class="planets__img" src='{{ src }}'>
        <div class="planets__info info">
            <span class="planets__name title">{{ name }}</span>
            <div class="planets__data data">
                <span class="planets__population">Population: {{ population }}</span>
                <span class="planets__rotation">Rotation Period: {{ rotation }}</span>
                <span class="planets__diameter">Diameter: {{ diameter }}</span>
            </div>
        </div>
    `
}) 