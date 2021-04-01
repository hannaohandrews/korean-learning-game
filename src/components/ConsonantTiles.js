/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import { Fragment } from 'react';

export default function ConsonantTiles() {
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

  const korean = koreanEnglishConsonants.map((i) => {
    return Object.keys(i);
  });

  const english = koreanEnglishConsonants.map((i) => {
    return Object.values(i);
  });

  const gridStyling = css`
    display: grid;
    border: 1px black;
    grid-template-columns: repeat(2, 50px);
  `;

  return (
    <Fragment>
      <div className="container-tile" css={gridStyling}>
        <div>{korean}</div>
        <div>{english}</div>
      </div>
    </Fragment>
  );
}
