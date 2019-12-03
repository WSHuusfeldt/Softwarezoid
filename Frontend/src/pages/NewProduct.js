import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Facade from '../login/ApiFacade';

const New = () => {

    const initialValue = {
        title: "",
        description: "",
        price: "",
        thumbnail: "",
        spec: "",
        category: ""
    };

    const [product, setProduct] = useState(initialValue);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        Facade.fetchCategoryAll().then(res => setCategory(res))
    }, [])

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setProduct({ ...product, [name]: value });
    }

    const handleSubmit = event => {
        event.preventDefault();
        Facade.addProduct(product.title, product.description, product.price, product.thumbnail, product.spec, product.category);
        setProduct(initialValue);
    };


    return (
        <main className="mt-1 pt-1">
            <section className="cta contact-wrap " id="contact" >
                <div className="container-fluid col" >
                    <div className="col-xl  ">
                        <div className="cta-inner text-center rounded">
                            <h2 className="section-heading mb-4">
                                <span className="section-heading-upper">Add a new product</span>
                            </h2>
                            <div className="contactForm contactPage">
                                <form className="row">
                                    <label className="inp col-md-6">
                                        <input type="text" name="title"
                                            value={product.title}
                                            onChange={handleChange}
                                            placeholder="&nbsp;" />
                                        <span className="label">Title</span>
                                        <span className="border"></span>
                                    </label>

                                    <label className="inp col-md-6">
                                        <input type="text" name="description" id="inp"
                                            value={product.description}
                                            onChange={handleChange}
                                            placeholder="&nbsp;" />
                                        <span className="label">Description</span>
                                        <span className="border"></span>
                                    </label>

                                    <label className="inp col-md-6">
                                        <input
                                            type="text"
                                            name="price"
                                            id="inp"
                                            value={product.price}
                                            onChange={handleChange}
                                            placeholder="&nbsp;" />
                                        <span className="label">Price</span>
                                        <span className="border"></span>
                                    </label>
                                    <label className="inp col-md-6">
                                        <input
                                            type="text"
                                            name="thumbnail"
                                            id="inp"
                                            value={product.thumbnail}
                                            onChange={handleChange}
                                            placeholder="&nbsp;" />
                                        <span className="label">Thumbnail</span>
                                        <span className="border"></span>
                                    </label>


                                    <div className="col">
                                        <div className="row">
                                            <div className="col">
                                                <label className="inp col-md-7">
                                                    <input type="text" name="spec" id="inp" value={product.spec} onChange={handleChange} placeholder="&nbsp;" />
                                                    <span className="label">Spec</span>
                                                    <span className="border"></span>
                                                </label>
                                                <input type="submit" name="submit" value="Remove" /*onClick={handleSubmit}*/ className="btn-danger btn-sm btn" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <div className="col-md-16">
                                                    <input type="submit" name="submit" value="Add new spec" /*onClick={handleSubmit}*/ className="btn-zoid btn " />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="btn-group">

                                            <select className="btn-zoid" name="category" value={product.category} onChange={handleChange}>
                                                {category.map(category =>
                                                    <option key={category.id} value={category.name}>{category.name}</option>
                                                )}
                                            </select>


                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <input type="submit" name="submit" value="Add software" onClick={handleSubmit} className="btn-zoid btn" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}

export default New;


