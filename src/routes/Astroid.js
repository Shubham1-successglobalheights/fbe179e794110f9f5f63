import React from 'react';
import {useLocation, useHistory} from 'react-router-dom';

const Astroid = () => {
    const location = useLocation();
    const history = useHistory()
    if(!(location.state && location.state.id)){
        history.push("/")
    }
    const {
        state
    } = location
    const name = state?.name;
    const nasa_jpl_url = state?.nasa_jpl_url;
    const is_potentially_hazardous_asteroid = state?.is_potentially_hazardous_asteroid;
    return(
        <div className="p-5">
            <div className="container">
                <h4 className="pb-5">Astroid Detail</h4>
                <p>
                    <b>Name :</b> {name}
                </p>
                <p>
                    <b>nasa_jpl_url :</b> <a href={nasa_jpl_url} title={nasa_jpl_url} >{nasa_jpl_url}</a>
                </p>
                <p>
                    <b>is_potentially_hazardous_asteroid :</b> {is_potentially_hazardous_asteroid ? <span className="badge badge-success" >True</span> : <span className="badge badge-danger">False</span>}
                </p>
            </div>
        </div>
    );
};

export default Astroid;
