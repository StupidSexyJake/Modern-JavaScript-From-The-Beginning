const PageState = function() {
    let currentState = new homeState(this);

    this.init = function() {
        this.change(new homeState);
    }

    this.change = function(state) {
        currentState = state;
    }
};

// Home state
const homeState = function(page) {
    document.getElementById("heading").textContent = null;
    document.getElementById("content").innerHTML = `
        <div class="jumbotron">
        <h1 class="display-3">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
    </div>
    `;
};

// About state
const aboutState = function(page) {
    document.getElementById("heading").textContent = "About Us";
    document.getElementById("content").innerHTML = `
        <p>This is the about page</p>
    `;
}

// Contact state
const contactState = function(page) {
    document.getElementById("heading").textContent = "About Us";
    document.getElementById("content").innerHTML = `
        <form>
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control">
            </div>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    `;
};

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// UI variables
const el_home       = document.getElementById("home"),
      el_about      = document.getElementById("about"),
      el_contact    = document.getElementById("contact");

// Event listeners
home.addEventListener("click", (e) => {
    page.change(new homeState);
    e.preventDefault();
});
about.addEventListener("click", (e) => {
    page.change(new aboutState);
    e.preventDefault();
});
contact.addEventListener("click", (e) => {
    page.change(new contactState);
    e.preventDefault();
});