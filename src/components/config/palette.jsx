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
    z-index: 100;
    transition: all 0.5s ease-out;
    margin-bottom: 15px;
    box-shadow: 5px 5px 5px 1px #776870, -5px -5px 5px 1px #776870;
  }

  img:hover {
    transform: scale(1.5);
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
  }
`;
