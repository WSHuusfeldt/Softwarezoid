const URL = 'https://williamhuusfeldt/softwarezoid';

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function ApiFacade() {
  //Insert utility-methods from a latter step (d) here
  const setToken = token => {
    localStorage.setItem('jwtToken', token);
  };
  const getToken = () => {
    return localStorage.getItem('jwtToken');
  };
  const loggedIn = () => {
    const loggedIn = getToken() != null;
    return loggedIn;
  };
  const logout = () => {
    localStorage.removeItem('jwtToken');
  };

  const makeOptions = (method, addToken, body) => {
    var opts = {
      method: method,
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      }
    };
    if (addToken && loggedIn()) {
      opts.headers['x-access-token'] = getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };

  const login = (user, pass) => {
    const options = makeOptions('POST', true, { username: user, password: pass });
    return fetch(URL + '/api/login', options)
      .then(handleHttpErrors)
      .then(res => {
        setToken(res.token);
      });
  };

  const fetchUser = () => {
    const options = makeOptions('GET', true); //True add's the token
    return fetch(URL + '/api/info/user', options).then(handleHttpErrors);
  };

  const fetchData = () => {
    return fetch('http://localhost:8080/softwarezoid/api/software/all', makeOptions('GET')).then(handleHttpErrors);
  };

  function fetchProducts(key) {
    const products = [
      {
        id: 1,
        thumbnail: 'http://placehold.it/120x80',
        title: 'Netbeans',
        description: 'Netbeans',
        price: 25
      }, {
        id: 2,
        thumbnail: 'http://placehold.it/120x80',
        title: 'VS Code',
        description: 'Visual Studio',
        price: 35
      }, {
        id: 3,
        thumbnail: 'http://placehold.it/120x80',
        title: 'Product Name 3',
        description: 'Product description',
        price: 10
      }, {
        id: 4,
        thumbnail: 'http://placehold.it/120x80',
        title: 'Product Name 4',
        description: 'Product description',
        price: 5,
      }];

    return products.find(p => p.id == key);
  }

  return {
    login,
    logout,
    fetchUser,
    fetchData,
    fetchProducts
  };


}



export default ApiFacade();
