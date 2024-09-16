import { version } from "../version";

export class VersionComponent extends HTMLElement {
    private readonly label = "<em>Current Version: </em>";

    constructor() {
        super();
        console.log('version comp ctor');
    }

    connectedCallback() {
        this.render();
        console.log('render called');
    }

    render() {
        this.innerHTML = `
            <div>
                <div id="versionLabel">
                    ${this.label}
                </div>
                <div class="version-value">
                    ${version}
                </div>
            <div>
        `;
    }
}

