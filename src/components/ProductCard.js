import React from 'react';
import "./test.css";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";


function ProductCard({ product }) {
    return (
        <>
            <div className="col">
                <div className="shadow card" style={{ width: "20rem" }}>
                    <div className="card-body" style={{ height: "18rem" }}>
                        <img className='rounded float-center img-fluid' style={{ width: '100%', height: '100%' }} src={product.imgUrl} alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-2 d-flex align-items-center">
                                    <div className="text-success"><GiTakeMyMoney size={25} /></div>
                                </div>
                                <div className="col-4 border-end">
                                    <div className="row">
                                        <div className="text-10 text-success">CurrentBid</div>
                                        <div>${product.currentBid}</div>
                                    </div>
                                </div>
                                <div className="col-2 d-flex align-items-center">
                                    <div className="text-danger"><MdAttachMoney size={25} /></div>
                                </div>
                                <div className="col-4">
                                    <div className="row">
                                        <div className="text-10 text-danger">Buynow</div>
                                        <div>${product.buyNow}</div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-8 border-end text-center text-danger">{product.countDown}</div>
                                <div className="col-4 text-center text-success">{product.bitAmount} bid(s)</div>
                            </div>
                        </li>

                    </ul>

                    <div className="card-body d-grid gap-2 col-lg-8 mx-auto text-center">
                        <button className="btn btn-primary rounded-pill bg-gradient" type="button">
                            <a href={"./"} className="text-decoration-none text-light">Submit A Bid</a>
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ProductCard;