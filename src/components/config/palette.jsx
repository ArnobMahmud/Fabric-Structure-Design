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

  .details {
    position: fixed;
    width: 30%;
    height: -webkit-fill-available;
    overflow-y: scroll;
  }

  .details .container {
    padding: 0px;
  }

  .card .card-link-wrapper {
    margin-top: auto;
  }
  .cards::-webkit-scrollbar {
    height: 12px;
  }
  .cards::-webkit-scrollbar-thumb,
  .cards::-webkit-scrollbar-track {
    border-radius: 92px;
  }
  .cards::-webkit-scrollbar-thumb {
    background: var(--darkred);
  }
  .cards::-webkit-scrollbar-track {
    background: var(--thumb);
  }

  @media (max-width: 991px) {
    .cards {
      display: contents;
    }
    .card {
      margin: 5px;
      padding: 15px;
    }
    img {
      max-width: 100%;
      height: auto;
    }

    .details {
      position: relative;
      width: auto;
      overflow-y: auto;
    }
  }
`;

export const HeaderPalette = styled.div`
  text-align: center;
  img {
    top: 0px;
    margin: 5px;
    height: 120px;
    //box-shadow: 0px 2px 6px 0px #7b6f6f, -2px 2px 4px 0px #7b6f6f;
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
