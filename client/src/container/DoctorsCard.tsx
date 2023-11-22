/* eslint-disable react/prop-types */
import React from 'react'

import {FaPlus} from "react-icons/fa6"
import {IoCall} from "react-icons/io5"

interface DoctorsCardProps {
    img: string;
    doctor: string;
    badge: string;
    direction: string;
}

export const DoctorsCard: React.FC<DoctorsCardProps> = ({img, doctor, badge, direction}) => {
    return (    
        <>
            <div role="listitem" className="w-dyn-item">
                <div className="card">
                    <a href={direction} className="display-block w-inline-block">
                        <div className="card-picture-wrapper">
                            <img
                                src={img}
                                alt={doctor}
                                sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 46vw, (max-width: 1439px) 30vw, 412px"
                                srcSet={`
                                    ${img}-p-500.jpg   500w,
                                    ${img}-p-800.jpg   800w,
                                    ${img}-p-1080.jpg 1080w,
                                    ${img}.jpg        1648w
                                `}
                                className="card-image"
                            />
                            <div className="card-details-flex-container doctors-card-tag v2"><div className="badge-secondary small badge-special-left-bottom">{badge}</div></div>
                        </div>
                    </a>
                    <div className="card-description doctors-description">
                        <a href={direction} className="text-decoration-none w-inline-block">
                            <h2 className="card-title-dark heading-h4-size mg-bottom-8px">{doctor}</h2>
                        </a>
                        <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet consectetur nisl enim quam faucibus ut in id.</p>
                        <div className="card-details-flex-container doctors-card-tag">
                            <a href={direction} className="btn-circle-secondary doctor-btn-circle w-inline-block"><div><FaPlus/></div></a>
                            <a href="tel:(414)809-4504" className="btn-circle-secondary doctor-btn-circle w-inline-block"><div><IoCall/></div></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}