/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import frownImage from "../images/frown.svg";
import alerttriangle from "../images/alert-triangle.svg";
import alertcircle from "../images/check-circle.svg";
import checkcircle from "../images/check-circle.svg";

function Alert(props) {
  if (props.type === "error") {
    return (
      <div
        css={css`
          width: 40.625rem;
          height: 4.75rem;
          border-radius: 0.625rem;
          background: #f9c8c8;
          display: flex;
          align-items: center;
          margin: 1.9rem 0rem 1.9rem 0rem;
        `}
      >
        <img
          src={frownImage}
          alt="error icon"
          css={css`
            margin-left: 1.5rem;
            margin-right: 1.2rem;
          `}
        />
        <h2
          css={css`
            color: #444444;
          `}
        >
          This is an error alert box
        </h2>
      </div>
    );
  } else if (props.type === "warning") {
    return (
      <div
        css={css`
          width: 40.625rem;
          height: 4.75rem;
          border-radius: 0.625rem;
          background: #f9d9c8;
          display: flex;
          align-items: center;
          margin: 1.9rem 0rem 1.9rem 0rem;
        `}
      >
        <img
          src={alerttriangle}
          alt="warning icon"
          css={css`
            margin-left: 1.5rem;
            margin-right: 1.2rem;
          `}
        />
        <h2
          css={css`
            color: #444444;
          `}
        >
          This is an warning alert box
        </h2>
      </div>
    );
  } else if (props.type === "info") {
    return (
      <div
        css={css`
          width: 40.625rem;
          height: 4.75rem;
          border-radius: 0.625rem;
          background: #f9ebc8;
          display: flex;
          align-items: center;
          margin: 1.9rem 0rem 1.9rem 0rem;
        `}
      >
        <img
          src={alertcircle}
          alt="info icon"
          css={css`
            margin-left: 1.5rem;
            margin-right: 1.2rem;
          `}
        />
        <h2
          css={css`
            color: #444444;
          `}
        >
          This is info alert box
        </h2>
      </div>
    );
  } else if (props.type === "success") {
    return (
      <div
        css={css`
          width: 40.625rem;
          height: 4.75rem;
          border-radius: 0.625rem;
          background: #cef7cd;
          display: flex;
          align-items: center;
          margin: 1.9rem 0rem 1.9rem 0rem;
        `}
      >
        <img
          src={checkcircle}
          alt="success icon"
          css={css`
            margin-left: 1.5rem;
            margin-right: 1.2rem;
          `}
        />
        <h2
          css={css`
            color: #444444;
          `}
        >
          This is success alert box
        </h2>
      </div>
    );
  }
}

export default Alert;
