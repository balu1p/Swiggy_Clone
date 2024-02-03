import { useState } from "react";
import { FAQ } from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Section = ({id, title, description, isVisible, setIsVisible }) => {
  
  return (
    
    <div className="flex flex-col shadow rounded-md p-2.5 m-2.5">
      <div className="flex justify-between items-center"> 
        <h3 className="font-semibold text-lg text-title">{title}</h3>
        {
        isVisible ? (
            <FontAwesomeIcon icon={faAngleUp} onClick={() => setIsVisible(false)} className="cursor-pointer"/>
        
      ) : (
        <FontAwesomeIcon icon={faAngleDown} onClick={() => setIsVisible(true)} className="cursor-pointer"/>
      )}
      </div>
      {isVisible && <p className="text-bio text-base">{description}</p>}
    </div>
  );
};

const Help = () => {
  const [visibleSection, setVisibleSection] = useState(""); 
  return (
    <div className="mt-20 container ">
      <div className="card-container">
      <h1 className="card-container-title pb-5 text-center text-3xl "> FAQ</h1>
      {FAQ.map((question) => {
        return (
          <Section key={question.id} id={question.id} title={question.title} description={question.description}
          isVisible={visibleSection === question.id }
          setIsVisible={(display) => {
            if(display) {
              setVisibleSection(question.id);
            } else {
              setVisibleSection(" ");
            }
          }
          } />
  
        )
      }
      )}
      </div>
    </div>
  );
};

export default Help;