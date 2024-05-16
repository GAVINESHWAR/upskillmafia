import "./App.css";

function App() {
  return (
    <>
      <div className="heading">
        <img
          className="icon"
          src="https://media.licdn.com/dms/image/D4D0BAQGMh6I-JWdfQg/company-logo_200_200/0/1695539399245/upskillmafia_logo?e=2147483647&v=beta&t=N3q1F0rS0Ypd4d98PY46cL2RBFquOZW100cRLPIat6s"
          alt="Placeholder"
        />
        <div className="logins">
          <button>Logo</button>
          <button>Sign Up</button>
        </div>
      </div>
      <div className="navbar">
        <nav>
          <li>Overview</li>
          <li>Curriculum</li>
          <li>Refund</li>
          <li>Testimonial</li>
        </nav>
      </div>
      <section>
        <div className="body">
          <div className="box1">
            {/* <img src='/'></img> */}
            <p>An IIT Delhi Alumini initiative </p>
          </div>
          <h1 className="desc">
            Become an Expert in the <br />
            field of
            <span>
              Data Science <br />
              with 6 Courses
            </span>
          </h1>
          <p>
            A specially crafted Tech Kickstarter,
            <span> with 5+ extensive online courses.</span>
          </p>
          <div className="hights">
            <p>Personal Mentorship</p>
            <p>Internship Assistance</p>
            <p>Industry certified Courses</p>
          </div>
        </div>
        <div className="buttons">
          <button>Enroll Now</button>
          <button>Know More</button>
        </div>
        <div className="Highlights">
          <div className="bo1">
            <img
              src="https://icones.pro/wp-content/uploads/2021/06/icone-de-l-education-rose.png"
              alt="Placeholder"
            />
            <p id="p1">24</p>
            <p>Courses</p>
          </div>
          <div className="bo2">
            <img
              src="https://icones.pro/wp-content/uploads/2021/06/icone-de-l-education-rose.png"
              alt="Placeholder"
            ></img>
            <p id="p1">30K+</p>
            <p>Learners</p>
          </div>
          <div className="bo3">
            <img
              src="https://icones.pro/wp-content/uploads/2021/06/icone-de-l-education-rose.png"
              alt="Placeholder"
            ></img>
            <p id="p1"> 100k+</p>
            <p>Doubts Solved</p>
          </div>
          <div className="bo4">
            <img
              src="https://icones.pro/wp-content/uploads/2021/06/icone-de-l-education-rose.png"
              alt="Placeholder"
            ></img>
            <p id="p1">10k+</p>
            <p>Sudents projects</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
