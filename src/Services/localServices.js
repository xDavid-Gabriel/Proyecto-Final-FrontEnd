import axios from "axios";

 const URL="https://616b5ebb16c3fa001717168e.mockapi.io/local";  
/*  const URL = `${process.env.REACT_APP_API}local`;  */

const obtenerLocal = async()=>{
    try {
        const {data} =await axios.get(URL);
        return data;
        
    } catch (error) {
        throw error;
    }
};
export {obtenerLocal}