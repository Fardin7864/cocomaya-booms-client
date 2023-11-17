import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";

const Sociallogin = () => {
  const { socialLogin, successToast } = useAuth();
  const localtion = useLocation();
  const navigate = useNavigate();
const axiosPublic = useAxiosPublic();
  const handleGoogle = () => {
    socialLogin()
    .then(res => {
        successToast("Logged in successfully!")
        const userEmail = {
            name: res.user.displayName,
            email: res.user.email,
        }
        axiosPublic.post('/users',userEmail)
        .then(() => {
            navigate(localtion.state? localtion.state : "/")
        })
    })
  };

  return (
    <div>
      <button onClick={handleGoogle} className=" btn btn-primary">
        Continue With Google{" "}
      </button>
    </div>
  );
};

export default Sociallogin;
