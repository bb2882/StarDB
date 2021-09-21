import HeaderLinks from "./header__links";

export default class HeaderLayout {
    constructor(parent) {
        this.parent = parent;

        this.parent.innerHTML = this.render();
        let header = document.querySelector('.header')
        console.log(header)
        new HeaderLinks(header)
    }

    render() {
        return `
            <div class="header">
            </div>
        `
    }
}