
import './App.css';
import  Image  from  './imageInSrc.jpg'

function App() {
  return (
    <>
  <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title red">Your name here</h1>
    <br />
    <img src={Image}/>
    <br />
    <img src="/imageInPublic.jpg" />
  </div>
  <video controls="" width={320} height={240}>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</>
  );
}

export default App;
