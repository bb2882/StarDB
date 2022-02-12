export class Module {
    constructor(config) {
        this.components = config.components
        this.main = config.main
        this.routes = config.routes
    }

    start() {
        this.initComponents()
        if (this.routes) this.initRoutes()
    }

    initComponents() {
        this.main.render()
        this.components.forEach(this.renderComponent.bind(this))
    }

    initRoutes() {
        window.addEventListener('hashchange', this.renderRoute.bind(this))
        this.renderRoute()
    }

    renderRoute() {
        let url = window.location.hash.slice(1)
        let routes = []
        routes.push(this.routes.filter(r => r.path === url))
        // console.log(routes)

        if (routes === undefined) {
            routes = this.routes.filter(r => r.path === '**')
        }

        for(let i = 0; i < routes[0].length; i++) {
            document.querySelector('router-outlet').innerHTML += `<${routes[0][i].component.selector}></${routes[0][i].component.selector}>`
            this.renderComponent(routes[0][i].component)
            // console.log(document.querySelector('router-outlet'))
        }

    }

    renderComponent(c) {
        if (c.onInit != undefined) c.onInit()

        c.render()

        if(c.afterInit != undefined) c.afterInit()
    }
    
}