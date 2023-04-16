type TypingOptions = {
  typeSpeed: number;
  deleteSpeed: number;
  waitBetweenWords: number;
  waitBeforeDelete: number;
  shouldWriteWholeWord: boolean;
  shouldStopAfterComplete: boolean;
};

let waitBeforeDeleteTimeout = 0;
let waitBetweenWordsTimeout = 0;

const autoTyping = async (
  HTMLEL: HTMLElement,
  text: string[],
  options = {} as Partial<TypingOptions>
) => {
  const {
    deleteSpeed = 150,
    shouldStopAfterComplete = false,
    shouldWriteWholeWord = false,
    typeSpeed = 150,
    waitBeforeDelete = 1000,
    waitBetweenWords = 1000,
  } = options;

  // 1- Loop through text
  for (let i = 0; i < text.length; i++) {
    const word = text[i];
    let lastText = false;
    // Put in chars the characters of the sentence or the whole word to write intervally
    let chars = word.split("");
    if (shouldWriteWholeWord) {
      chars = [word];
    }

    // reset the loop counter
    if (i === text.length - 1) {
      if (shouldStopAfterComplete) lastText = true;
      else i = -1;
    }

    // write arr of chars
    await writeText(
      HTMLEL,
      chars,
      {
        deleteSpeed,
        shouldStopAfterComplete,
        shouldWriteWholeWord,
        typeSpeed,
        waitBeforeDelete,
        waitBetweenWords,
      },
      lastText
    );

    clearTimeout(waitBetweenWordsTimeout);
    clearTimeout(waitBeforeDeleteTimeout);
  }
};

const writeText = (
  HTMLEL: HTMLElement,
  chars: string[],
  options: TypingOptions,
  lastText: boolean
) => {
  return new Promise<void>((resolve) => {
    const writeIntervalRef = setInterval(() => {
      const firstLetter = chars.shift();
      HTMLEL.innerHTML += firstLetter;
      if (chars.length === 0) {
        clearInterval(writeIntervalRef);
        if (!lastText) {
          removeText(HTMLEL, options, resolve);
        }
      }
    }, options.typeSpeed);
  });
};

const removeText = async (
  HTMLEL: HTMLElement,
  options: TypingOptions,
  resolve: () => void
) => {
  // start to remove the writed sentence
  waitBeforeDeleteTimeout = setTimeout(() => {
    const removeIntervalRef = setInterval(() => {
      const text = HTMLEL.innerText;

      // remove the latest char and set the result to HTMLEL
      HTMLEL.innerText = text.substring(0, text.length - 1);
      // remove the whole word if shouldWriteWholeWord activated
      if (options.shouldWriteWholeWord) {
        HTMLEL.innerText = "";
      }
      // after removing the text , clear the interval and resolve the promise
      if (HTMLEL.innerText.length === 0) {
        clearInterval(removeIntervalRef);
        waitBetweenWordsTimeout = setTimeout(() => {
          return resolve();
        }, options.waitBetweenWords);
      }
    }, options.deleteSpeed);
  }, options.waitBeforeDelete);
};

export default autoTyping;
