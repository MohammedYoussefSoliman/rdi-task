import React from "react";
import { Global, css } from "@emotion/react";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        ul {
          list-style: none;
        }

        a {
          text-decoration: none;
          color: inherit;
          &:hover {
            text-decoration: none;
          }
        }

        img {
          display: block;
        }

        ul {
          margin: 0 !important;
        }

        body {
          width: 100%;
          white-space: normal;
          background-color: #f1f1f1;
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      `}
    />
  );
}
