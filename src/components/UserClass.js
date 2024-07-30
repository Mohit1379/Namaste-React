import React from 'react';

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        console.log("first child constructor")
    }

    componentDidMount(){
        console.log("first child ComponentDidMount");
    }
    render(){
        const {name,location,contact}=this.props;
        const {count}=this.state;
        const handleClick =()=>{
            this.setState({
                count:count+1
            })
        }
        console.log("first child render")
      
        return (
            <div style={{border:"1px solid black", padding:"20px"}}>
                <h1>Count : {count}</h1>
                <button onClick={handleClick}>increase count</button>
               <h2>
                    Name: {name}
                </h2>
                <h3>
                    Location: {location}
                </h3>
                <h4>
                    Contact: {contact}
                </h4>
            </div>
          )
    }
}

export default UserClass;