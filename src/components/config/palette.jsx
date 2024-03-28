import styled from "styled-components";

export const WeavePalette = styled.div`
  text-align: center;
  .card {
    overflow-y: hidden;
    height: 80vh;
  }
  .infocard {
    height: 45vh;
  }
  img {
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    margin-bottom: 15px;
    box-shadow: 5px 5px 5px 1px #776870, -5px -5px 5px 1px #776870;
  }
  @media (max-width: 991px) {
    .card {
      overflow-y: hidden;
      height: auto;
    }
    .infocard {
      height: auto;
    }
    img {
      width: inherit !important;
      height: inherit !important;
    }
  }
`;
