import axios from "axios";
import { useEffect, useState } from "react";
import UseAuth from "./UseAuth";

function UseUserData() {
  const { user, loading } = UseAuth();
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const fetchUserData = async () => {
     
        const res = await axios.get(`http://localhost:4001/user/${user.email}`);
        setUserData(res.data);
    
    };
    if (user?.email && !loading) {
      fetchUserData();
    }
  }, [user, loading]);
  return userData;
}

export default UseUserData;
