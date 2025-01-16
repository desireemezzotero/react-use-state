/* import LanguagesFunction from "./Languages" */
import languages from "../data/languages"
import { useState } from "react"

const Main = () => {
 const [selectedLanguage, setSelectedLanguage] = useState(false);
   
 const handleClick = () => {
  setSelectedLanguage(!selectedLanguage)
 }
console.log(selectedLanguage)
  return (
    <main>
      <div className="container text-center">
        <button type="button" className="btn btn-outline-primary" onClick={handleClick}>html </button>
        {selectedLanguage && 
          <div>
            {languages.description}
          </div> 
        }
      </div>
    </main>
  )
}

export default Main
{/*   <button type="button" className="btn btn-outline-primary" onClick={() => handleClick(2)}>CSS</button>
  <button type="button" className="btn btn-outline-primary">Javascript</button>
  <button type="button" className="btn btn-outline-primary">Node.js</button>
  <button type="button" className="btn btn-outline-primary">Express</button>
  <button type="button" className="btn btn-outline-primary">ReactJS</button> */}
  {/*     <LanguagesFunction /> */}