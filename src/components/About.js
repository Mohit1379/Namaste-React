import React from 'react';
import UserContext from '../../utils/UserContext';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='p-2 mx-auto text-2xl text-center mt-5'>
        About Us
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default About;
