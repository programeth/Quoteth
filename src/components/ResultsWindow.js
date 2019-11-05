import React from "react";

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
    } = this.props;

    let commentary = "";
    const percentage = numCorrect / total;
    if(percentage > 0.85) {
      commentary = "You really know your famous quotes!";
    } else if(percentage > 0.70) {
      commentary = "That's pretty good!";
    } else if(percentage > 0.55) {
      commentary = "At least it's over.";
    } else {
      commentary = "That was rough, huh?";
    }

    return (
      <div className="ResultsWindow modal-background"
        onClick={this.handleClick}>
        <div className="window">
          <div className="window-header">
            <div className="close-button">X</div>
          </div>
          <div className="window-content">
            <p>You got {numCorrect} out of {total}!</p>
            <p>{commentary}</p>
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