import React from "react";
import verifySignature from "utils/verifySignature";
import ResultsWindow from "components/ResultsWindow";
import ACCOUNTS from "constants/Accounts";
import QUOTES from "constants/Quotes";

import "./Quoteth.scss";

const AVOW_URL = "https://michaelvandaniker.com/sylph/avow";

function Intro() {
  return (
    <div className="intro">
      <h2>Famous quotes, cryptograhpically signed</h2>
      <p>
        Message signatures on Ethereum can be used to prove you made a particular statement.
        How? The trio of an Ethereum address, message, and signature can only be <i>generated</i> by the owner of that Ethereum
        address, but their authenticiy can be <i>verified</i> by anyone.
      </p>
      <p>
        Here are ten Ethereum addresses assigned to famous quotable individuals.
      </p>
      <div className="accounts">
        { ACCOUNTS.map((account, i) => {
          return (
            <div className="entry" key={i}>
              <div className="owner">{account.owner}</div>
              <div className="address includes-hex hex">{account.address}</div>
            </div>
          );
        }) }
      </div>
      <p>
        Each address was used to sign messages containing some of their most well-known quotes. Can you correctly identify which quotes
        came from which people?
      </p>
      <p>
        Since the addresses, messages, and signatures are all available, you don't even have to guess! You can easily score 100% on this quiz
        by using an Ethereum signature verification tool (like <a href={AVOW_URL + "/verify"} target="_blank" rel="noopener noreferrer">Avow</a>!)
        to see which address + signature pairs match with the quotes.
      </p>
    </div>
  );
}

function Message({signedMessage, onGuess}) {
  let messageClassName = "message";
  if(signedMessage.guess) {
    messageClassName += " guessed";
    if(verifySignature(signedMessage.guess.signer.address, signedMessage.message, signedMessage.signature)) {
      messageClassName += " correctly";
    } else {
      messageClassName += " incorrectly";
    }
  }

  return (
    <div className={messageClassName}>
      <div className="message-body">{signedMessage.message}</div>
      <div className="question-text">Who signed this message?</div>
        
      <div className="possible-signers">
        { signedMessage.possibleSigners.map((account, i) => {
          let className = "possible-signer";
          if(signedMessage.guess && signedMessage.guess.signer === account) {
            className += " guess";
          }

          const clickHandler = signedMessage.guess ? undefined : (() => onGuess(signedMessage, account));

          const avowLink = AVOW_URL + `/verify?address=${account.address}&message=${signedMessage.message}&signature=${signedMessage.signature}`

          return (
            <div className={className} key={i}>
              <div className="portrait-container">
                <div className="frame" onClick={clickHandler}>
                  <img className="portrait" src={account.image} alt="" />
                </div>
              </div>
              <button onClick={clickHandler}>{account.owner}</button>
              <div className="address">with address<br/><span className="hex includes-hex">{account.address}</span></div>
              <div className="avow-link">
                <a href={avowLink} target="_blank" rel="noopener noreferrer">Verify in Avow</a>
              </div>
            </div>
          );
        }) }
      </div>
      
      <div>
        <div className="label">Signature:</div>
        <div className="message-signature includes-hex hex">
          {signedMessage.signature}
        </div>
      </div>
    </div>
  );
}

class Quoteth extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      signedMessages: QUOTES,
      numCorrect: 0,
      numAnswered: 0,
      resultsVisible: false,
    };
  }

  makeGuess = (signedMessage, possibleSigner) => {
    const {
      numCorrect,
      numAnswered,
    } = this.state;

    signedMessage.guess = {
      signer: possibleSigner,
    };

    let newNumCorrect = numCorrect;
    if(verifySignature(possibleSigner.address, signedMessage.message, signedMessage.signature)) {
      newNumCorrect++;
    }

    this.setState({
      numCorrect: newNumCorrect,
      numAnswered: numAnswered + 1,
    }, () => {
      if(this.state.numAnswered === this.state.signedMessages.length) {
        setTimeout(this.showResults, 0); // Let the user see the result of their last guess before showing the results
      }
    });
  };

  showResults = () => {
    this.setState({
      resultsVisible: true
    });

    // Don't allow the page to be scrolled while the popup is open. It will
    // handle scrolling its own content, and we don't want two scroll bars.
    document.getElementsByTagName("html")[0].style = "overflow:hidden";
  };

  hideResults = () => {
    this.setState({
      resultsVisible: false
    });
    document.getElementsByTagName("html")[0].style = "overflow:auto";
  }

  render() {
    const {
      signedMessages,
    } = this.state;

    return (
      <div className="Quoteth">
        <header>
          <h1>Q U O T E T H</h1>
          <h2>Ethereum signatures in action</h2>
          <p>By <a href="https://michaelvandaniker.com">Michael VanDaniker</a></p>
        </header>
        <div className="container">
          <div className="box">
            <Intro />
            <hr />
            { signedMessages.map((signedMessage, i) => {
              return (
                <div key={i}>
                  <Message signedMessage={signedMessage}
                    onGuess={this.makeGuess} />
                  { i !== signedMessages.length - 1 && <hr /> }
                </div>
              );
            }) }
          </div>
        </div>
        { this.state.resultsVisible &&
          <ResultsWindow numCorrect={this.state.numCorrect}
            total={signedMessages.length}
            onClose={this.hideResults}/>
        }
      </div>
    );
  }
}

export default Quoteth;
