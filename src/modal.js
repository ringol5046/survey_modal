import React from 'react'
import './modal.css'

function Modal({ children, visible, onClose, title }){
    const onDialogClick = e => e.stopPropagation() 

    return (
        visible ? (
            <div className='modal'>
                <div className='modal-overlay'/>
                <div className='modal-content' onClick={onClose}>
                    <div className='modal-dialog' onClick={onDialogClick}>
                        <div className='header'>
                            <i className="fas fa-times" onClick={onClose}/>
                            <h2>{title}</h2>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        ) : null
    )
}

export default Modal