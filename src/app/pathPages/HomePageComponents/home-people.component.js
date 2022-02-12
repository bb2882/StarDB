import { WFMComponent, http } from "../../../framework";

class HomePeopleComponent extends WFMComponent {
    constructor(config) {
        super(config)

        this.data = {
            src: '',
            name: '',
            gender: '',
            height: '',
            mass: '',
            birth: '',
            eye_color: '',
            hair_color: '',
            skin_color: '',
        }
    }

    afterInit() {
        http.get("https://swapi.dev/api/people/")
            .then(response => response.json())
            .then(data => {
                this.fill(data, this.data, 0)
                this.addElements(data, this.data)
            });
    }

    addElements(peopleData, classData) {
        for(let i = 0; i < peopleData.results.length; i++)  {

            let element = document.createElement('div')

            element.innerHTML = peopleData.results[i].name

            element.classList.add('home-people__name')

            document.querySelector('.home-people__names').append(element);

            element.addEventListener('click', () => {
                this.fill(peopleData, classData, i)
                this.addElements(peopleData, classData)
            });

        }
    }

    fill(peopleData, classData, i) {
        classData.src = `https://starwars-visualguide.com/assets/img/characters/${i+1}.jpg`
        classData.name = peopleData.results[i].name
        classData.gender = peopleData.results[i].gender
        classData.height = peopleData.results[i].height
        classData.mass = peopleData.results[i].mass
        classData.birth = peopleData.results[i].birth_year
        classData.eye_color = peopleData.results[i].eye_color
        classData.hair_color = peopleData.results[i].hair_color
        classData.skin_color = peopleData.results[i].skin_color

        this.render()

    }
}

export const homePageComponent = new HomePeopleComponent({
    selector: 'home-people',
    template: `
        <section class="home-people main">
            <div class="home-people__names"></div>

            <div class="home-people__card">
                <img class="home-people__img" src="{{ src }}">

                <div class="home-people__info info">
                    <span class="home-people__title title">{{ name }}</span>
                    <div class="home-people__data data">
                        <span class="home-people__gender">Gender: {{ gender }}</span>
                        <span class="home-people__height">Height: {{ height }}</span>
                        <span class="home-people__mass">Mass: {{ mass }}</span>
                        <span class="home-people__birth">Birth: {{ birth }}</span>
                        <span class="home-people__eye_color">Eye color: {{ eye_color }}</span>
                        <span class="home-people__hair_color">Hair color: {{ hair_color }}</span>
                        <span class="home-people__skin_color">Skin color: {{ skin_color }}</span>
                    </div>
                </div>

            </div>
        </section>
    `
})