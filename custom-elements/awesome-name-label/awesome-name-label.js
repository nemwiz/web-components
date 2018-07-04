import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `awesome-name-label`
 *
 * @customElement
 * @polymer
 */
class AwesomeNameLabel extends PolymerElement {
    static get template() {
        return html`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: floralwhite;
          height: 100vh;
        }
        
        .title {
            color: cornflowerblue;
        }
        
        .name-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: lightcoral;
            color: navajowhite;
        }
        
        .name-label {
            color: aqua;
        }
        
      </style>
      
      <div>
        <h1 class="title">Webcomponents are awesome!</h1>
      
      
        <div class="name-container">
            <h2>Your</h2>
            <h2>awesome</h2>
            <h2>name</h2>
            <h2>is</h2>
            <h1 class="name-label">[[name]]</h1>
        </div>
      </div>
      
    `;
    }

    static get properties() {
        return {
            name: {
                type: String
            },
        };
    }
}

window.customElements.define('awesome-name-label', AwesomeNameLabel);
