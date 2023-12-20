/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
const primaryColor = "#074EE8";
const secondaryColor = "#07A4E8";
export function Button(props) {
  if (props.type === "Primary") {
    return (
      <button
        css={css`
          display: flex;
          width: 171.19px;
          height: 50px;
          padding: 0px 16px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
          border-radius: 4px;
          color: var(--Surface, #fff);
          font-family: Sarabun;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 18px;
          background-color: ${primaryColor};
        `}
      >
        Large
      </button>
    );
  } else if (props.type === "Secondary") {
    return (
      <button
        css={css`
          display: flex;
          width: 171.19px;
          height: 50px;
          padding: 0px 16px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
          border-radius: 4px;
          color: var(--Surface, #fff);
          font-family: Sarabun;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 18px;
          background-color: ${secondaryColor};
        `}
      >
        Large
      </button>
    );
  }

  return <button>Not match condition</button>;
}
