import React, { Component } from 'react';

class App extends Component {

  firstPlayer = 'X';
  secondPlayer = 'O';

  state = {
    playerPlaying: 'X',
    nextPlayer: 'O',
    oneone: null,
    onetwo: null,
    onethree: null,
    twoone: null,
    twotwo: null,
    twothree: null,
    threeone: null,
    threetwo: null,
    threethree: null,
    currentDisplay: null,
    x: 0
  }

  changeOneOneDisplay = () => (
    this.setState({ oneone: this.state.playerPlaying }),
    this.state.playerPlaying === 'X' ? this.setState({ playerPlaying: 'O' }) : this.setState({ x: 1 }),
    this.state.playerPlaying === 'O' ? this.setState({ playerPlaying: 'X' }) : this.setState({ x: 2 })
  )
  changeOneTwoDisplay = () => (
    this.setState({ onetwo: this.state.playerPlaying }),
    this.state.playerPlaying === 'X' ? this.setState({ playerPlaying: 'O' }) : this.setState({ x: 1 }),
    this.state.playerPlaying === 'O' ? this.setState({ playerPlaying: 'X' }) : this.setState({ x: 2 })
  )
  changeOneThreeDisplay = () => (
    this.setState({ onethree: this.state.playerPlaying }),
    this.state.playerPlaying === 'X' ? this.setState({ playerPlaying: 'O' }) : this.setState({ x: 1 }),
    this.state.playerPlaying === 'O' ? this.setState({ playerPlaying: 'X' }) : this.setState({ x: 2 })
  )
  changeTwoOneDisplay = () => (
    this.setState({ twoone: this.state.playerPlaying }),
    this.state.playerPlaying === 'X' ? this.setState({ playerPlaying: 'O' }) : this.setState({ x: 1 }),
    this.state.playerPlaying === 'O' ? this.setState({ playerPlaying: 'X' }) : this.setState({ x: 2 })
  )
  changeTwoTwoDisplay = () => (
    this.setState({ twotwo: this.state.playerPlaying }),
    this.state.playerPlaying === 'X' ? this.setState({ playerPlaying: 'O' }) : this.setState({ x: 1 }),
    this.state.playerPlaying === 'O' ? this.setState({ playerPlaying: 'X' }) : this.setState({ x: 2 })
  )
  changeTwoThreeDisplay = () => (
    this.setState({ twothree: this.state.playerPlaying }),
    this.state.playerPlaying === 'X' ? this.setState({ playerPlaying: 'O' }) : this.setState({ x: 1 }),
    this.state.playerPlaying === 'O' ? this.setState({ playerPlaying: 'X' }) : this.setState({ x: 2 })
  )
  changeThreeOneDisplay = () => (
    this.setState({ threeone: this.state.playerPlaying }),
    this.state.playerPlaying === 'X' ? this.setState({ playerPlaying: 'O' }) : this.setState({ x: 1 }),
    this.state.playerPlaying === 'O' ? this.setState({ playerPlaying: 'X' }) : this.setState({ x: 2 })
  )
  changeThreeTwoDisplay = () => (
    this.setState({ threetwo: this.state.playerPlaying }),
    this.state.playerPlaying === 'X' ? this.setState({ playerPlaying: 'O' }) : this.setState({ x: 1 }),
    this.state.playerPlaying === 'O' ? this.setState({ playerPlaying: 'X' }) : this.setState({ x: 2 })
  )
  changeThreeThreeDisplay = () => (
    this.setState({ threethree: this.state.playerPlaying }),
    this.state.playerPlaying === 'X' ? this.setState({ playerPlaying: 'O' }) : this.setState({ x: 1 }),
    this.state.playerPlaying === 'O' ? this.setState({ playerPlaying: 'X' }) : this.setState({ x: 2 })
  )
  reset = () => (
    this.setState({ oneone: null }),
    this.setState({ onetwo: null }),
    this.setState({ onethree: null }),
    this.setState({ twoone: null }),
    this.setState({ twotwo: null }),
    this.setState({ twothree: null }),
    this.setState({ threeone: null }),
    this.setState({ threetwo: null }),
    this.setState({ threethree: null }),
    this.setState({ playerPlaying: 'X' })
  )


  render() {
    const gridStyle = {
      border: '2px black solid',
      width: '150px',
      height: '150px',
      marginRight: '30px',
    }
    const columnFlexi = {
      display: 'flex',
      flexDirection: 'column'
    }
    const rowFlexi = {
      display: 'flex',
      flexDirection: 'row'
    }
    const playerStyle = {
      fontFamily: 'Arial',
      fontSize: '50px',
      marginLeft: '50px'
    }
    const reset = {
      border: '2px #0056e0 solid',
      backgroundColor: '#1000c4',
      color: 'white',
      borderRadius: '5px',
      width: '120px',
      height: '30px',
      fontFamily: 'verdana',
      fontSize: '20px'
    }
    return (
      <div className="App">
        <h1>Welcome to my Tic-Tac-Toe</h1>
        <div>
          <button style={reset} onClick={() => this.reset()}>Reset All</button>
        </div>
        <div style={columnFlexi}>
          <div style={rowFlexi}>
            <p style={gridStyle} onClick={() => this.changeOneOneDisplay()}>
              <p style={playerStyle}>{this.state.oneone}</p>
            </p>
            <p style={gridStyle} onClick={() => this.changeOneTwoDisplay()}>
              <p style={playerStyle}>{this.state.onetwo}</p>
            </p>
            <p style={gridStyle} onClick={() => this.changeOneThreeDisplay()}>
              <p style={playerStyle}>{this.state.onethree}</p>
            </p>
          </div>
          <div style={rowFlexi}>
            <p style={gridStyle} onClick={() => this.changeTwoOneDisplay()}>
              <p style={playerStyle}>{this.state.twoone}</p>
            </p>
            <p style={gridStyle} onClick={() => this.changeTwoTwoDisplay()}>
              <p style={playerStyle}>{this.state.twotwo}</p>
            </p>
            <p style={gridStyle} onClick={() => this.changeTwoThreeDisplay()}>
              <p style={playerStyle}>{this.state.twothree}</p>
            </p>
          </div>
          <div style={rowFlexi}>
            <p style={gridStyle} onClick={() => this.changeThreeOneDisplay()}>
              <p style={playerStyle}>{this.state.threeone}</p>
            </p>
            <p style={gridStyle} onClick={() => this.changeThreeTwoDisplay()}>
              <p style={playerStyle}>{this.state.threetwo}</p>
            </p>
            <p style={gridStyle} onClick={() => this.changeThreeThreeDisplay()}>
              <p style={playerStyle}>{this.state.threethree}</p>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
