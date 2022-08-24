import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Alert, Card, Col, Row } from "react-bootstrap";
import Loaders from "../Utilities/loaders";
import ReactPaginate from 'react-paginate';

const Collection = () => {
    const [datas, setDatas] = useState([])
    let [dataLimitPerPage] = useState(9)
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(0)
    const [ascSort, setAscSort] = useState(true)

    useEffect(() => {
        let isCancelled = false
        if(isCancelled === false){
            setLoading(true)
            setAscSort(true)
            //fetch api
            axios({
                method : "GET",
                url: `${process.env.REACT_APP_BASEURL}/photos`,
                //biar gak kena cors
                withCredentials: false
            }).then((result) => setDatas(result.data)).catch((err) => console.log(err)).finally(() => setLoading(false))
        }
        
        //clean up reender untuk fungsi limit
        return () => { 
            isCancelled = true; 
        }
    }, [])
    
    //fungsi asc dan desc
    function sortDesc(){
        setAscSort(false)
        console.log("false, desc")
    }

    function sortAsc(){
        setAscSort(true)
        console.log("true, asc")
    }
    
    if(ascSort){
        function compare(a,b){
            return a.id - b.id
        }
        datas.sort(compare)
    }else{
        function compare(a,b){
            return b.id - a.id
        }
        datas.sort(compare)
    }

    //action untuk set page 
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }

    // 0,10,20,30
    let offset = 0;
    if(currentPage != 0){
        dataLimitPerPage = 8
        offset = currentPage * dataLimitPerPage + 1
    }else{
        offset = currentPage * dataLimitPerPage
    }

    // object data per page
    let currentPageData = datas.slice(offset, offset + dataLimitPerPage)
    
    console.log(`slice ${offset}, ${offset + dataLimitPerPage}`)

    // total page
    const totalPage = Math.ceil(datas.length / dataLimitPerPage)

    //menampilkan loading
    if(loading) return <Loaders></Loaders>

    //khusus halaman 1
    if(currentPage == 0) {
        currentPageData = currentPageData.slice(1)
        console.log("page 1")
    }else{
        currentPageData = currentPageData
        console.log("page selain 1", currentPageData)
    }
    
    return (
        <React.Fragment>
            <h1 className="mt-3 mb-3 text-center">
                API Photos
            </h1>

            <div className="mt-2 justify-content-center text-center d-flex">
                <Alert key="primary" variant="primary"  className="mb-3">
                    Menampilkan Data dari API menggunakan fitur React Paginate & Sorting Ascending Descending ID Photos
                </Alert>
            </div>

            <div className="mb-4 justify-content-center text-center d-flex">
                <Button onClick={sortAsc} className="p-2 m-2" variant="outline-primary">Ascending</Button>{' '}
                <Button onClick={sortDesc} className="p-2 m-2" variant="outline-secondary">Descending</Button>{' '}
            </div>

            <div className="mb-3">
                {currentPage === 0 &&
                    <Card>
                        <Card.Img variant="top" src={datas[0].url} style={{ height: "50" }} 
                            height={300}
                            width={300}/>
                        <Card.Body>
                        <Card.Title><small className="text-muted">id photos : {datas[0].id}</small></Card.Title>
                        <Card.Text>
                            {datas[0].title}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                }
            </div>

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