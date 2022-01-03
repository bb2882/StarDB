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
        let route = this.routes.find(r => r.path === url)

        if (route == undefined) {
            route = this.routes.find(r => r.path === '**')
        }

        document.querySelector('router-outlet').innerHTML = `<${route.component.selector}></${route.component.selector}>`
        this.renderComponent(route.component)
    }

    renderComponent(c) {
        if (c.onInit != undefined) c.onInit()

        c.render()
        
        if(c.afterInit != undefined) c.afterInit()
    }
    
}