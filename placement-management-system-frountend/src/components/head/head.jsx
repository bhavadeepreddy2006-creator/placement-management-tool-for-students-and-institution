import "./head.css";


function Heading(props){
//   const name = "Bhavadeep Reddy"
  return(
    <div className="announcement">
      <h2 className="announcement-title">
        📢 Announcement
      </h2>
      <p className="announcement-text">
        Students, you are going to have a couple of placement drives in the upcoming days.
      </p>
    </div>
  )
}
export default Heading;

// we can also use destructuring 