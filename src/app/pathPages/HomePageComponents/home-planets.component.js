import { WFMComponent, http } from "../../../framework";

class HomePageComponent1 extends WFMComponent {
    constructor(config) {
        super(config)

        this.data = {
            src: '',
            name: '',
            climate: '',
            diameter: '',
            gravity: '',
            orbital_period: '',
            population: '',
            rotation_period: '',
            terrain: '',
        }
    }

    afterInit() {
        http.get("https://swapi.dev/api/planets/")
            .then(response => response.json())
            .then(data => {
                this.fill(data, this.data, 0)
                this.addElements(data, this.data)
            });
    }

    addElements(planetsData, classData) {
        for(let i = 0; i < planetsData.results.length; i++)  {
            let element = document.createElement('div')

            element.innerHTML = planetsData.results[i].name

            element.classList.add('home-planets__name')

            document.querySelector('.home-planets__names').append(element);

            element.addEventListener('click', () => {
                this.fill(planetsData, classData, i)
                this.addElements(planetsData, classData)
            });

        }
    }

    fill(planetsData, classData, i) {
        classData.src = `https://starwars-visualguide.com/assets/img/planets/${i+1}.jpg`
        classData.name = planetsData.results[i].name
        classData.climate = planetsData.results[i].climate
        classData.diameter = planetsData.results[i].diameter
        classData.gravity = planetsData.results[i].gravity
        classData.orbital_period = planetsData.results[i].orbital_period
        classData.population = planetsData.results[i].population
        classData.rotation_period = planetsData.results[i].rotation_period
        classData.terrain = planetsData.results[i].terrain

        this.render()

    }
}

export const homePageComponent1 = new HomePageComponent1({
    selector: 'home-planets',
    template: `
        <section class="home-planets main">
            <div class="home-planets__names"></div>

            <div class="home-planets__card">
                <img class="home-planets__img" src="{{ src }}">

                <div class="home-planets__info info">
                    <span class="home-planets__title name title">{{ name }}</span>
                    <div class="home-planets__data data">
                        <span class="home-planets__climate">Climate: {{ climate }}</span>
                        <span class="home-planets__diameter">Diameter: {{ diameter }}</span>
                        <span class="home-planets__gravity">Gravity: {{ gravity }}</span>
                        <span class="home-planets__orbital_period">Orbital Period: {{ orbital_period }}</span>
                        <span class="home-planets__population">Population: {{ population }}</span>
                        <span class="home-planets__rotation_period">Rotation Period: {{ rotation_period }}</span>
                        <span class="home-planets__terrain">Terrain: {{ terrain }}</span>
                    </div>
                </div>

            </div>
        </section>
    `
})