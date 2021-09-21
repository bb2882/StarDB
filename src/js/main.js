import HeaderLayout from "./modules/header/layout";

export default class Main {
    constructor() {
        this.main = document.querySelector('.main');
        new HeaderLayout(this.main);
    }
}
