const URLs = {
    "Home": "/",
    "Login": "/login",
    "Products": "/products",
    "ProductId": "/product",
    "Data": "/data",
    "Contact": "/contact",
    "InquiryDetails": "/inquiry",
    "About": "/about",
    "FAQ": "/faq",
    "Basket": "/cart",
    "Checkout": "/checkout",
    "Inquiry": "/inquiries",
    "NoMatch": "*"
}

function URLSettings() {
    const getURL = (key, param = null) => { return URLs[key] + (param !== null ? "/:" + param : "") }

    return {
        getURL
    }
}
export default URLSettings();


