import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel, Button, Alert, Card, Col, Row } from "react-bootstrap";
import Loaders from "../Utilities/loaders";
import ReactPaginate from 'react-paginate';

const Collection = () => {
    const [datas, setDatas] = useState([])
    const [dataLimitPerPage] = useState(12)
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        let isCancelled = false
        if(isCancelled === false){
            setLoading(true)
            //fetch api
            axios({
                method : "GET",
                url: `${process.env.REACT_APP_BASEURL}/photos`
            }).then((result) => setDatas(result.data)).catch((err) => console.log(err)).finally(() => setLoading(false))
        }

        //clean up reender untuk fungsi limit
        return () => { 
            isCancelled = true; 
        }
    }, [])

    // function sortDesc(){
    //     function compare(a,b){
    //         return b.id - a.id
    //     }
    //     datas.sort(compare)
    // }

    // function sortAsc(){
    //     function compare(a,b){
    //         return a.id - b.id
    //     }
    //     datas.sort(compare)
    // }

    //action untuk set page 
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }

    // 0,10,20,30
    const offset = currentPage * dataLimitPerPage

    // object data per page
    const currentPageData = datas.slice(offset, offset + dataLimitPerPage)

    // total page
    const totalPage = Math.ceil(datas.length / dataLimitPerPage)

    //menampilkan loading
    if(loading) return <Loaders></Loaders>
    
    return (
        <React.Fragment>
            <h1 className="mt-5 mb-3 text-center">
                API Photos
            </h1>

            <div className="mt-2 justify-content-center text-center d-flex">
                <Alert key="primary" variant="primary"  className="mb-3">
                    Menampilkan Data dari API menggunakan fitur React Paginate
                </Alert>
            </div>
            {/* {currentPage === 0 &&
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
            } */}

            {/* <Button onClick={sortAsc()}>asc</Button>
            <Button onClick={sortDesc()}>desc</Button> */}

            <Row xs={1} md={4} className="g-4">
                {(currentPageData).map((data, i) => {
                    return(
                        <Col key={i}>
                            <Card style={{ height: "100%" }} >
                                <Card.Img variant="top" src={data.url} />
                                <Card.Body>
                                <Card.Title><small className="text-muted">id photos : {data.id}</small></Card.Title>
                                <Card.Text>
                                    {data.title}
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })} 
            </Row>
            <div className="mt-5 justify-content-center d-flex">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next >>"
                    onPageChange={handlePageClick}
                    pageCount={totalPage}
                    previousLabel="<< Previous"
                    renderOnZeroPageCount={null}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                />
            </div>
        </React.Fragment>
    )
}

export default Collection; 