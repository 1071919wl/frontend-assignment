import React, {useEffect} from 'react';
import './stylesheets/modal.css';
import MovieDetail from '../movieList/movieDetail';


const Modal = ({show, setShow, movie, modalAction}) => {
  
  //enables modal close with esc button
  const closeOnEscapeKeyDown = (e) => {
    if(( e.charCode || e.keyCode) === 27 ){
      setShow(false)
    }
  }
  //enables and removes eventListener for modal close
  useEffect(() => {
      document.body.addEventListener('keydown', closeOnEscapeKeyDown)
      return function cleanup(){
        document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
      }
  })


  if (!show) return null;

  let component;
  
  switch (modalAction) {
    case 'movieDetails':
      component = <MovieDetail movie={movie} />;
      break;
    default:
      return null;
  }


  return (
    <div className="modal-background" onClick={()=>setShow(false)} >
      
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        <div onClick={()=>setShow(false)} id='modal_exit_button' className="close-x"></div>
        { component }
      </div>
      
    </div>
  );
}

export default Modal