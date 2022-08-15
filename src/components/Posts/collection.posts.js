import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import Loaders from "../Utilities/loaders";

const Collection = () => {

    const [show, setShow] = useState(false);
    const [dataModal, setdataModal] = useState([])
    const [datas, setDatas] = useState([])
    const [limit, setLimit] = useState(10)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        let isCancelled = false
        if(isCancelled === false){
            setLoading(true)
            axios({
                method : "GET",
                url: `${process.env.REACT_APP_BASEURL}/posts?_limit=${limit}`
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
        console.log(`Halo bang dea, Tiap scroll mentok bawah nambah 10 limit: ${limit}`);
    }

    const handleClose = () => setShow(false);
    const handleShow = (val) => {
        setdataModal(val)
        setShow(true);
    }

    if(loading) return <Loaders></Loaders>
    
    return (
        <React.Fragment>
            <h1 className="mt-5 mb-3 text-center">
                API Posts
            </h1>
            
            {/* start */}
            <div className="row justify-content-center ">
                {datas.map((data, i) => {
                    return (
                    <Card onClick={() => handleShow(datas[i])} className="shadow-lg p-3 mb-2 bg-body rounded" style={{ width: "50em" }} key={i}>
                        <Card.Body>{data.title}</Card.Body>
                    </Card>
                    )
                })}
            </div>
            {/* end */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{dataModal.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>   
                    <small className="text-muted"><i>id posts : {dataModal.id}</i></small>
                    <p>{dataModal.body}</p>
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