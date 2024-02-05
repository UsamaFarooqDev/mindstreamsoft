import logo from '../images/logo.png'
function Navbar() {
    return <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id="nav">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={logo} width={300} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="aboutus">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Contact us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active nav-btn" href="#">Get Quote</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
}
export default Navbar;