import { createContext } from "react";

const UserContext = createContext({
    name: "dummy_name",
    email: "dummy_email"
});

UserContext.displayName = "UserContext";

export default UserContext;