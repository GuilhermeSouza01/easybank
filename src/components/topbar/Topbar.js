import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <img className="logo" src="assets/logo.png" alt="" />
          <div className="itemContainer">
            <span>Home</span>
          </div>
          <div className="itemContainer">
            <span>About</span>
          </div>
          <div className="itemContainer">
            <span>Contact</span>
          </div>
          <div className="itemContainer">
            <span>Blog</span>
          </div>
          <div className="itemContainer">
            <span>Careers</span>
          </div>
        </div>
        <div className="right">
          <button className="requestButton">Request invite</button>
        </div>
      </div>
    </div>
  );
}
