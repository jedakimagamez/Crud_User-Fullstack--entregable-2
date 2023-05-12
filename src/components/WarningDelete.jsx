import React from 'react';

const WarningDelete = ({ userToDelete, deleteUser, alert, cancelDelete }) => {
  return (
    <div>
      {alert && (
        <div className='container__form'>
          <div className='card__form'>
            <div className='border__form'>
              <h3>Deseas eliminar el usuario:</h3>
              <br />
              <h4>{`${userToDelete.first_name} ${userToDelete.last_name}`}</h4>
              <hr />
              <p>Esta acción es permanente.</p>
              <div className='btn__warning'>
                <button className='btn__delete' onClick={() => deleteUser(userToDelete)}>Eliminar</button>
                <button className='btn__cancel' onClick={cancelDelete}>Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WarningDelete;
