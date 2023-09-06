import { Dispatch, SetStateAction, memo, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './modal.scss';

interface IProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ openModal, setOpenModal }: IProps) => {
  const modaleRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!openModal) return;
    document.addEventListener('click', (e) =>
      e.target !== modaleRef.current ? setOpenModal(false) : null
    );

    return () => {
      document.removeEventListener('click', (e) =>
        e.target !== modaleRef.current ? setOpenModal(false) : null
      );
    };
  }, [openModal, setOpenModal]);

  return (
    // <div className="modal"></div>
    <>
      {openModal &&
        createPortal(
          <div className="modal" ref={modaleRef}></div>,
          document.body
        )}
    </>
  );
};

export default memo(Modal);
