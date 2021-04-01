import { jsx, css } from '@emotion/core';

export default function HangeulConsonants() {
  const koreanConsonants = 'ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ';

  const koreanEnglishConsonants = [
    { ㄱ: 'g' },
    { ㄴ: 'n' },
    { ㄷ: 'd' },
    { ㄹ: 'r,l' },
    { ㅁ: 'm' },
    { ㅂ: 'b' },
    { ㅅ: 's' },
    { ㅇ: 'o' },
    { ㅈ: 'j' },
    { ㅊ: 'ch' },
    { ㅋ: 'k' },
    { ㅌ: 't' },
    { ㅍ: 'p' },
    { ㅎ: 'h' },
  ];

  const koreanEnglishConsonantsPairs = koreanEnglishConsonants.map((i) => {
    const korean = Object.keys(koreanEnglishConsonants[i]);
    const english = Object.values(koreanEnglishConsonants[i]);
  });

  return <Fragment>HELLO</Fragment>;
}
