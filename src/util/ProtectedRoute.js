import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {

    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkUserToken = () => {
        const userToken = localStorage.getItem('user-token');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
            return navigate('/auth/login');
        }
        setIsLoggedIn(true);
    }

    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);

    return (isLoggedIn) && children;
}

export default ProtectedRoute;