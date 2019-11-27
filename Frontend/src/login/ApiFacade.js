const URL = 'https://williamhuusfeldt.dk/softwarezoid/api/';
//const URL = 'http://localhost:8080/softwarezoid/api/';

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
    const options = makeOptions('POST', { username: user, password: pass });
    return fetch(URL + '/api/login', options)
      .then(handleHttpErrors)
      .then(res => {
        setToken(res.token);
      });
  };

  const addContact = (fullName, email, phone, subject, message) => {
    const options = makeOptions('POST', true, { fullName: fullName, email: email, phone: phone, subject: subject, message: message });
    return fetch(URL + 'contacts/add', options).then(handleHttpErrors);
  }
  
  const fetchContacts = () => {
    return fetch('http://localhost:8080/softwarezoid/api/contacts/all', makeOptions('GET')).then(handleHttpErrors);
  }

  const createReview = (description, name, imgUrl, rating, softwareId) => {
    const options = makeOptions('POST', true, { name: name, imgUrl: imgUrl, date: "2019-11-26T12:33:09.625Z", rating: rating, description: description, softwareId: softwareId });
    return fetch(URL + 'review/add', options).then(handleHttpErrors);
  }


  const fetchUser = () => {
    const options = makeOptions('GET', true); //True add's the token
    return fetch(URL + '/api/info/user', options).then(handleHttpErrors);
  };

  const fetchData = () => {
    return fetch(URL + 'software/all', makeOptions('GET')).then(handleHttpErrors);
  };

  const fetchReviews = (key) => {
    return fetch(URL + 'review/get/' + key, makeOptions('GET')).then(handleHttpErrors);

  };

  const fetchSingleProduct = (key) => {
    return fetch(URL + 'software/' + key, makeOptions('GET')).then(handleHttpErrors);
  };

  const fetchCategoryAll = () => {
    return fetch(URL + 'category/all', makeOptions('GET')).then(handleHttpErrors);
  };
  
  const fetchSingleContact = (key) => {
    return fetch(URL + 'contacts/' + key, makeOptions('GET')).then(handleHttpErrors);
  };


  const fetchSoftwareByCategory = (ids) => {
    return fetch(URL + 'software/all/' + ids, makeOptions('GET')).then(handleHttpErrors);
  };

  return {
    login,
    logout,
    fetchUser,
    fetchData,
    fetchSingleProduct,
    fetchSingleContact,
    fetchReviews,
    addContact,
    createReview,
    fetchCategoryAll,
    fetchSoftwareByCategory,
    fetchContacts
  };


}



export default ApiFacade();
