import styled from "styled-components";

export const WeavePalette = styled.div`
  /*******/
  text-align: center;
  h1 {
    font-family: "Lobster Two";
  }
  .cards {
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    z-index: 1;
  }
  .card {
    margin: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex: 0 0 100%;
    scroll-snap-align: start;
    border-radius: 10px;
    background: #918383;
    box-shadow: 7px 11px 10px 1px #7b6f6f, 6px -1px 11px 3px #7b6f6f;
  }

  li.card {
    border-radius: 10px;
    background: #93808a;
    box-shadow: 7px 11px 10px 1px #776870, 6px -1px 11px 3px #776870;
  }

  img {
    margin-bottom: 15px;
    box-shadow: 5px 5px 5px 1px #776870, -5px -5px 5px 1px #776870;
    height: auto;
    max-width: 100%;
  }

  .card .card-link-wrapper {
    margin-top: auto;
  }
  .cards::-webkit-scrollbar {
    height: 12px;
  }
  .cards::-webkit-scrollbar-thumb,
  .cards::-webkit-scrollbar-track {
    border-radius: 20px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3) !important;
  }
  .cards::-webkit-scrollbar-thumb {
    background-color: #644a51 !important;
  }
  .cards::-webkit-scrollbar-track {
    background-color: #7c7575 !important;
  }

  .details {
    position: fixed;
    width: 30%;
    height: -webkit-fill-available;
    overflow-y: scroll;
  }

  .details .container {
    padding: 0px;
  }

  @media (max-width: 991px) {
    h1 {
      font-size: 20px;
    }
    h5 {
      font-size: 14px;
    }
    .card {
      margin: 5px;
      padding: 10px;
      border-radius: 5px !important;
    }
    img {
      max-width: 100%;
      height: auto;
    }

    .details {
      position: relative;
      width: auto;
      height: -webkit-fill-available;
      overflow-y: auto;
    }

    .cards::-webkit-scrollbar {
      height: 10px !important;
    }
  }
`;

export const HeaderPalette = styled.div`
  text-align: center;
  img {
    margin: 5px;
    height: 100px;
    animation: move 20s ease-in-out infinite;
    //box-shadow: 0px 2px 6px 0px #7b6f6f, -2px 2px 4px 0px #7b6f6f;
  }

  @keyframes move {
    0% {
      transform: rotate(0deg);
    }
    15% {
      transform: rotate(15deg);
    }
    28% {
      transform: rotate(0deg);
    }
    42% {
      transform: rotate(-15deg);
    }
    57% {
      transform: rotate(0deg);
    }
    71% {
      transform: rotate(15deg);
    }
    83% {
      transform: rotate(0deg);
    }
    91% {
      transform: rotate(-15deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export const ErrorPalette = styled.div`
  text-align: center;
  img {
    margin: 100px 0px;
    height: 300px;
  }

  @media (max-width: 991px) {
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;
