import * as motion from "motion/react-client"
import { html } from "motion/react-m";



function About() {
  return (
    <div className="about-page">
       <motion.div
            style={box}
             
            animate={{ rotate: 260 }}
            transition={{ duration: 2 }}
        />
    
    </div>

  );
}       


const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
    
    
    
}
export default About;