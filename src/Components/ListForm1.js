import axios from "axios";
import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";

function ListForm1() {
    const [state, setState] = useState([]);
    const [currentpage, setCurrentpage] = useState(1);
    const [perpage, setPerpage] = useState(10);
    const [toggle, setToggle] = useState(true);
    const navigate = useNavigate();


    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/photos", {
                params: {
                    _limit: 100,
                },
            })
            .then((res) => {
                setState(res.data);
            });
    }, []);

    const listdata = () => {
        setToggle(true);
    };

    const griddata = () => {
        setToggle(false);
    };
    const paginate = (childValue) => {
        setCurrentpage(childValue);
    };

    const lastindexofuser = currentpage * perpage;
    const firstindexofuser = lastindexofuser - perpage;
    const currentindex = state.slice(firstindexofuser, lastindexofuser);



    const clearlist = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <>

            <button className="btn btn-primary" onClick={listdata}>
                Listform
            </button>

            <button className="btn btn-primary" onClick={griddata}>
                Gridform
            </button>

            {toggle ? (
                <div>
                    <h1>Listform Details</h1>
                    {currentindex.map((ele) => (
                        <ul>
                            <img src={ele.thumbnailUrl} alt="" />
                        </ul>
                    ))}
                </div>
            ) : (
                <div className="container">
                    <h1>Gridform Details</h1>
                    <div class="row">
                        {currentindex.map((ele) => (
                            <div class="col-md-4 my-4">
                                <img src={ele.thumbnailUrl} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <h2 style={{ color: "maroon", fontFamily: "initial" }}>UserList</h2>
            <button onClick={clearlist} className="btn btn-success">
                Logout
            </button>

            <Pagination
                perpage={perpage}
                totaluser={state.length}
                paginate={paginate}
            />
        </>
    );
}

export default ListForm1;

