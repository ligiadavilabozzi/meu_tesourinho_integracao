import { Route, Redirect } from "react-router-dom";
import {auth as useAuth} from "@/reducers"

const GuardedRoute = ({ component: Component, ...rest }) => {
    const { signed, loading } = useAuth();
  
    if (loading) {
      return <h3>Loading. Wait a moment.</h3>;
    }
  
    return (
      <Route {...rest} render={(props) => (
        signed
          ? <Component {...props} />
          : <Redirect to='/protected'/>
      )}/>
    );
  };
  
  export default GuardedRoute;