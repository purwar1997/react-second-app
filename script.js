// JSX code
// JSX => Javascript HTML ot Javscript XML
// a way to insert HTML into JS code

const root = document.getElementById("root");

// CSS properties will be in the form of key-value pairs
const css_ul = {
  listStyleType: "none",
  display: "flex",
  justifyContent: "center",
  gap: "20px",
};

const css_a = { textDecoration: "none", color: "blue", fontSize: "18px" };
const css_h2 = { textDecoration: "underline" };
const css_div = { marginTop: "30px", textAlign: "center" };

const user = "Nitin Gupta";
const year = 2022;

// HTML components
const Navbar = (
  <ul style={css_ul}>
    <li>
      <a style={css_a} href="">
        Home
      </a>
    </li>
    <li>
      <a style={css_a} href="">
        About Us
      </a>
    </li>
    <li>
      <a style={css_a} href="">
        Contact
      </a>
    </li>
    <li>
      <a style={css_a} href="">
        Blogs
      </a>
    </li>
  </ul>
);

const Hero = (
  <div style={css_div}>
    <h2 style={css_h2}>Hero section</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, dolores.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, dolores.
    </p>
  </div>
);

const Main = (
  <div style={css_div}>
    <h2 style={css_h2}>Main Section</h2>
    {/* class is a reserved keyword in JS, hence use className */}
    <p className="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
      doloremque reprehenderit rerum nulla fugiat adipisci ratione. Quidem
      corrupti reiciendis magnam.
    </p>
  </div>
);

const Footer = (
  <div style={css_div}>
    <p className="footer-text">
      Copyright {year}; {user}
    </p>
  </div>
);

// To inject anything in JSX, use {}
/* all the components will be inside App function */
const App = (
  <>
    {/* Components are reusable */}
    {Navbar} {Navbar} {Hero} {Main} {Hero} {Main} {Footer}
  </>
);

ReactDOM.render(App, root);
