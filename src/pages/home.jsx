import React, { useState } from 'react';
import heroimg from '../images/hero2.png';
import '../css/app.css';
import Navbar from '../modules/nav';
import image1 from '../images/image1.png';
import Footer from '../modules/footer';
function Home() {
    const [cards] = useState([
        {
            title: 'Our Clients',
            description: '50+',

        },
        {
            title: 'Projects Completed',
            description: '120+',

        },
        {
            title: 'Years of Experience ',
            description: '5+',

        },
        {
            title: 'Global Client Footprint ',
            description: '11+ Countries',

        },
    ]);
    return <>

        <div className="container-fluid hero-section">
            <Navbar></Navbar>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-6 col-12">
                        <h1>Welcome To Mindstreamsoft</h1>
                        <h4 className='tagline'>Streamlining Your <br />Digital Future</h4>
                    </div>
                    <div className="col-sm-6 col-12">
                        <img src={heroimg} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="container cards-main">
            <div className="row">
                {
                    cards.map((card, i) => (
                        <div className="col-sm-3">
                            <div className='card-box'>
                                <div className='info'>
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                </div>

                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
        <br /> <br />
        <div className="container">
            <div className="row align-items-center">
                <div className="col-sm-6 text-start">
                    <p className='justify'>
                        <span className='orange heading'> Welcome to Mindstreamsoft</span>, where we specialize in turning your digital dreams into reality. Boasting over 5 years of dedicated experience in website design and development, we stand as your trusted partners in the dynamic world of online presence. Our commitment goes beyond merely constructing websites; we excel in the art of crafting immersive online journeys.
                        <br /><br />
                        At Mindstreamsoft, we believe in creating digital experiences that not only engage visitors but also inspire them, ultimately leading to conversions. With a keen eye for detail and a passion for innovation, we bring a unique blend of creativity and technical expertise to every project.

                        Our journey in the digital realm has equipped us with the skills to navigate the ever-evolving landscape of web design and development. We understand that a successful online presence is more than just aesthetics; it requires a strategic approach that aligns with your goals.
                        <br /><br />
                        Mindstreamsoft takes pride in being a driving force behind the online success of numerous businesses. Whether you're establishing your brand or looking to revamp your digital footprint, we are dedicated to delivering exceptional results that leave a lasting impression.
                        <br /><br />
                        Choose Mindstreamsoft as your partner in the digital realm, and let us collaborate to bring your vision to life. From conceptualization to execution, we are committed to delivering websites that not only meet but exceed your expectations. Join us on the journey of crafting unparalleled online experiences that resonate with your audience and elevate your brand to new heights.
                    </p>
                    <a href="" className='btn btn-def btn-right'>Contact us </a>
                </div>
                <div className="col-sm-6">
                    <img src={image1} width={700} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
        <br /><br /><br />
        <div className="container-fluid services">
            <div className="container">
                <div className="row text-center">
                    <div className="col-sm-12">
                        <h1 className=' orange'>Our Services</h1>
                        <p className='justify text-white text-center'>
                            Our expert team specializes in Website Development, creating responsive and user-friendly websites that reflect your brand’s uniqueness. We prioritize a seamless user experience through our UI/UX Design expertise, ensuring your website not only looks stunning but also engages your audience effectively. In the world of e-commerce, we excel in E-commerce Development and are Shopify Development experts, making your online store a success.
                        </p>
                        <a href="" className='btn btn-def'>View More</a>
                    </div>
                </div>
            </div>

        </div>
        <div className="container services_list">
            <div className="row align-items-center">



                <div className="col-sm-3 col-12">
                    <div className="box">
                        <i class="fa-solid fa-code  icon"></i>
                        <h3>Website <br /> Development</h3>
                        <a href=""><i class="fa-solid fa-arrow-right-long"></i></a>
                        {/* <p className='service_dec'>
                            We understand that a website is your digital storefront. Our expert developers use the latest technologies to create responsive, user-friendly websites that not only look great but also perform flawlessly. Whether you're a small business or a large enterprise, we tailor our solutions to suit your unique needs.
                        </p> */}

                    </div>
                </div>
                <div className="col-sm-3 col-12">
                    <div className="box">
                        <i class="fa-solid fa-pen-nib  icon"></i>
                        <h3>UI/UX <br />Design</h3>
                        <a href=""><i class="fa-solid fa-arrow-right-long"></i></a>
                        {/* <p className='service_dec'>
                            A great website isn't just about functionality; it's about delivering a seamless and delightful user experience. Our dedicated UI/UX design team focuses on every detail to ensure your website is intuitive, visually appealing, and conversion-focused. Your success is our priority.
                        </p> */}
                    </div>
                </div>

                <br />

                <div className="col-sm-3 col-12">
                    <div className="box">
                        <i class="fa-solid fa-cart-shopping icon"></i>
                        <h3>E-commerce <br /> Development</h3>
                        <a href=""><i class="fa-solid fa-arrow-right-long"></i></a>
                        {/* <p className='service_dec'>
                            E-commerce is the future of retail, and we are here to make it accessible to businesses of all sizes. Our e-commerce solutions are designed to help you sell products and services effortlessly. From product listings to secure payment gateways, we've got you covered.
                        </p> */}
                    </div>
                </div>
                <div className="col-sm-3 col-12">
                    <div className="box">
                        <i class="fa-brands fa-shopify icon"></i>
                        <h3>Shopify <br /> Development</h3>
                        <a href=""><i class="fa-solid fa-arrow-right-long"></i></a>
                        {/* <p className='service_dec'>
                            Shopify is a leading e-commerce platform, and we are experts in harnessing its power. Whether you're starting a new online store or want to optimize your existing Shopify site, we have the skills to turn your e-commerce vision into reality.
                        </p> */}
                    </div>
                </div>


            </div>
        </div>
        <div className="container why_choose_us">
            <div className="row">
                <div className="col-sm-12">
                    <h3 className='orange'><b>Why Choose Us</b></h3>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Experience
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">With over 5 years in the industry, we've honed our skills and mastered the art of web development and design.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Quality Assurance
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Your satisfaction is our priority. We ensure that your website is not only beautiful but also bug-free and fully functional.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Custom Solutions
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">We don't believe in one-size-fits-all. Every project is unique, and we tailor our solutions to match your specific requirements.

</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingfour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapseThree">
      Dedicated Team
      </button>
    </h2>
    <div id="flush-collapsefour" class="accordion-collapse collapse" aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Our team of passionate and creative professionals is committed to your success. We treat your project as if it were our own.
</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingfive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapseThree">
      Affordable Pricing
      </button>
    </h2>
    <div id="flush-collapsefive" class="accordion-collapse collapse" aria-labelledby="flush-headingfive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">We offer competitive pricing without compromising on quality. Your investment in us is an investment in your digital future.

</div>
    </div>
  </div>
</div>
                </div>
            </div>
        </div>
     <Footer />
    </>
}
export default Home;