import { useRouteError } from "react-router-dom";
const Error = ({errorMessage})=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div style={{textAlign:"center"}}>
            <h1>OPPS!</h1>
            <h2>{errorMessage}</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
}
export default Error;