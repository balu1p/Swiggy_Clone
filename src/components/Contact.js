import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  
  return (
    <div className="border border-black p-2">
      <h3 className="font-bold text-2xl p-2 m-1">{title}</h3>
      {console.log(setIsVisible)
      }
      {isVisible ? (
        <>
          <button onClick={() => setIsVisible(false)}>Hide</button>
          <p>{description}</p>

        </>
      ) : (
        <button onClick={() => setIsVisible(true)}>Show</button>
      )}
    </div>
  );
};
const Contact = () => {
  const [visibleSection, setIsVisibleSection] = useState("about"); // in default you can pass the key and indexes...:)
const handleButtonClick = (section) => {
  if (visibleSection === section) {
    setIsVisibleSection(null);
  } else {
    setIsVisibleSection(section);
  }
};
  return (
   
    <div>
      <h1 className="font-bold text-2xl p-2 m-1 text-center"> InstaMart:)</h1>
      <Section
        title={"Can I edit my order?"}
        description={
          "Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents"
        }
        
        isVisible={visibleSection == "about"}
        setIsVisible={() => handleButtonClick("about")
        
    }
    
    
      />
      <Section
        title={"Team Instamart"}
        description={
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        }
        isVisible={visibleSection == "team"}
        setIsVisible={() => handleButtonClick("team")}
      />
      <Section
        title={"Careers Instamart"}
        description={
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        }
        isVisible={visibleSection == "career"}
        setIsVisible={() => handleButtonClick("career")}
      />
      {/*<AboutInstamart/>
        <DetailsofInstamart/>
        <Product/>
    <Careers/>*/}
    </div>
  );
};
export default Contact;
