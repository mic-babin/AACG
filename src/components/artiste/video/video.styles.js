import styled from "styled-components"

export const Section = styled.section`
  .description {
    color: gray;
  }

  button:hover {
    background: none !important;
    border-bottom: none !important;
  }

  button {
    border-bottom: none !important;
  }

  .video-thumb {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
  }

  .video-thumb iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
