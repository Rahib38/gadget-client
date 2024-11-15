import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const GoggleLogin = () => {
    const {GoggleLogin}=UseAuth()
    const navigate = useNavigate()
    const handleGoggleLogin = ()=>{
        GoggleLogin().then(()=>{

            navigate('/')
        })
    }
    return (
        <div>
            <div>

            </div>
              <div className="divider">OR</div>
            <div onClick={handleGoggleLogin}>
            <FaGoogle/>
            </div>
        </div>
    );
};

export default GoggleLogin;