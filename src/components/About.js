import React from 'react';
import User from './User';
import UserClass from './UserClass';

class About extends React.Component{
    constructor(props){
        super(props)
        console.log("Parent Constructor")
    }
    componentDidMount(){
        console.log("Parent ComponentDidMount");
    }
    render(){
        console.log("Parent render")
        return (
                <div className='aboutUs'>
                   <h1>About Us</h1>
                   {/* <User name="Mohit Singh Shah" location="Dehradun" contact="mohitshah3.ms@gmail.com"/> */}
                   <UserClass name="Somesh Gusain" location="Dehradun" contact="somesh@gmail.com" />
                </div>
              )
    }
}
// function About() {
//   return (
//     <div className='aboutUs'>
//        <h1>About Us</h1>
//        {/* <User name="Mohit Singh Shah" location="Dehradun" contact="mohitshah3.ms@gmail.com"/> */}
//        <UserClass name="Somesh Gusain" location="Dehradun" contact="somesh@gmail.com" />
//     </div>
//   )
// }

export default About