/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import IconCircle from "../assets/alert-circle.png";
import IconFrown from "../assets/alert-frown.png";
import IconTriangle from "../assets/alert-triangle.png";
import IconCheck from "../assets/check-circle.png";

export function Alert(props) {
  const allIcon = [IconFrown, IconTriangle, IconCircle, IconCheck];
  const colorBox = ["#F9C8C8", "#F9D9C8", "#F9EBC8", "#CEF7CD"];

  return (
    <div
      css={css`
        width: 650px;
        height: 76px;
        flex-shrink: 0;
        border-radius: 10px;
        background-color: ${colorBox[props.index]};
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <img
        src={allIcon[props.index]}
        css={css`
          width: 24px;
          height: 24px;
        `}
      ></img>
      <span
        css={css`
          width: 545px;
          height: 33px;
          flex-shrink: 0;
          color: #444;
          font-family: Kanit;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          text-align: start;
          margin-left: 25px;
        `}
      >
        {props.text}
      </span>
    </div>
  );
}
