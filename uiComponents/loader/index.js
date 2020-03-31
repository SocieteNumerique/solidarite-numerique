import React from 'react';
import constants from '../../constants';

const Loader = () => (
  <>
    <div className="loader">
      <div></div>
      <div></div>
    </div>
    <style jsx>{`
      .loader {
        display: inline-block;
        position: relative;
        width: 50px;
        height: 50px;
      }
      .loader div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 44px;
        height: 44px;
        margin: 8px;
        border: 4px solid ${constants.colors.fontColor};
        border-radius: 50%;
        animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${constants.colors.fontColor} transparent transparent
          transparent;
      }
      .loader div:nth-child(1) {
        animation-delay: -0.45s;
      }
      .loader div:nth-child(2) {
        animation-delay: -0.3s;
      }
      @keyframes loader {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </>
);

export default Loader;
