import HeaderLinks from "./links";

export default class HeaderLayout {
    constructor(parent) {
        this.parent = parent;

        this.parent.innerHTML = this.render();
        let header = document.querySelector('.header')
        new HeaderLinks(header)
    }

    render() {
        return `
            <div class="header">
                ${new HeaderLinks()}
            </div>
        `
    }
}