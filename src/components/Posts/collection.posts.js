import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Alert, Modal, Button } from "react-bootstrap";
import Loaders from "../Utilities/loaders";

const Collection = () => {

    const [show, setShow] = useState(false);
    const [dataModal, setdataModal] = useState([])
    const [datas, setDatas] = useState([])
    const [limit, setLimit] = useState(10)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        console.log(`Halo bang, Tiap scroll mentok bawah nambah 10 data, data: ${limit}`);
        
        let isCancelled = false
        if(isCancelled === false){
            setLoading(true)
            axios({
                method : "GET",
                url: `${process.env.REACT_APP_BASEURL}/posts?_limit=${limit}`,
                //biar gak kena cors
                withCredentials: false
            }).then((result) => setDatas(result.data)).catch((err) => console.log(err)).finally(() => setLoading(false))
        }

        //clean up reender untuk fungsi limit
        return () => { 
            isCancelled = true; 
            window.removeEventListener('scroll', handleScroll);
        }
    }, [limit])

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setLimit((prev) => prev + 10)
    }

    const handleClose = () => setShow(false);
    const handleShow = (val) => {
        setdataModal(val)
        setShow(true);
    }

    if(loading) return <Loaders></Loaders>
    
    return (
        <React.Fragment>
            <h1 className="mt-3 mb-3 text-center">
                API Posts
            </h1>
            
            {/* start */}
            <div className="row justify-content-center text-center">

                <Alert key="primary" variant="primary" style={{ width: "80%" }} className="mb-5">
                    Data Default 10, Scroll Sampai Bawah untuk Menambah 10 Data Baru
                </Alert>

                {datas.map((data, i) => {
                    return (
                    <Card onClick={() => handleShow(datas[i])} className="shadow-lg p-3 mb-2 bg-body rounded " style={{ width: "80%", cursor: "pointer" }} key={i}>
                        <Card.Body>{data.title}</Card.Body>
                    </Card>
                    )
                })}
            </div>
            {/* end */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Detail Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>   
                    <h3>id : {dataModal.id}</h3>
                    <h5>title : {dataModal.title}</h5>
                    <p>body : {dataModal.body}</p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export default Collection; 