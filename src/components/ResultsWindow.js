import React from "react";
import PERFECT from 'assets/resultGifs/perfect.gif';
import GOOD from 'assets/resultGifs/good.gif';
import BAD from 'assets/resultGifs/bad.gif';
import REALLY_BAD from 'assets/resultGifs/really-bad.gif';

import "./ResultsWindow.scss";

class ResultsWindow extends React.Component {

  handleClick = event => {
    // Close the window if the user clicked the modal background or the close button
    if(['ResultsWindow modal-background', 'close-button'].indexOf(event.target.className) !== -1) {
      this.props.onClose();
    }
  }

  render() {
    const {
      numCorrect,
      total,
      onClose,
    } = this.props;

    let commentary = "";
    const percentage = numCorrect / total;
    if(percentage > 0.9) {
      commentary = (
        <div>
          <p>You really know your famous quotes!</p>
          <p><img src={PERFECT} alt=""/></p>
        </div>
      );
    } else if(percentage > 0.8) {
      commentary = (
        <div>
          <p>That's pretty good!</p>
          <p><img src={GOOD} alt=""/></p>
        </div> 
      );
    } else if(percentage > 0.6) {
      commentary = (
        <div>
          <p>Hey, at least it's over, right?</p>
          <p><img src={BAD} alt=""/></p>
        </div>
      );
    } else {
      commentary = (
        <div>
          <p>That was rough, huh?</p>
          <p><img src={REALLY_BAD} alt=""/></p>
        </div>
      );
    }

    return (
      <div className="ResultsWindow modal-background"
        onClick={this.handleClick}>
        <div className="window">
          <div className="window-header">
            <div className="close-button">X</div>
          </div>
          <div className="window-content">
            <h2>Results</h2>
            <p>You got {numCorrect} out of {total} right.</p>
            {commentary}
            
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  }

}

ResultsWindow.defaultProps = {
  numCorrect: NaN,
  total: NaN,
  onClose: () => {},
};

export default ResultsWindow;