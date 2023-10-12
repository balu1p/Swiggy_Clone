import { createContext } from "react";

const UserContext = createContext({
   user: {
    name: "Balu Patil",
    email: "balupatil4815@gmail.com"
},
})

export default UserContext;