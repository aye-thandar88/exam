import "./App.css";

function App() {
  const clickHandler = (e) => {
    e.preventDefault();
    alert("Successfully Sent!");
  };

  return (
    <div className="App">
      <section id="header">
        <div>
          <img src="user.png" className="profile" />
          <h4 className="pf-txt-style">Portfilio</h4>
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skill">Skill</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <section id="top">
        <div className="top-div">
          <div className="left-cloud">
            <img src="cloud.png" />
          </div>

          <div className="text-align-center">
            <h1 className="name-font">I'm Thandar.</h1>
            <h2>a web developer</h2>
          </div>

          <div>
            <img src="cloud.png" />
          </div>
        </div>
        <div className="text-align-center">
          <img src="mountain.png" className="img-wh" />
        </div>
      </section>
      <section id="about">
        <div className="text-align-center about-div">
          <img src="myPic.png" className="myPic" />
          <h2>Hello</h2>
          <p>
            I'm a web designer / developer based in Yangon, Myanmar. I have a
            passion for web design and love to create for web and mobile
            devices.
          </p>
          <h2>.....</h2>
        </div>
      </section>
      <section id="skill">
        <h1>What I can do.</h1>
        <div className="skill-div">
          <img src="menu.gif" className="skill-img" />
          <div className="desing-div">
            <h2>Design what you want.</h2>
            <p>
              I like to keep it simple. My goals are to focus on typography,
              content and conveying the message that you want to send.
            </p>
          </div>
        </div>
        <div className="skill-div">
          <div className="desing-div">
            <h2>Develop what you need.</h2>
            <p>
              I'm a developer, so I know how to create your website to run
              across devices using the latest technologies available.
            </p>
          </div>
          <img src="physics.gif" className="skill-img" />
        </div>
        <h2>.....</h2>
      </section>
      <section id="contact">
        <div className="text-align-center contact-div">
          <h1>Get In Touch</h1>
          <h2>I’m currently available for freelance work.</h2>
          <p>
            If you have a project that you want to get started, think you need
            my help with something or just fancy saying hey, then get in touch.
          </p>
          <button className="btn-contact" type="submit" onClick={clickHandler}>
            CONTACT ME
          </button>
          <h2>.....</h2>
        </div>
      </section>
      <section id="footer">
        <div className="footer-div">
          <span>LinkedIn</span>
          <span>Facebook</span>
          <span>Website</span>
        </div>
        <h4>© 2023 Thandar. All rights reserved.</h4>
      </section>
    </div>
  );
}

export default App;
