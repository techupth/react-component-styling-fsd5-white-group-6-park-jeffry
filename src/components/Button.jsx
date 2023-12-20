/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  if (props.type === "primary") {
    return (
      <button
        css={css`
          background-color: #074ee8;
          margin-bottom: 1.7rem;
          width: 171.19px;
          height: 50px;
          border-radius: 4px;
          font-weight: lighter;
        `}
      >
        Large
      </button>
    );
  } else if (props.type === "secondary") {
    return (
      <button
        css={css`
          background-color: #07a4e8;
          margin-bottom: 1.7rem;
          width: 171.19px;
          height: 50px;
          border-radius: 4px;
          font-weight: lighter;
        `}
      >
        Large
      </button>
    );
  }
}

export default Button;
