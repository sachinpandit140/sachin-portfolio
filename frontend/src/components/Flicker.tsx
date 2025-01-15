import styled from "styled-components";

type Props = {
  words: string[];
};

const Flicker = ({ words }: Props) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="Flicker">
          <div className="words">
            {words.map((word, index) => (
              <span className="word" key={index}>
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    background-color: transparent;
    padding-top: 1rem;
    border-radius: 1.25rem;
  }
  .Flicker {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    box-sizing: content-box;
    height: 7rem;
    padding-top: 10px;
    display: flex;
    border-radius: 8px;
  }

  .words {
    overflow: hidden;
    position: relative;
    height: 100%;
  }
  .words::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      var(--bg-color) 10%,
      transparent 30%,
      transparent 70%,
      var(--bg-color) 90%
    );
    z-index: 20;
  }

  .word {
    display: block;
    height: 100%;
    padding-left: 6px;
    animation: spin_4991 7s infinite;
    font-size: inherit;
    line-height: 1.2;
  }

  @keyframes spin_4991 {
    0% {
      transform: translateY(0);
    }

    10% {
      transform: translateY(-102%);
    }

    25% {
      transform: translateY(-100%);
    }

    35% {
      transform: translateY(-202%);
    }

    50% {
      transform: translateY(-200%);
    }

    60% {
      transform: translateY(-302%);
    }

    75% {
      transform: translateY(-300%);
    }

    85% {
      transform: translateY(-402%);
    }

    100% {
      transform: translateY(0);
    }
  }
`;

export default Flicker;
