import logo from '../images/logo.png';
import '../css/footer.css'
function Footer (){
    return <>
  <div className="container-fluid footer">
    <div className="row">
        <div className="col-sm-12 text-center">
            <img src={logo} className='img-fluid' width={400} alt="" />
        </div>
        </div>
        <div className="row">
        <div className="col-sm-12 text-center">
           
            <ul>
                <li>
                    <a href="">About us</a>
                </li>
                <li>
                    <a href="">Our Services</a>
                </li>
                <li>
                    <a href="">Portfolio</a>
                </li>
               
                <li>
                    <a href="">Get Quote</a>
                </li>
            </ul>
        </div>
        <div className="col-sm-12 text-center">
        <ul>
            <li>
                <a href=""><i class="fa-brands fa-facebook"></i></a>
            </li>
            <li>
                <a href=""><i class="fa-brands fa-x-twitter"></i></a>
            </li>
            <li>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
            </li>
        </ul>
        </div>
    </div>
  </div>
<div className="container-fluid cc text-center">
    <div className="row">
        <p>© Copyright 2023 - Mindstreamsoft.com</p>
    </div>
</div>
    </>
}
export default Footer;