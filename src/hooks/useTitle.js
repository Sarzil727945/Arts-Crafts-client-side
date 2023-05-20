import { useEffect } from "react";
const useTitle = title =>{
     useEffect(() =>{
          document.title = `${title} - Arts&Crafts Toys`;
     }, [title])
};

export default useTitle;