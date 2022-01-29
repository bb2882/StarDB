(()=>{"use strict";var __webpack_modules__={402:()=>{eval("\n;// CONCATENATED MODULE: ./src/framework/core/module.js\nclass Module {\r\n    constructor(config) {\r\n        this.components = config.components\r\n        this.main = config.main\r\n        this.routes = config.routes\r\n    }\r\n\r\n    start() {\r\n        this.initComponents()\r\n        if (this.routes) this.initRoutes()\r\n    }\r\n\r\n    initComponents() {\r\n        this.main.render()\r\n        this.components.forEach(this.renderComponent.bind(this))\r\n    }\r\n\r\n    initRoutes() {\r\n        window.addEventListener('hashchange', this.renderRoute.bind(this))\r\n        this.renderRoute()\r\n    }\r\n\r\n    renderRoute() {\r\n        let url = window.location.hash.slice(1)\r\n        let route = this.routes.find(r => r.path === url)\r\n\r\n        if (route == undefined) {\r\n            route = this.routes.find(r => r.path === '**')\r\n        }\r\n\r\n        document.querySelector('router-outlet').innerHTML = `<${route.component.selector}></${route.component.selector}>`\r\n        this.renderComponent(route.component)\r\n    }\r\n\r\n    renderComponent(c) {\r\n        if (c.onInit != undefined) c.onInit()\r\n\r\n        c.render()\r\n        \r\n        if(c.afterInit != undefined) c.afterInit()\r\n    }\r\n    \r\n}\n;// CONCATENATED MODULE: ./src/framework/core/component.js\nclass Component {\r\n    constructor(config) {\r\n        this.selector = config.selector\r\n        this.template = config.template\r\n        this.el = null\r\n    }\r\n\r\n    render() {\r\n        this.el = document.querySelector(this.selector)\r\n        if(!this.el) throw new Error(`Component with selector ${this.selector} wasn't found!`)\r\n\r\n        this.el.innerHTML = compileTemplate(this.template, this.data)\r\n    }\r\n}\r\n\r\nfunction compileTemplate(template, data) {\r\n    if (data == undefined) return template\r\n    let regex = /\\{{(.*?)}}/g\r\n\r\n    template = template.replace(regex, (str, d) => {\r\n        let key = d.trim()\r\n        return data[key]\r\n    })\r\n\r\n    return template\r\n}\n;// CONCATENATED MODULE: ./src/framework/core/start.js\nfunction start(module) {\r\n    module.start()\r\n}\n;// CONCATENATED MODULE: ./src/framework/tools/util.js\nconst wfm = {\r\n    delay(ms = 1000) {\r\n        return new Promise ((resolve, reject) => {\r\n            setTimeout(() => {\r\n                resolve()\r\n            }, ms)\r\n        })\r\n    }\r\n}\r\n\r\n\n;// CONCATENATED MODULE: ./src/framework/tools/http.js\nclass Http {\r\n    get(url) {\r\n        return sendRequest('GET', url)\r\n    }\r\n}\r\n\r\nfunction sendRequest(method, url) {\r\n    return fetch(url, {method})\r\n}\r\n\r\nconst http = new Http()\n;// CONCATENATED MODULE: ./src/framework/index.js\n\r\n\r\n\r\n\r\n\r\n\r\n\n;// CONCATENATED MODULE: ./src/app/app.component.js\n\r\n\r\nclass AppComponent extends Component {\r\n    constructor(config) {\r\n        super(config)\r\n    }\r\n}\r\n\r\nconst appComponent = new AppComponent({\r\n    selector: 'app-root',\r\n    template: `\r\n        <header class=\"header main\"></header>\r\n        <planets class=\"planets main\"></planets>\r\n\r\n        <router-outlet class=\"router-outlet\"></router-outlet>\r\n        <not-found class=\"not-found\"></not-found>\r\n    `\r\n})\n;// CONCATENATED MODULE: ./src/app/pathPages/home-page.component.js\n\r\n\r\nclass HomePageComponent extends Component {\r\n    constructor(config) {\r\n        super(config)\r\n\r\n        this.data = {\r\n            src: '',\r\n            name: '',\r\n            gender: '',\r\n            height: '',\r\n            mass: '',\r\n            birth: '',\r\n            eye_color: '',\r\n            hair_color: '',\r\n            skin_color: '',\r\n        }\r\n    }\r\n\r\n    afterInit() {\r\n        http.get(\"https://swapi.dev/api/people/\")\r\n            .then(response => response.json())\r\n            .then(data => {\r\n                console.log(data)\r\n                this.fill(data, this.data, 0)\r\n                this.addElements(data, this.data)\r\n            });\r\n    }\r\n\r\n    addElements(peopleData, classData) {\r\n        for(let i = 0; i < peopleData.results.length; i++)  {\r\n\r\n            let element = document.createElement('div')\r\n\r\n            element.innerHTML = peopleData.results[i].name\r\n\r\n            element.classList.add('people__name')\r\n\r\n            document.querySelector('.people__names').append(element);\r\n\r\n            element.addEventListener('click', () => {\r\n                this.fill(peopleData, classData, i)\r\n                this.addElements(peopleData, classData)\r\n            });\r\n\r\n        }\r\n    }\r\n\r\n    fill(peopleData, classData, i) {\r\n        classData.src = `https://starwars-visualguide.com/assets/img/characters/${i+1}.jpg`\r\n        classData.name = peopleData.results[i].name\r\n        classData.gender = peopleData.results[i].gender\r\n        classData.height = peopleData.results[i].height\r\n        classData.mass = peopleData.results[i].mass\r\n        classData.birth = peopleData.results[i].birth\r\n        classData.eye_color = peopleData.results[i].eye_color\r\n        classData.hair_color = peopleData.results[i].hair_color\r\n        classData.skin_color = peopleData.results[i].skin_color\r\n\r\n        this.render()\r\n        \r\n    }\r\n}\r\n\r\nconst homePageComponent = new HomePageComponent({\r\n    selector: 'home-page',\r\n    template: `\r\n        <section class=\"people main\">\r\n            <div class=\"people__names\"></div>\r\n\r\n            <div class=\"people__card\">\r\n                <img class=\"people__img\" src=\"{{ src }}\">\r\n\r\n                <div class=\"people__info info\">\r\n                    <span class=\"people__title name\">{{ name }}</span>\r\n                    <div class=\"people__data data\">\r\n                        <span class=\"people__gender\">Gender: {{ gender }}</span>\r\n                        <span class=\"people__height\">Height: {{ height }}</span>\r\n                        <span class=\"people__mass\">Mass: {{ mass }}</span>\r\n                        <span class=\"people__birth\">Birth: {{ birth }}</span>\r\n                        <span class=\"people__eye_color\">Eye color: {{ eye_color }}</span>\r\n                        <span class=\"people__hair_color\">Hair color: {{ hair_color }}</span>\r\n                        <span class=\"people__skin_color\">Skin color: {{ skin_color }}</span>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </section>\r\n    `\r\n})\n;// CONCATENATED MODULE: ./src/app/pathPages/people-page.component.js\n\r\n\r\nclass PeoplePageComponent extends Component {\r\n    constructor(config) {\r\n        super(config)\r\n    }\r\n}\r\n\r\nconst peoplePageComponent = new PeoplePageComponent({\r\n    selector: 'people-page',\r\n    template: 'Nothing to show now about people!'\r\n})\n;// CONCATENATED MODULE: ./src/app/pathPages/planets-page.component.js\n\r\n\r\nclass PlanetsPageComponent extends Component {\r\n    constructor(config) {\r\n        super(config)\r\n    }\r\n}\r\n\r\nconst planetsPageComponent = new PlanetsPageComponent({\r\n    selector: 'planets-page',\r\n    template: 'Nothing to show now about planets!'\r\n})\n;// CONCATENATED MODULE: ./src/app/pathPages/starships-page.component.js\n\r\n\r\nclass StarshipsPageComponent extends Component {\r\n    constructor(config) {\r\n        super(config)\r\n    }\r\n}\r\n\r\nconst starshipsPageComponent = new StarshipsPageComponent({\r\n    selector: 'starships-page',\r\n    template: 'Nothing to show now about starships!'\r\n})\n;// CONCATENATED MODULE: ./src/app/common/not-found.component.js\n\r\n\r\nclass NotFound extends Component {\r\n    constructor(config) {\r\n        super(config)\r\n    }\r\n}\r\n\r\nconst notFound = new NotFound({\r\n    selector: 'not-found',\r\n    template: `\r\n        <div class=\"not-found-block\">\r\n            <div>\r\n                <h1>Page Not Found!</h1>\r\n                <a href=\"#\">Go To Home Page</a>\r\n            </div>\r\n        </div>\r\n    `\r\n}) \n;// CONCATENATED MODULE: ./src/app/app.routes.js\n\r\n\r\n\r\n\r\n\r\n\r\nconst appRoutes = [\r\n    { path: '', component: homePageComponent },\r\n    { path: 'people', component: peoplePageComponent },\r\n    { path: 'planets', component: planetsPageComponent },\r\n    { path: 'starships', component: starshipsPageComponent },\r\n    { path: '**', component: notFound}\r\n]\n;// CONCATENATED MODULE: ./src/app/common/app.header.js\n\r\n\r\nclass AppHeader extends Component {\r\n    constructor(config) {\r\n        super(config)\r\n    }\r\n}\r\n\r\nconst appHeader = new AppHeader({\r\n    selector: 'header',\r\n    template: `\r\n        <div class=\"header__links\">\r\n            <a href=\"#\" class=\"header__link special\">StarDB</a>\r\n            <a href=\"#people\" class=\"header__link\">People</a>\r\n            <a href=\"#planets\" class=\"header__link\">Planets</a>\r\n            <a href=\"#starships\" class=\"header__link\">Starships</a>\r\n        </div>\r\n    `\r\n}) \n;// CONCATENATED MODULE: ./src/app/common/app.planets.js\n\r\n\r\nclass AppPlanets extends Component {\r\n    constructor(config) {\r\n        super(config)\r\n\r\n        this.data = {\r\n            name: '',\r\n            population: '',\r\n            rotation: '',\r\n            diameter: '',\r\n            src: '',\r\n        }\r\n    }\r\n\r\n    afterInit() {\r\n        http.get(\"https://swapi.dev/api/planets/\")\r\n            .then(response => response.json())\r\n            .then(data => {\r\n                let i = 2\r\n                this.fill(data, 1)\r\n\r\n                setInterval(() =>  {\r\n                        if ( i == data.results.length ) i = 1\r\n\r\n                        this.fill(data, i)\r\n\r\n                        i++\r\n                }, 4000)\r\n            });\r\n    }\r\n\r\n    fill(data, i) {\r\n        this.data.name = data.results[i].name\r\n        this.data.population = data.results[i].population\r\n        this.data.rotation = data.results[i].rotation_period\r\n        this.data.diameter = data.results[i].diameter\r\n        this.data.src = `https://starwars-visualguide.com/assets/img/planets/${i+1}.jpg`\r\n        \r\n        this.render()\r\n    }\r\n}\r\n\r\nconst appPlanets = new AppPlanets({\r\n    selector: 'planets',\r\n    template: `\r\n        <img class=\"planets__img\" src='{{ src }}'>\r\n        <div class=\"planets__info info\">\r\n            <span class=\"planets__name name\">{{ name }}</span>\r\n            <div class=\"planets__data data\">\r\n                <span class=\"planets__population\">Population: {{ population }}</span>\r\n                <span class=\"planets__rotation\">Rotation Period: {{ rotation }}</span>\r\n                <span class=\"planets__diameter\">Diameter: {{ diameter }}</span>\r\n            </div>\r\n        </div>\r\n    `\r\n}) \n;// CONCATENATED MODULE: ./src/app/app.module.js\n\r\n\r\n\r\n\r\n\r\n\r\nclass AppModule extends Module {\r\n    constructor(config) {\r\n        super(config)\r\n    }\r\n}\r\n\r\nconst appModule = new AppModule({\r\n    components: [\r\n        appHeader,\r\n        appPlanets\r\n    ],\r\n\r\n    main: appComponent,\r\n    routes: appRoutes\r\n})\n;// CONCATENATED MODULE: ./src/index.js\n\r\n\r\n\r\n\r\nwfm.delay(2000).then(() => {\r\n    start(appModule)\r\n})\n\n//# sourceURL=webpack://stardb/./src/index.js_+_16_modules?")}},__webpack_exports__={};__webpack_modules__[402]()})();