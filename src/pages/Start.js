import React from 'react';

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showExtra: false,
      textExtra: '',
    };
  }

  reactiveTest(text) {
    this.setState({showExtra: !this.state.showExtra});
    this.setState({textExtra: text});
  }

  render() {
    return (
        <div id={this.props.id}>
          <h1>vParty</h1>
          <div>
            Welcome vkParty, the ultimate platform to organize all the
            for your super amazing party.
          </div>
          <div>
            <button onClick={this.props.go} data-to="ideation">
              Let's go
            </button>
          </div>
        </div>
    );
  }
}

export default Start;
