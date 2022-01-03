import { WFMComponent } from '../../framework/index'

class NotFound extends WFMComponent {
    constructor(config) {
        super(config)
    }
}

export const notFound = new NotFound({
    selector: 'not-found',
    template: `
        <div class="not-found-block">
            <div>
                <h1>Page Not Found!</h1>
                <a href="#">Go To Home Page</a>
            </div>
        </div>
    `
}) 