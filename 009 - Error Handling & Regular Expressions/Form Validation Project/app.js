// Form blur event listeners
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("postcode").addEventListener("blur", validatePostcode);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);

function validateName() {
    const el_name = document.getElementById("name");
    const re = /^[a-zA-Z]{2,10}$/;

    if (!re.test(el_name.value)) {
        el_name.classList.add("is-invalid");
    } else {
        el_name.classList.remove("is-invalid");
    }
}

function validatePostcode() {
    const el_postcode = document.getElementById("postcode");
    const re = /^[0-9]{4}$/;

    if (!re.test(el_postcode.value)) {
        el_postcode.classList.add("is-invalid");
    } else {
        el_postcode.classList.remove("is-invalid");
    }
}

function validateEmail() {
    const el_email = document.getElementById("email");
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (!re.test(el_email.value)) {
        el_email.classList.add("is-invalid");
    } else {
        el_email.classList.remove("is-invalid");
    }
}

function validatePhone() {
    const el_phone = document.getElementById("phone");
    const re = /^\(?\d{2}\)?[-. ]?\d{4}[-. ]?\d{4}$/;

    if (!re.test(el_phone.value)) {
        el_phone.classList.add("is-invalid");
    } else {
        el_phone.classList.remove("is-invalid");
    }
}