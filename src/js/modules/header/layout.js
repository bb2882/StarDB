class HeaderLayout {
    constructor(parent) {
        this.parent = parent;

        this.parent.innerHTML = this.render();
    }

    render() {
        return `
            <div class="header">
                <div class="header__links">
                    <div class="header__link header__logo">StarDB</div>
                    <div class="header__link">People</div>
                    <div class="header__link">Planets</div>
                    <div class="header__link">Starships</div>
                </div>
            </div>
        `
    }
}

export default HeaderLayout;