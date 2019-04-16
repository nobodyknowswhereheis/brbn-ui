class textInput extends HTMLElement {
    constructor() {
        super();        
    }
    connectedCallback() {
        // define element style
        let style = `
        div{
            margin: 1rem;
        }
        .input{
            margin:.25em;
            padding:.25em;
        }
        .input:focus{
            outline-color: var(--primary-component-outline);
            outline-width: thin;
        }

          label{
            display: inline-block;
            margin-bottom: .5rem;
          }
          .form-control{
            width: 75%;
            padding: .5rem .75rem;
            font-size: 1rem;
            line-height: 1.25;
            color: #55595c;
            background-color: #fff;
            background-image: none;
            -webkit-background-clip: padding-box;
            background-clip: padding-box;
            border: 1px solid rgba(16, 18, 19, 0.15);
          }
        `
        // get attributes
        this.elem_id = "input1";
        this.label = "undefined";
        this._value = this.getAttribute('value');
        this.onChangeHandler = this.getAttribute('_onChange');
        this.valueChangeCallback = function(name,oldVal,newVal){
            console.log("Change detected!");
            //this.onChangeHandler();
            this.dispatchEvent(new CustomEvent('field_updated', { name: name, oldVal:oldVal, newVal:newVal  }));
        };

        // build shadow DOM
        const shadowRoot= this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `<style>${style}</style>
        <div >
            <span>${this.label}</span><input class="input form-control" type="text" id=${this.elem_id} name="test" value=${this._value} onchange="${this.valueChangeCallback()}">
        </div>`;
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        const attribute = attr.toLowerCase()
        console.log(newVal)
    }

}
customElements.define('text-input', textInput);;