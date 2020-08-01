import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';
import { loginApi, randomAstroidApi } from '../services/api';

function Login() {
    const [asteroidId, setAsteroidId] = useState("");
    const [randomIds, setRandomIds] = useState([]);
    const history = useHistory()
    const onSubmit = (e) => {
        e.preventDefault()
        loginAstroid(asteroidId)
    }
    const randomAsteroid = () => {
        randomAstroidApi().then(res => {
            console.log(res.data)
            const {near_earth_objects} = res.data
            setRandomIds(near_earth_objects.map(item => item.id))
        }).catch(console.error)
    };
    const loginAstroid = (id) => {
        loginApi(id).then(res => {
            history.push('/astroid', {
                ...res.data
            })
        }).catch(err => {
            console.error(err)
            alert("invalid id")
            setAsteroidId("")
        })
    };
    return (
        <div>
            <div className="container">
                <div className="row pt-5 ">
                    {randomIds.length > 0 ? <>
                    <div className="col-12 mb-3">
                        <h4>Select Astroid Id</h4>
                    </div>
                    {
                        randomIds.map((item)=> {
                            return (
                                <div key={item} className="col-sm-3 mb-3">
                                    <button className="btn btn-primary" onClick={()=> loginAstroid(item)} >{item}</button>
                                </div>
                            )
                        })
                    }
                    </> :
                    <div className="offset-md-4 col-md-4">
                        <form onSubmit={onSubmit} >
                            <input className="form-control mb-3" type="text" placeholder="Enter Asteroid ID" value={asteroidId} onChange={e => setAsteroidId(e.target.value)} />
                            <button className="btn btn-primary" type="submit" disabled={asteroidId === ""} >
                                Submit
                            </button>
                            <button className="ml-3 btn btn-secondary" type="button" onClick={randomAsteroid} >
                                Random Asteroid
                            </button>
                        </form>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Login
