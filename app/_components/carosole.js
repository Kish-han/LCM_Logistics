import React from 'react'
import { Carousel } from "react-responsive-carousel";

const Carosole = () => {
    return (
        <div className=''>
            <Carousel autoPlay showThumbs={false}>
                <div className=''>
                    <img className='h-[75vh] object-cover' alt="" src="https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img className='h-[75vh] object-cover' alt="" src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img className='h-[75vh] object-cover' alt="" src="https://images.unsplash.com/photo-1682695799561-033f55f75b25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img className='h-[75vh] object-cover' alt="" src="https://images.unsplash.com/photo-1682687220336-bbd659a734e7?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    {/* <p className="legend">Legend 4</p> */}
                </div>

            </Carousel>
        </div>
    )
}

export default Carosole