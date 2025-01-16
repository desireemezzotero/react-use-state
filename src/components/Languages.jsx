import languages from "../data/languages"

const LanguagesFunction = () => {

return (
  <div>
    {languages.map(language => 
      <div key={language.id}> 
       <h6>
         {language.title}
       </h6>
       <p> 
         {language.description}
       </p>
      </div>
    )}
  </div>
)

}

export default LanguagesFunction