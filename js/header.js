class Header extends HTMLElement {
  constructor() {
    super();
    const header = `    <nav class="nav">
      <label for="toggle">&#9776;</label>
      <input type="checkbox" id="toggle"/>
      <div class="menu">
<a class="home-logo-img" href="index.html"><div class="header-agri-image"><img src="images/agriculture_0.png" style="width="60px" height="60px"></div></a>
          <a href="index.html">Home</a>
          <a href="expertTips.html">Expert Tips</a>
          <a href="tools.html">Tools</a>
          <a href="discussion.html">Discussion</a>
          <a href="shop.html">Shop</a>
          <a onclick="togglePopup3()">Contact Us</a>
      </div>
  </nav>
  `;
    this.innerHTML = header;
  }
}

// window.addEventListener('scroll', function() {
//   document.getElementById('showScroll').innerHTML = ;
//   console.log(window.pageYOffset + 'px');
// });

class contactUs extends HTMLElement{
  constructor(){
    super();
    const popUp=`<div class="popup" id="popup-3">
    <div class="overlay"></div>
    <div class="content">
      <div class="close-btn" onclick="togglePopup3()">×</div>
      <h4>You can Conatct Us on following no. or mail id.</h4>
        <h5>xxx-xxx-xxxx</h5>
        <h5>temp@gmail.com</h5>
        <h5><input type="checkbox" onchange="requestingACall(this)" id="call" name="call" value="call">
        <label for="call"> Request a call.</h5></label>

        <input type="text" class="hidden" id="mobileNo" placeholder="Enter mobile no.">

        <button onclick="call()">Submit</button>

  </div>
  </div>`;
  this.innerHTML=popUp;
  }
}

function togglePopup3() {
  document.getElementById("popup-3").classList.toggle("active");
}


function requestingACall(checkbox){
  document.getElementById("mobileNo").classList.add("visible");
}

function call(){
  let num=document.getElementById("mobileNo").value;
  if(num.length===10){
      alert("Our Team will Call you soon");
      togglePopup3();
  }
  else
      alert("Please enter a valid no.");
}

function togglePopup3(){
document.getElementById("popup-3").classList.toggle("active");
}

window.customElements.define("head-section", Header);
window.customElements.define("pop-up", contactUs);



