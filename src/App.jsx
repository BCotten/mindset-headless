import { Route, Routes, Link, NavLink } from "react-router-dom";
import ScrollToTop from "./utilities/ScrollToTop";
import Home from "./templates/Home";
import Posts from "./templates/Posts";
import Post from "./templates/Post";
import Contact from "./templates/Contact";
import Page from "./templates/Page";

function App() {
  return (
    <>
      <ScrollToTop />
      <header id="masthead" className="site-header">
        <div className="site-branding">
          <p className="site-title">Mindset Headless</p>
        </div>
        <nav className="site-navigation">
          <ul>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Posts />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/services" element={<Page pageID={187} />} />
          <Route path="/about" element={<Page pageID={32} />} />
          <Route path="/privacy-policy" element={<Page pageID={3} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer>
        <nav className="site-navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </nav>
        <p className="copyright">
          Created by{" "}
          <a
            href="https://wp.bcitwebdeveloper.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FWD
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default App;
