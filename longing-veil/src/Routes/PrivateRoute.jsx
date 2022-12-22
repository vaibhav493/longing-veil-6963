
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Context/AuthContextProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


export default function PrivateRoute({children}){
     
    const reDirect = useNavigate()

    const { authState } = useContext(AuthContext);

    const triggerAlert =()=>{
        toast.info("You are not logged in !!  Redirected to login page", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
          
        });
    }

     <div>
       <ToastContainer />
     </div>

    if (authState.isAuth ===false) {
             triggerAlert()
             
                
               setTimeout(() => {
                reDirect('/login')
               }, 500);
            

    } else {
      return children;
    }




}