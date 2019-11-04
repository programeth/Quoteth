import React from "react";
import verifySignature from "./utils";

import Angelou from './assets/Angelou.png';
import Bowie from './assets/Bowie.png';
import Dickenson from './assets/Dickenson.png';
import Fitzgerald from './assets/Fitzgerald.png';
import Head from './assets/Head.png';
import Hemmingway from './assets/Hemmingway.png';
import Jobs from './assets/Jobs.png';
import King from './assets/King.png';
import Lee from './assets/Lee.png';
import Lincoln from './assets/Lincoln.png';

import "./Quoteth.scss";

const ACCOUNTS = [
  { owner: "Ernest Hemmingway", address: "0x2036E853056950a5BE8e302c644Ec24869ba4773", image: Hemmingway},
  { owner: "Davie Bowie", address: "0xeBA608e82369765907ABc4d63699C6FfF4D0cCBE", image: Bowie},
  { owner: "F Scott Fitzgerald", address: "0x3C173302275d143865d51be5237E3a5758472af7", image: Fitzgerald},
  { owner: "Martin Luther King Jr", address: "0x8bd342c6975F22645ced7403feB1Ca202Bc66340", image: King},
  { owner: "Harper Lee", address: "0xADECeC0AB55D8dDf2511b401d4E372D046D19FA6", image: Lee},
  { owner: "Maya Angelou", address: "0xd7DcAf3EeF4fAEd1ED905C62398392086a3A5Dd0", image: Angelou},
  { owner: "Abraham Lincoln", address: "0xe37B4D0269e96e8996Ab9d43a71c8944984ebD4B", image: Lincoln},
  { owner: "Steve Jobs", address: "0x63726FAb48c7D92139fFaB12e5F1c32C8264658F", image: Jobs},
  { owner: "Edith Head", address: "0x8FB76EDb9818F8db2F1c28cC8928799199B7E8eC", image: Head},
  { owner: "Emily Dickenson", address: "0x65e73b57E26B3F19A2A75Fcb6a4dbb07AA462Be8", image: Dickenson}
];
const SIGNED_MESSAGES = [
  {
    message: "The best way to predict your future is to create it.",
    signature: "0xdec8041ea128b74d897626d0467e24d502310aa9291fa1c3c3d6fe8b0cbdf42e4ae56f07664795b6c177fc2a393a59551eb0a97a6fe43fd343ebae1225e27b6f1b",
    possibleSigners: [ACCOUNTS[7], ACCOUNTS[6]]
  },
  {
    message: "He who is devoid of the power to forgive is devoid of the power to love.",
    signature: "0xc92ba4513701f3de80a5584a1e6d2b3e683d264d3d9c153d4f236df1b90910440706cb1ad17b5c8446c341489d32e3871b7a44dccbb6b1199a06dfbacd795b111b",
    possibleSigners: [ACCOUNTS[3], ACCOUNTS[9]]
  },
  {
    message: "You don't write because you want to say something, you write because you have something to say.",
    signature: "0x37f8bd84c0d802f27acffde99e9e8cde82022e021f889586cab851faecce7dc81735ca96c80ff4f13b42acf5abc9be6209bd30ec39f6e9e21e49630ec20de2b61c",
    possibleSigners: [ACCOUNTS[2], ACCOUNTS[0]]
  },
  {
    message: "Lightning makes no sound until it strikes.",
    signature: "0x2d60c76af76abf606a009e87f6aa845d09504ea473375eccca762fb06c51518875b4eb2a2bc0927498ed5071a2961d61ec033a4a5f0165e68d1b3c0de9c35c811b",
    possibleSigners: [ACCOUNTS[8], ACCOUNTS[3]]
  },
  {
    message: "Courage is grace under pressure.",
    signature: "0x8fb10b639774b675b938483369219950fcdfa862b77463dd40a0d3042dc8c3d012904d00215ba7aaf06c46c3342b15360d47b3b8ac9330cf336be4a35f66b5e61b",
    possibleSigners: [ACCOUNTS[0], ACCOUNTS[9]]
  },
  {
    message: "You never really understand a person until you consider things from his point of view.",
    signature: "0xfb242d54e46bece6365978d4dc06ae073e94d1cbc180b61603472de378721dd12b375923c45e4a5a05e1562b9615b40d2d2accab3e964c802a8d8f45685b6b431b",
    possibleSigners: [ACCOUNTS[3], ACCOUNTS[4]]
  },
  {
    message: "Innovation distinguishes between a leader and a follower.",
    signature: "0xefa0d00f62a58cdf9d3288fae0bd7bb559577b38c8829d576267ef861b3e79924477b7f61247bddd8dfadf9451b5b472cb60c13d12445b74d698dec6edc2939b1c",
    possibleSigners: [ACCOUNTS[8], ACCOUNTS[7]]
  },
  {
    message: "You would think that a rock star being married to a supermodel would be one of the greatest things in the world. It is.",
    signature: "0xbdf95611e775c9a16f33d1fa9ff2269aad48cdb8f9e01045f3e0ff9e068aa0921b545d65d1870f4b9bb019de32b4299dc19e11befbf3ca58d284cff4ebbf60e01c",
    possibleSigners: [ACCOUNTS[5], ACCOUNTS[1]]
  },
  {
    message: "That it will never come again is what makes life so sweet.",
    signature: "0xa67e6bbb9ac251010a05c2ccccaf4e1fe5c940ef3664293c36df704ac560f6d5131a1b3fc1733a29e23253c1fe341ad00f721198a69c173700e7dcbbe6287b021c",
    possibleSigners: [ACCOUNTS[9], ACCOUNTS[6]]
  },
  {
    message: "You can only become truly accomplished at something you love.",
    signature: "0x71b674f148be2165beb40981b9e3115fc8f53fa40a6df06e049620447eea9ad97b3929bff00f2eb7f98ce0906729e9832dea0a40942ba7b048173a57423301bc1b",
    possibleSigners: [ACCOUNTS[5], ACCOUNTS[7]]
  },
  {
    message: "You can have anything you want in life if you dress for it.",
    signature: "0xdfe4c4aaa043646aa4fec1afc14be6ff960afcc40e68026c2b8a3d458826e7ff2c417ed690e89ca773f6ef08c4892b8eba0d793edd47b1866f8cd375dc25e4991c",
    possibleSigners: [ACCOUNTS[2], ACCOUNTS[8]]
  },
  {
    message: "It's not time to worry yet.",
    signature: "0xf9f483f3584c4acc205a9ff4a7b874135766d8a1eb585604592339305cb3c5f76c22a51313f0cf1ed767b8d49854857d5d327bb4caebf6cf3f0f3747172874361c",
    possibleSigners: [ACCOUNTS[0], ACCOUNTS[4]]
  },
  {
    message: "You can’t use up creativity. The more you use, the more you have.",
    signature: "0x1d5d0bd97f06209d42666c11a2936480106098bf5b6280f1bc9f40bd14244e4f1f6917476b7152ee93af731d305d5a38692031ab254cc5981c5faad8aa7b46a41b",
    possibleSigners: [ACCOUNTS[1], ACCOUNTS[5]]
  },
  {
    message: "No matter how much cats fight, there always seem to be plenty of kittens.",
    signature: "0x8fe19802fbba8bd295f3144f0a227708e9f1f938752a9ac2e133e3cb754989be434779386da6923f5367bf77cdf80dc6881a09869036ecca4eb53405a576d03d1b",
    possibleSigners: [ACCOUNTS[6], ACCOUNTS[4]]
  },
  {
    message: "I don't know where I'm going from here, but I promise it won't be boring.",
    signature: "0x3b6e68eb2daf0c37f03209dc16aa84136b1c85b0270202d0ea50732d17fd96c00cd5eac5519de889006158c452bfe8dd7f689981ca3fda0b04efa1831b4be5831b",
    possibleSigners: [ACCOUNTS[1], ACCOUNTS[2]]
  },
];

function Intro() {
  return (
    <div className="intro">
      <div style={{
        display: "table",
        margin: "0 auto",
        width: "600px"
      }}>
        { ACCOUNTS.map((account, i) => {
          return (
            <div key={i}
              style={{
                display: 'table-row',
              }}>
              <div style={{
                display: 'table-cell',
                textAlign: 'right',
                paddingRight: '10px'
              }}>{account.owner}</div>
              <div className="hex" style={{
                display: 'table-cell',
              }}>{account.address}</div>
            </div>
          );
        }) }
      </div>
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
          let className = "name";
          if(signedMessage.guess && signedMessage.guess.signer === account) {
            className += " guess";
          }

          const clickHandler = signedMessage.guess ? undefined : (() => onGuess(signedMessage, account));

          return (
            <div className={className} key={i}>
              <div className="portrait-container">
                <div className="frame"
                  onClick={clickHandler}>
                  <div className="portrait"
                    style={{
                      "backgroundImage": `url(${account.image})`,
                    }}></div>
                </div>
              </div>
              <button onClick={clickHandler}>{account.owner}</button>
              <div className="address">with address<br/><span className="hex">{account.address}</span></div>
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
      signedMessages: SIGNED_MESSAGES,
      numCorrect: 0,
      numAnswered: 0,
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
        console.log("All done");
      }
    });
  };

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
        <div className="content">
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
      </div>
    );
  }
}

export default Quoteth;