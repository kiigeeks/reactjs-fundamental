import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel, Button, Alert } from "react-bootstrap";
import Loaders from "../Utilities/loaders";

const Collection = () => {
    const [datas, setDatas] = useState([])
    const [limit, setLimit] = useState(3)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let isCancelled = false
        if(isCancelled === false){
            setLoading(true)
            
            axios({
                method : "GET",
                url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`,
                //biar gak kena cors
                withCredentials: false
            }).then((result) => setDatas(result.data)).catch((err) => console.log(err)).finally(() => setLoading(false))
        }

        //clean up reender untuk fungsi limit
        return () => { 
            isCancelled = true; 
        }
    }, [limit])

    const handleLimit = (option) => {
        option === "+" ? setLimit((prev) => prev + 1) : setLimit((prev) => prev - 1)
    }

    if(loading) return <Loaders></Loaders>
    
    return (
        <React.Fragment>
            <h1 className="mt-3 mb-3 text-center">
                API Albums
            </h1>

            <div className="mt-2 justify-content-center text-center d-flex">
                <Alert key="primary" variant="primary"  className="mb-3">
                    Menampilkan Data API dengan Carousel dengan Jumlah Data { limit }
                </Alert>
            </div>
            <Carousel>
                {datas.map((data, i) => {
                    return (
                        <Carousel.Item key={i}>
                            <img
                            className="d-block w-100"
                            src={data.url}
                            alt="First slide"
                            height={500}
                            width={450}
                            />
                            <Carousel.Caption>
                            <h3>{data.title}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
            
            <div className="mt-2 justify-content-center text-center">
                <Button variant="primary" className="p-2 m-2" onClick={() => handleLimit("+")}> Tambah </Button>
                {limit > 1 &&
                    <Button variant="danger" className="p-2 m-2" onClick={() => handleLimit("-")}> Kurang </Button>
                }
            </div>
                
        </React.Fragment>
    )
}

export default Collection; 