import ApiFacade from '../facade/ApiFacade';

//const URL = 'https://williamhuusfeldt.dk/softwarezoid/api/';

function BasketFacade() {

    const getData = () => {
        return ApiFacade.fetchData();
    }

    const getBasket = (invoiceData) => {
        var basketData = invoiceData === undefined ? localStorage.getItem("basket") : invoiceData;

        return getData().then(res => {
            var items = [];
            if (basketData != null) {
                const basket = JSON.parse(basketData);
                basket.forEach(e => {
                    // eslint-disable-next-line
                    let product = res.find(p => p.id == e.id);
                    if (product !== undefined) {
                        items.push({ product: product, qty: e.qty });
                    }
                });
            }
            return items;
        });
    }

    const getTotalPrice = (invoiceData) => {
        var basketData = invoiceData === undefined ? localStorage.getItem("basket") : invoiceData;

        return getData().then(res => {
            let totalPrice = 0;
            if (basketData != null) {
                const basket = JSON.parse(basketData);
                basket.forEach(e => {
                    // eslint-disable-next-line
                    let product = res.find(p => p.id == e.id);
                    if (product !== undefined) {
                        totalPrice += product.price * e.qty;
                    }
                });
            }
            return (totalPrice / 100).toLocaleString(navigator.language, { minimumFractionDigits: 2 });
        });
    }

    return {
        getData,
        getBasket,
        getTotalPrice
    }
}

export default BasketFacade();