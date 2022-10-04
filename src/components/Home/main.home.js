import React, { useEffect } from "react";
import './home.css';
import author from './images/panda.jpeg'

//child component
const Home = (props) => {

    useEffect(() => {
        setTimeout(() => {
            const main = document.querySelector('#main');
            main.style.opacity = 1;
            main.style.filter = 'blur(0px)';
        }, 1000) //1000=1second
        
    }, [])

    return (
        <React.Fragment >
            <div className="utama">
                <div className="main" id="main">
                    <div className="profile">
                        <img src={author} alt="" width="220" height="220" className="foto"></img>
                        <div className="fullname">Kiigeeks</div>
                        <div className="role">Fundamental React JS</div>
                        <div className="about">
                            Belajar Fundamental React JS. Melakukan Fetch API, ditampilkan menggunakan template dari Bootstrap.
                            Menggunakan Fitur Carousel dengan Event Penambahan dan Pengurangan Limit data API, Popup Modal dari title API menampilkan body dan ID,
                            Menggunakan Fitur Scroll untuk menambah data API yang ditampilkan, Menggunakan Fitur React Paginate, Menggunakan Fitur Sort Ascending dan Descending. 
                        </div>
                        {/* <a className="callme">Contact Me</a> */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
    
}

export default Home;