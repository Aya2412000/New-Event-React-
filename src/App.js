import CreativeSpeaker from "./design-system/components/CreativeSpeaker/CreativeSpeaker";
import { SpeakerTest } from "./design-system/components/CreativeSpeaker/SpeakerTest";
import './design-system/main.css';


function App() {
  return (
    <div className="App">
    <div style={{display:"flex"}}>
      {SpeakerTest.map(item=>{
      return(
        <CreativeSpeaker img={item.img} name={item.name} alt={item.alt} job={item.job} key={item.id}/>
      )
    })}
    </div>
    </div>
  )
}

export default App;
