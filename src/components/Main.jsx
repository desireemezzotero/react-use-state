import languages from "../data/languages";
import { useState } from "react";

const Main = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(1);

  return (
    <main>
      <div className="container text-center">
        {
          languages.map(language => ( 
            <button key={language.id} type="button" className="btn btn-outline-primary" onClick={() => setSelectedLanguage(language.id)}>{language.title}</button>
          ))
        }
        <div className="container border border-secondary">
         <h6>{languages.find(language => language.id == selectedLanguage).title}</h6>
         <p>{languages.find(language => language.id == selectedLanguage).description}</p>
        </div>
      </div>
    </main>
  )
}

export default Main