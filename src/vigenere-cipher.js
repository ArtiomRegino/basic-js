class VigenereCipheringMachine {
  alphabetical;
  isDirect;

  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabetical = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  }

  encrypt(message, key) {

    if(message === undefined || key === undefined ) {
      throw Error('Not this time');
    }

    let encrypted = [];
    let msg = message.toUpperCase().split('');
    let localKey = key.toUpperCase().split('');
    let keyIndex = 0;

    for (let curInd = 0; curInd < msg.length; curInd++) {
      let curLetterInd = this.alphabetical.indexOf(msg[curInd]);
      if (curLetterInd != -1) {
      	let curKeyLetter = localKey[keyIndex];
        let sum = curLetterInd + this.alphabetical.indexOf(curKeyLetter);
        let encLetterInd = sum >= 26 ? sum - 26 : sum;

        encrypted.push(this.alphabetical[encLetterInd]);

        if(localKey.length - 1 == keyIndex) {
          keyIndex = 0;
        }
        else {
        	keyIndex += 1;
        }
      }
      else {
        encrypted.push(msg[curInd]);
      }
    }
    
    return encrypted.join('');
}

  decrypt(encryptedMessage, key) {
    if(encryptedMessage === undefined || key === undefined ) {
      throw Error('Not this time');
    }

    let decrypted = [];
    let msg = encryptedMessage.toUpperCase().split('');
    let localKey = key.toUpperCase().split('');
    let keyIndex = 0;

    for (let curInd = 0; curInd < msg.length; curInd++) {
      let curLetterInd = this.alphabetical.indexOf(msg[curInd]);
      if (curLetterInd != -1) {
      	let curKeyLetter = localKey[keyIndex];
        let diff = curLetterInd - this.alphabetical.indexOf(curKeyLetter);
        let encLetterInd = diff < 0 ? diff + 26 : diff;

        decrypted.push(this.alphabetical[encLetterInd]);

        if(localKey.length - 1 == keyIndex) {
          keyIndex = 0;
        }
        else {
        	keyIndex += 1;
        }
      }
      else {
        decrypted.push(msg[curInd]);
      }
    }
    
    return decrypted.join('');
  }
}

module.exports = VigenereCipheringMachine;
