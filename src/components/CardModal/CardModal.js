import React, { useState } from 'react';
import './CardModal.css';
import Modal from 'react-modal';
import { BsFillCartFill } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import CardModalInfo from '../CardModalInfo/CardModalInfo';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');


const CardModal = ({ cart }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <div onClick={openModal} className='cart-counter'>
                <BsFillCartFill className='icon' color='#fff' /> <span>{cart.length}</span>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div onClick={closeModal} className='cart-counter'>
                    <GrClose className='icon' />
                </div>
                <div className='modal-container'>
                    {
                        cart.map(item => (
                            <CardModalInfo key={item.id} item={item} />
                        ))
                    }
                </div>
            </Modal>
        </div>
    );
};

export default CardModal;