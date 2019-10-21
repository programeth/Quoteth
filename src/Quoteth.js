import React from "react";
import verifySignature from "./utils";

import "./Quoteth.scss";

const accounts = [
  { owner: "Ernest Hemmingway", address: "0x2036E853056950a5BE8e302c644Ec24869ba4773"},
  { owner: "Davie Bowie", address: "0xeBA608e82369765907ABc4d63699C6FfF4D0cCBE"},
  { owner: "F Scott Fitzgerald", address: "0x3C173302275d143865d51be5237E3a5758472af7"},
  { owner: "Martin Luther King Jr", address: "0x8bd342c6975F22645ced7403feB1Ca202Bc66340"},
  { owner: "Harper Lee", address: "0xADECeC0AB55D8dDf2511b401d4E372D046D19FA6"},
  { owner: "Woodrow Wilson", address: "0xd7DcAf3EeF4fAEd1ED905C62398392086a3A5Dd0"},
  { owner: "Abraham Lincoln", address: "0xe37B4D0269e96e8996Ab9d43a71c8944984ebD4B"},
  { owner: "Steve Jobs", address: "0x63726FAb48c7D92139fFaB12e5F1c32C8264658F"},
  { owner: "Walt Disney", address: "0x8FB76EDb9818F8db2F1c28cC8928799199B7E8eC"},
  { owner: "Carl Sagan", address: "0x65e73b57E26B3F19A2A75Fcb6a4dbb07AA462Be8"}
];
const signedMessages = [
  {
    message: "The best way to predict your future is to create it.",
    signature: "0xdec8041ea128b74d897626d0467e24d502310aa9291fa1c3c3d6fe8b0cbdf42e4ae56f07664795b6c177fc2a393a59551eb0a97a6fe43fd343ebae1225e27b6f1b",
    possibleSigners: [accounts[7], accounts[6]]
  },
  {
    message: "Lightning makes no sound until it strikes.",
    signature: "0x2d60c76af76abf606a009e87f6aa845d09504ea473375eccca762fb06c51518875b4eb2a2bc0927498ed5071a2961d61ec033a4a5f0165e68d1b3c0de9c35c811b",
    possibleSigners: [accounts[6], accounts[3]]
  },
  {
    message: "You never really understand a person until you consider things from his point of view.",
    signature: "0xfb242d54e46bece6365978d4dc06ae073e94d1cbc180b61603472de378721dd12b375923c45e4a5a05e1562b9615b40d2d2accab3e964c802a8d8f45685b6b431b",
    possibleSigners: [accounts[3], accounts[4]]
  },  
  {
    message: "Courage is grace under pressure.",
    signature: "0x8fb10b639774b675b938483369219950fcdfa862b77463dd40a0d3042dc8c3d012904d00215ba7aaf06c46c3342b15360d47b3b8ac9330cf336be4a35f66b5e61b",
    possibleSigners: [accounts[0], accounts[1]]
  },
  {
    message: "You don't write because you want to say something, you write because you have something to say.",
    signature: "0x37f8bd84c0d802f27acffde99e9e8cde82022e021f889586cab851faecce7dc81735ca96c80ff4f13b42acf5abc9be6209bd30ec39f6e9e21e49630ec20de2b61c",
    possibleSigners: [accounts[0], accounts[2]]
  },
  {
    message: "Innovation distinguishes between a leader and a follower.",
    signature: "0xefa0d00f62a58cdf9d3288fae0bd7bb559577b38c8829d576267ef861b3e79924477b7f61247bddd8dfadf9451b5b472cb60c13d12445b74d698dec6edc2939b1c",
    possibleSigners: [accounts[8], accounts[7]]
  },
  {
    message: "He who is devoid of the power to forgive is devoid of the power to love.",
    signature: "0xc92ba4513701f3de80a5584a1e6d2b3e683d264d3d9c153d4f236df1b90910440706cb1ad17b5c8446c341489d32e3871b7a44dccbb6b1199a06dfbacd795b111b",
    possibleSigners: [accounts[3], accounts[4]]
  },
  {
    message: "Somewhere, something incredible is waiting to be known.",
    signature: "0x402d429abe14db751429c5deb16fd34f97c5050e5dcd5672e1d3976bed477aeb2ffc96f73ea450e39b1055ceecae90cc8ef0b9b63ab5acd80bda67430bdfa49f1c",
    possibleSigners: [accounts[7], accounts[9]]
  },
  {
    message: "It's not time to worry yet.",
    signature: "0xf9f483f3584c4acc205a9ff4a7b874135766d8a1eb585604592339305cb3c5f76c22a51313f0cf1ed767b8d49854857d5d327bb4caebf6cf3f0f3747172874361c",
    possibleSigners: [accounts[5], accounts[4]]
  },
  {
    message: "No matter how much cats fight, there always seem to be plenty of kittens.",
    signature: "0x8fe19802fbba8bd295f3144f0a227708e9f1f938752a9ac2e133e3cb754989be434779386da6923f5367bf77cdf80dc6881a09869036ecca4eb53405a576d03d1b",
    possibleSigners: [accounts[6], accounts[3]]
  },
  {
    message: "We keep moving forward, opening new doors, and doing new things, because we’re curious and curiosity keeps leading us down new paths.",
    signature: "0x68ec7f3388038ab055b0aeb4aca938b64f1cd83fe219a20d886638079d17f4682250971c40615008c7cbdc3cc81ade681b4f3972b8fb528c99642406f55755e41c",
    possibleSigners: [accounts[8], accounts[9]]
  },
  
  {
    message: "You would think that a rock star being married to a supermodel would be one of the greatest things in the world. It is.",
    signature: "0xbdf95611e775c9a16f33d1fa9ff2269aad48cdb8f9e01045f3e0ff9e068aa0921b545d65d1870f4b9bb019de32b4299dc19e11befbf3ca58d284cff4ebbf60e01c",
    possibleSigners: [accounts[5], accounts[1]]
  },
  {
    message: "The man who is swimming against the stream knows the strength of it.",
    signature: "0xa7bbbe2dcc59db7db510bca30b60d38c95bee5d77ceaf01449664ef7c42ceccb4e00cf9941f1491faf805ebc260e0706d10cb5c5cf1de61d0b9d5ebae10939ad1c",
    possibleSigners: [accounts[5], accounts[2]]
  },
  {
    message: "Get a good idea and stay with it. Dog it, and work at it until it’s done right.",
    signature: "0x43c4415e167040ae29ed8781b77c7b8ce4d3f4238abd484335e805b7e786951a3650b5a1ddb6f59982cc86b100a09a1d27ac1bb7048ec114bce43527aed844d91b",
    possibleSigners: [accounts[7], accounts[8]]
  },
  {
    message: "I don't know where I'm going from here, but I promise it won't be boring.",
    signature: "0x3b6e68eb2daf0c37f03209dc16aa84136b1c85b0270202d0ea50732d17fd96c00cd5eac5519de889006158c452bfe8dd7f689981ca3fda0b04efa1831b4be5831b",
    possibleSigners: [accounts[1], accounts[2]]
  },
];

class Quoteth extends React.Component {

  constructor() {
    super();

    /*
    signedMessages.forEach((signedMessage, i) => {
      signedMessage.possibleSigners.forEach(function(account) {
        if(verifySignature(account.address, signedMessage.message, signedMessage.signature)) {
          console.log(i + ". " + signedMessage.message);
          console.log("- " + account.owner);
          console.log();
        }
      });
    });
    */
  }

  checkSignature = (signedMessage, possibleSigner) => {
    const x = verifySignature(possibleSigner.address, signedMessage.message, signedMessage.signature);
    signedMessage.guess = {
      signer: possibleSigner,
      valid: x,
    };
    console.log( signedMessage);
    this.forceUpdate();
  }

  render() {
    return (
      <div className="Quoteth">
        { signedMessages.map((signedMessage, i) => {
          const p0 = signedMessage.possibleSigners[0];
          const p1 = signedMessage.possibleSigners[1];

          let className0 = "name ";
          let className1 = "name ";
          console.log(signedMessage.guess);
          if(signedMessage.guess) {
            if(signedMessage.guess.valid) {
              console.log("here")
              console.log(signedMessage.guess.signer, p1);
              if(signedMessage.guess.signer === p0) {
                className0 += "correct";
                className1 += "disabled";
              }
              if(signedMessage.guess.signer === p1) {
                console.log("123")
                className0 += "disabled";
                className1 += "correct";
              }
            } else {
              if(signedMessage.guess.signer === p0) {
                className0 += "incorrect";
                className1 += "disabled";
              }
              if(signedMessage.guess.signer === p1) {
                className0 += "disabled";
                className1 += "incorrect";
              }
            }
          } 

          return (
            <div className="message" key={i}>
              <div className="messaage-body">{signedMessage.message}</div>
              <div className="possible-signers">
                <div className={className0} onClick={ !signedMessage.guess && (() => this.checkSignature(signedMessage, p0))}>{p0.owner}</div>
                <div className={className1} onClick={ !signedMessage.guess && (() => this.checkSignature(signedMessage, p1))}>{p1.owner}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Quoteth;
