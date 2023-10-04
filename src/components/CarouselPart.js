import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';



function CarouselPart() {
  return (
    <div>
        <Carousel data-bs-theme="dark" className="m-auto mt-5" style={{ width: '75%' }}>
      <Carousel.Item>
        <Link onClick={() => {window.location.href="/cards"}}>
          <img style={{}}
            className="d-block w-100 overlay"
            src="https://d1eipm3vz40hy0.cloudfront.net/images/AMER/WorldHumanitarianDay2022.png"
            alt="First slide"/>
        </Link>
        <Carousel.Caption className="p-2">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link onClick={() => {window.location.href="/cards"}}>
          <img style={{}}
            className="d-block w-100 overlay"
            src="https://blog.empuls.io/it/content/images/2023/08/World-Humanitarian-Day-1.webp"
            alt="Second slide"/>
        </Link>
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link onClick={() => {window.location.href="/cards"}}>
          <img style={{}}
          className="d-block w-100 overlay"
          src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Collections/Embargoed/09-02-2020-OCHA-Sahel.jpg/image1170x530cropped.jpg"
          alt="Third slide"/>
        </Link>
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselPart