import {ImArrowRight2} from "react-icons/im"
import {PiPencilSimple} from "react-icons/pi";

export const Blog = () => {
    return (
        <>
            <div className="section overflow-hidden">
                <div className="container-default w-container">
                    <div className="inner-container _690px center">
                        <div className="text-center mg-bottom-48px">
                            <div className="subtitle">Our blog</div>
                            <h2 className="display-2 mg-bottom-0">Browse our latest articles on healthcare &amp; wellness</h2>
                        </div>
                    </div>
                    <div className="mg-bottom-48px w-dyn-list">
                        <div role="list" className="grid-2-columns gap-row-40px w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                                <a data-w-id="557efbd1-4759-9c0d-3ee0-46aed8c338d0" href="/blogs/hearthealth" className="card blog-v3 w-inline-block">
                                    <div id="w-node-_557efbd1-4759-9c0d-3ee0-46aed8c338d1-f7a60d05" className="card-picture-wrapper">
                                        <img
                                            src="src/assets/images/heart-health-featured-image.jpg"
                                            alt="3 simple and easy steps to jump-start your heart health"
                                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 46vw, (max-width: 1439px) 47vw, 632px"
                                            srcSet="
                                                src/assets/images/heart-health-featured-image-p-500.jpg   500w,
                                                src/assets/images/heart-health-featured-image-p-800.jpg   800w,
                                                src/assets/images/heart-health-featured-image-p-1080.jpg 1080w,
                                                src/assets/images/heart-health-featured-image-p-1600.jpg 1600w,
                                                src/assets/images/heart-health-featured-image.jpg        2732w
                                            "
                                            className="card-image"
                                        />
                                    </div>
                                    <div className="card-description blog-v3-description">
                                        <h3 className="card-title-dark display-4 mg-bottom-16px">3 simple and easy steps to jump-start your heart health</h3>
                                        <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet consectetur nisl neque sagittis fermentum leo dui vel velit eu egestas in eget enim euismod.</p>
                                        <div className="card-details-flex-container blog-v3">
                                            <div className="card-details-flex-container">
                                                <div className="badge-primary">News</div>
                                                <div className="text-200 medium color-neutral-800">July 17, 2023</div>
                                            </div>
                                            <div className="card-link color-neutral-600">
                                                <div className="link-text">Read more</div>
                                                <div className="line-rounded-icon card-arrow-right"><ImArrowRight2/></div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                                <a href="/blogs/the-role-of-vaccines-in-protecting-against-allergies" className="card blog-v3 w-inline-block">
                                    <div id="w-node-_557efbd1-4759-9c0d-3ee0-46aed8c338d1-f7a60d05" className="card-picture-wrapper">
                                        <img
                                            src="src/assets/images/vaccines-protecting-featured-image.jpg"
                                            alt="The role of vaccines in protecting against allergies"
                                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 46vw, (max-width: 1439px) 47vw, 632px"
                                            srcSet="
                                                src/assets/images/vaccines-protecting-featured-image-p-500.jpg   500w,
                                                src/assets/images/vaccines-protecting-featured-image-p-800.jpg   800w,
                                                src/assets/images/vaccines-protecting-featured-image-p-1080.jpg 1080w,
                                                src/assets/images/vaccines-protecting-featured-image-p-1600.jpg 1600w,
                                                src/assets/images/vaccines-protecting-featured-image-p-2000.jpg 2000w,
                                                src/assets/images/vaccines-protecting-featured-image-p-2600.jpg 2600w,
                                                src/assets/images/vaccines-protecting-featured-image-p-3200.jpg 3200w,
                                                src/assets/images/vaccines-protecting-featured-image.jpg        5464w
                                            "
                                            className="card-image"
                                        />
                                    </div>
                                    <div className="card-description blog-v3-description">
                                        <h3 className="card-title-dark display-4 mg-bottom-16px">The role of vaccines in protecting against allergies</h3>
                                        <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet consectetur nisl neque sagittis fermentum leo dui vel velit eu egestas in eget enim euismod.</p>
                                        <div className="card-details-flex-container blog-v3">
                                            <div className="card-details-flex-container">
                                                <div className="badge-primary">Articles</div>
                                                <div className="text-200 medium color-neutral-800">July 17, 2023</div>
                                            </div>
                                            <div className="card-link color-neutral-600">
                                                <div className="link-text">Read more</div>
                                                <div className="line-rounded-icon card-arrow-right"><ImArrowRight2/></div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="buttons-row center">
                        <a href="/blogs" className="btn-secondary w-button"><span className="doctr-custom-icon btn-icon-left"><PiPencilSimple /></span>Browse all articles</a>
                    </div>
                </div>
            </div>
        </>
    )
}