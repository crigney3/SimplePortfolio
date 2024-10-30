import { createContext } from "react";

export const updateProjectContext = (values = {}) => ({ character: values });

const ProjectContext = createContext({

}
);

export default  ProjectContext;