import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { ReposCardsStyle, ContainerButtonModal } from '../styles';

Modal.setAppElement('#root');

function ReposCards(props) {
  const {
    name, forks, stars, url,
  } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <ReposCardsStyle>
      <button type="button" onClick={() => setModalIsOpen(true)}>
        {name}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={
          {
            overlay: {
              backgroundColor: 'transparent',
            },
            content: {
              color: 'black',
              height: 220,
              width: '80%',
              maxWidth: 400,
              top: '43%',
              left: '44%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-40%, -10%)',
              boxShadow: '1px 1px 10px black',
            },
          }

        }
      >
        <section>
          <header>
            <h2>{name}</h2>
          </header>
          <hr />
          <article>
            <p>
              Forks:
              {forks}
            </p>
            <p>
              Stars:
              {stars}
            </p>
            <p>
              <a href={url} target="_blank" rel="noreferrer">Link para o repositório</a>
            </p>
          </article>
        </section>

        <ContainerButtonModal>
          <button type="button" onClick={() => setModalIsOpen(false)}>X</button>
        </ContainerButtonModal>
      </Modal>
    </ReposCardsStyle>
  );
}

ReposCards.propTypes = {
  name: PropTypes.string.isRequired,
  forks: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default ReposCards;
