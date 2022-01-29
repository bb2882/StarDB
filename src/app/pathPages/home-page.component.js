import { WFMComponent, http } from "../../framework";

class HomePageComponent extends WFMComponent {
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

            element.classList.add('people__name')

            document.querySelector('.people__names').append(element);

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

export const homePageComponent = new HomePageComponent({
    selector: 'home-page',
    template: `
        <section class="people main">
            <div class="people__names"></div>

            <div class="people__card">
                <img class="people__img" src="{{ src }}">

                <div class="people__info info">
                    <span class="people__title name">{{ name }}</span>
                    <div class="people__data data">
                        <span class="people__gender">Gender: {{ gender }}</span>
                        <span class="people__height">Height: {{ height }}</span>
                        <span class="people__mass">Mass: {{ mass }}</span>
                        <span class="people__birth">Birth: {{ birth }}</span>
                        <span class="people__eye_color">Eye color: {{ eye_color }}</span>
                        <span class="people__hair_color">Hair color: {{ hair_color }}</span>
                        <span class="people__skin_color">Skin color: {{ skin_color }}</span>
                    </div>
                </div>

            </div>
        </section>
    `
})