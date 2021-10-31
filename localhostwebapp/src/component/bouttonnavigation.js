import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Bouttonnavigation(props) {

  const history = useHistory();
  const faireRedirection = () =>{ 
    let url = props.url;
    history.push(url)
    try{
      props.requestHTTP()
    }catch(e){console.log("no props requestHTTP")}
  }

  return (
      <Button color="primary" className="px-4" onClick={faireRedirection}>{props.text}</Button>
  )
}
export default Bouttonnavigation;