import React from 'react';
import Slider from 'react-slick';
import styles from '../Styles/TimelineCarousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import center from '../img/Line1.png';
import center1 from '../img/Line2.png';
import center2 from '../img/Line3.png';
import red from '../img/red2.png';
import blue from '../img/blu2.png';
import underline from '../img/underline.png';


const TimelineCarousel = () => {
    const settings = {
        infinite: false,
        arrows: true,
        prevArrow: (
            <div className={`slick-prev ${styles.slickPrev}`}>
                <div className={`btn mr-3 btn d-flex justify-content-center align-items-center ${styles.btn}`}>
                    <div style={{ marginTop: '-40px', fontSize: '30px' }}>
                      </div>
                </div>
            </div>
        ),
        nextArrow: (
            <div className={`slick-next ${styles.slickNext}`}>
                <div className={`btn  d-flex justify-content-center align-items-center ${styles.btn}`}>
                    <div style={{ marginTop: '-40px', fontSize: '30px' }}>
                    </div>
                </div>
            </div>
        ),
        dots: true,
        autoplay: false,
        speed: 1100,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className={styles.timelineCarousel} style={{ fontFamily: 'Roboto, sans-serif' }}>
            <div className="container mb-5" style={{ marginBottom: '20%' }}>
                <div className="row">
                    <div className="text-center " style={{ marginTop: '5%', marginBottom: '5%' }}>
                        <h2 className='title'><b>TIMELINE </b></h2>
                        <img src={underline} alt="underline" className="img-fluid" style={{ width: '13rem', height: '0.3rem' }} />
                    </div>
                </div>
            </div>
            <Slider {...settings}>
                <div className={styles.timelineCarouselItem} >
                    <div className={styles.timelineCarouselItemInner}>
                        <div className='row ' style={{ marginLeft: '5px' }}>
                            <div className='d-flex justify-content-around'>
                                <div className=' m-0 '>
                                    <img src={blue} alt="" style={{ width: '3rem', marginLeft: '-13px' }} />
                                    <img src={center1} alt="" style={{ height: '15rem', }} />
                                </div>
                                <div className='px-3 'style={{color:'#203583'}}>
                                    <h5  >Lorem ipsum</h5>
                                    <p style={{ fontSize: '0.9rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.</p>
                                </div>
                            </div>
                            <img src={center} alt="" className='m-0 p-0' />
                            <div className='d-flex justify-content-around mx-5 px-5' >
                                <div >
                                    <img src={center2} alt="" style={{ height: '15rem' }} />
                                    <img src={red} alt="" className='px-1' style={{ width: '3rem', marginLeft: '-13px' }} />
                                </div>
                                <div className='mt-4 px-3' style={{color:'#F16E20'}}>
                                    <h5  >Lorem ipsum</h5>
                                    <p style={{ fontSize: '0.9rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.timelineCarouselItem} >
                    <div className={styles.timelineCarouselItemInner}>
                        <div className='row ' style={{ marginLeft: '5px' }}>
                            <div className='d-flex justify-content-around'>
                                <div className=' m-0 '>
                                    <img src={blue} alt="" style={{ width: '3rem', marginLeft: '-13px' }} />
                                    <img src={center1} alt="" style={{ height: '15rem', }} />
                                </div>
                                <div className='px-3 'style={{color:'#203583'}}>
                                    <h5  >Lorem ipsum</h5>
                                    <p style={{ fontSize: '0.9rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.</p>
                                </div>
                            </div>
                            <img src={center} alt="" className='m-0 p-0' />
                            <div className='d-flex justify-content-around mx-5 px-5' >
                                <div >
                                    <img src={center2} alt="" style={{ height: '15rem' }} />
                                    <img src={red} alt="" className='px-1' style={{ width: '3rem', marginLeft: '-13px' }} />
                                </div>
                                <div className='mt-4 px-3' style={{color:'#F16E20'}}>
                                    <h5  >Lorem ipsum</h5>
                                    <p style={{ fontSize: '0.9rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.timelineCarouselItem} >
                    <div className={styles.timelineCarouselItemInner}>
                        <div className='row ' style={{ marginLeft: '5px' }}>
                            <div className='d-flex justify-content-around'>
                                <div className=' m-0 '>
                                    <img src={blue} alt="" style={{ width: '3rem', marginLeft: '-13px' }} />
                                    <img src={center1} alt="" style={{ height: '15rem', }} />
                                </div>
                                <div className='px-3 'style={{color:'#203583'}}>
                                    <h5  >Lorem ipsum</h5>
                                    <p style={{ fontSize: '0.9rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.</p>
                                </div>
                            </div>
                            <img src={center} alt="" className='m-0 p-0' />
                            <div className='d-flex justify-content-around mx-5 px-5' >
                                <div >
                                    <img src={center2} alt="" style={{ height: '15rem' }} />
                                    <img src={red} alt="" className='px-1' style={{ width: '3rem', marginLeft: '-13px' }} />
                                </div>
                                <div className='mt-4 px-3' style={{color:'#F16E20'}}>
                                    <h5  >Lorem ipsum</h5>
                                    <p style={{ fontSize: '0.9rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className={styles.timelineCarouselItem} >
                    <div className={styles.timelineCarouselItemInner}>
                        <div className='row ' style={{ marginLeft: '5px' }}>
                            <div className='d-flex justify-content-around'>
                                <div className=' m-0 '>
                                    <img src={blue} alt="" style={{ width: '3rem', marginLeft: '-13px' }} />
                                    <img src={center1} alt="" style={{ height: '15rem', }} />
                                </div>
                                <div className='px-3 'style={{color:'#203583'}}>
                                    <h5  >Lorem ipsum</h5>
                                    <p style={{ fontSize: '0.9rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.</p>
                                </div>
                            </div>
                            <img src={center} alt="" className='m-0 p-0' />
                            <div className='d-flex justify-content-around mx-5 px-5' >
                                <div >
                                    <img src={center2} alt="" style={{ height: '15rem' }} />
                                    <img src={red} alt="" className='px-1' style={{ width: '3rem', marginLeft: '-13px' }} />
                                </div>
                                <div className='mt-4 px-3' style={{color:'#F16E20'}}>
                                    <h5  >Lorem ipsum</h5>
                                    <p style={{ fontSize: '0.9rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>



                <div className={styles.timelineCarouselItem} >
                    <div className={styles.timelineCarouselItemInner}>
                        <div className='row ' style={{ marginLeft: '5px' }}>
                            <div className='d-flex justify-content-around'>
                                <div className=' m-0 '>
                                    <img src={blue} alt="" style={{ width: '3rem', marginLeft: '-13px' }} />
                                    <img src={center1} alt="" style={{ height: '15rem', }} />
                                </div>
                                <div className='px-3 'style={{color:'#203583'}}>
                                    <h5  >Lorem ipsum</h5>
                                    <p style={{ fontSize: '0.9rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.</p>
                                </div>
                            </div>
                            <img src={center} alt="" className='m-0 p-0' />
                            <div className='d-flex justify-content-around mx-5 px-5' >
                                <div >
                                    <img src={center2} alt="" style={{ height: '15rem' }} />
                                    <img src={red} alt="" className='px-1' style={{ width: '3rem', marginLeft: '-13px' }} />
                                </div>
                                <div className='mt-4 px-3' style={{color:'#F16E20'}}>
                                    <h5  >Lorem ipsum</h5>
                                    <p style={{ fontSize: '0.9rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>

        </section>
    );
};

export default TimelineCarousel;
