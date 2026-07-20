class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    get src() {
        return this.getAttribute("src");
    }

    set src(value) {
        this.setAttribute("src", value)
    }

    get title() {
        return this.getAttribute("title");
    }

    set title(value) {
        this.setAttribute("title", value)
    }

    get price() {
        return this.getAttribute("price");
    }

    set price(value) {
        this.setAttribute("price", value)
    }

    static get observedAttributes() {
        return ["src", "title", "price"]
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = `
            <link rel="stylesheet" href="../global.css">
            <link rel="stylesheet" href="./productCard.css">

            <div class='card'>
                <img class='image' src='${this.src}'>
                <h3>${this.title}</h3>
                <p>${this.price}</p>
            </div>
        `;
    }
}

customElements.define('product-card', ProductCard);