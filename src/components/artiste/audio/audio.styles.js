import styled from "styled-components"

export const Section = styled.section`
  .rhap_container {
    box-shadow: none;
    padding: 15px 0;
  }
  .rhap_controls-section,
  .rhap_time,
  .rhap_progress-indicator {
    display: none;
  }
  .rhap_progress-container {
    margin: 0 0;
  }
  .rhap_progress-bar {
    border-radius: 0;
    height: 8px;
  }

  .rhap_progress-filled {
    background-color: #406b63;
  }

  .rhap_download-progress {
    background-color: rgb(233, 228, 208) !important;
  }

  .download-btn {
    margin-top: 100px;
  }

  .bottom-line {
    border-bottom: 1px solid black;
    font-weight: 600 !important;
    font-size: 13px !important;
    letter-spacing: 1px;
  }
  .description {
    color: grey;
  }

  .download-arrow {
    transform: rotate(90deg);
  }

  .underline {
    border-bottom: 1px solid black;
  }
`
