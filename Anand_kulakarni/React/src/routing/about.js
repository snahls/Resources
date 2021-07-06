import { useParams } from "react-router";
const AboutUs =(props)=>{
    let {org}=useParams();
    return <h1>About {org} Page</h1>
}

export default AboutUs;

