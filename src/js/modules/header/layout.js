import HeaderLinks from "./header__links";

export default class HeaderLayout {
    constructor() {
        this.parent = document.querySelector('.main');

        this.parent.innerHTML = this.render();
        let header = document.querySelector('.header')
        new HeaderLinks(header)
    }

    render() {
        return `
            <div class="header">
            </div>
        `
    }
}