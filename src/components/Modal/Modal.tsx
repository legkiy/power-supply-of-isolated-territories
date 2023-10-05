import { Dispatch, FC, ReactNode, SetStateAction, useRef } from 'react';
import { createPortal } from 'react-dom';
import './modal.scss';
import classNames from 'classnames';

interface IProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  onClose: () => void;
  className?: string;
}

const Modal: FC<IProps> = ({
  setOpenModal,
  children,
  onClose,
  className,
}) => {
  const modaleRef = useRef<HTMLDivElement>(null);
  return (
    <>
      {createPortal(
        <>
          <div className="modal-back" onClick={onClose}></div>
          <div className={classNames('modal', className)} ref={modaleRef}>
            {children}
            <button className="modal__close-btn" onClick={onClose}>
              Закрыть
            </button>
          </div>
        </>,
        document.body
      )}
    </>
  );
};

export default Modal;
