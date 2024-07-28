const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
  <footer>
    <div className="container-footer">
      <label className="logo-footer">Zerr.</label>
      <div className="isi-f">
        <label className="title-footer">Information web zeru</label>
        <p className="sub-footer">Created by zeru</p>
        <p className="sub-footer">programming language typescript or jsx</p>
        <p className="sub-footer">framework use, react js, bootstrap</p>
        <p className="sub-footer">library database from firebase </p>
        <p className="sub-footer">library css ANIMATE.CSS, TRANSITION.CSS</p>
        <p className="sub-footer">hosting firebase and github</p>
        <p className="sub-footer">created in 17 febuary 2024</p>
      </div>
      <div className="isi-f">
        <label className="title-footer">Services</label>
        <p className="sub-footer">fullstack web developer</p>
        <p className="sub-footer">web design / UI-UX</p>
        <p className="sub-footer">designer</p>
        <p className="sub-footer">cinematography</p>
        <p className="sub-footer">Ai engineer</p>
      </div>
      <div className="isi-f">
        <label className="title-footer">Activity</label>
        <p className="sub-footer">study in high school</p>
        <p className="sub-footer">study programing otodidak</p>
        <p className="sub-footer">freelance (friend's project)</p>
        <p className="sub-footer">church service</p>
        <p className="sub-footer">photography</p>
      </div>
      <div className="isi-f">
        <label className="title-footer">Social media zeru</label>
        <p className="sub-footer"><a href="https://github.com/zeru-program/">Github</a></p>
        <p className="sub-footer"><a href="https://wa.me/6287774487198">WhatsApp</a></p>
        <p className="sub-footer"><a href="https://www.instagram.com/zerr.ace?r">Instagram</a></p>
        <p className="sub-footer"><a href="mailto:zeruprogram@gmail.com?subject=HireYou">Email</a></p>
      </div>
    </div>
    <label className="copyright mt-3">copyright ©2024 all rights reserved. by zeru, version web app 3.0.0. new updated in 28 july 2024</label>
  </footer>
        );
};

export default Footer;
