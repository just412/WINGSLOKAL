import React from 'react'
import "./styles/Gallery.css"
import "../App.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel"
import image from "./Images.js"

const Gallery = () => {
    return (
        <div id="gallery" >      
            <div className="gallery-section">
                <div className="container">

                    <div class="gallery-container w-3 h-2">
                        <div class="gallery-item">
                            <div class="image">
                                <img src={image.forGallery10} alt="nature"/>
                            </div>
                        </div>
                    </div>

                    <div class="gallery-container w-3 h-3">
                        <div class="gallery-item">
                            <div class="image">
                                <img src={image.forGallery11} alt="people" />
                            </div>
                        </div>
                    </div>

                    <div class="gallery-container h-2">
                        <div class="gallery-item">
                            <div class="image">
                                <img src={image.forGallery12} alt="sport" />
                            </div>
                        </div>
                    </div>

                    <div class="gallery-container w-2">
                        <div class="gallery-item">
                            <div class="image">
                                <img src={image.forGallery30} alt="fitness" />
                            </div>
                        </div>
                    </div>

                    <div class="gallery-container w-4 h-2">
                        <div class="gallery-item">
                            <div class="image">
                                <img src={image.forGallery18} alt="food" />
                            </div>
                        </div>
                    </div>

                    <div class="gallery-container">
                        <div class="gallery-item">
                            <div class="image">
                                <img src={image.forGallery15} alt="travel" />
                            </div>
                        </div>
                    </div>

                    <div class="gallery-container h-2">
                        <div class="gallery-item">
                            <div class="image">
                                <img src={image.forGallery16} alt="art" />
                            </div>
                        </div>
                    </div>

                    <div class="gallery-container">
                        <div class="gallery-item">
                            <div class="image">
                                <img src={image.forGallery17} alt="cars" />
                            </div>
                        </div>
                    </div>

                    <div class="gallery-container h-1 w-2">
                        <div class="gallery-item">
                            <div class="image">
                                <img src={image.forGallery13} alt="cars" />
                            </div>
                        </div>
                    </div>

                    <div class="gallery-container h-1 w-3">
                        <div class="gallery-item">
                            <div class="image">
                                <img src={image.forGallery31} alt="cars" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Gallery
