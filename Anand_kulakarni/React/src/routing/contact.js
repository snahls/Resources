import * as QueryString from 'query-string';
import { useHistory } from 'react-router';

const ContactUs =(props)=>{
    const allQueryParams=QueryString.parse(props.location.search);
    const fname=allQueryParams.fname;
    let history=useHistory();
    const goToHome=()=>{
        history.push('/');
    }
    return <div>
        <h1>Contact {fname} Page</h1>
        <input type="button" value="Home" onClick={goToHome}/>
        </div>
}

export default ContactUs;

