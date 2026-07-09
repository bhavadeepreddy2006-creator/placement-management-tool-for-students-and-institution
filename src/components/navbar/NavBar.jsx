import "./NavBar.css"
function NavBar(props){
  return(
    <nav className="navbar">
    <h1 className="nav">Placement management system {1+1+"k"+"26"}</h1>
    <div className="announcement">
      <p className="announcement-title">
        📢 Announcement
      </p>

      <p className="announcement-text">
        Students, you are going to have a couple of placement drives in the upcoming days.
      </p>
    </div>
    <div className="profile">Welcome {props.name} </div>
    </nav>
  )
}
export default NavBar;