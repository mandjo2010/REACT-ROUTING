import React from "react";
import './Modal.css';

const About = () => {
  return (
    <div> 
    <div className='wrapper'>
    <div className='modal'>
          <div className='modal-content'>
              <h3> I am a modal </h3>
          </div>
    </div>
      
       </div>
    <div
       className="ui raised very padded text container segment"
      style={{ marginTop: '80px' }}
    >
      <h3 className="ui header">About </h3>
      <p>
        Le Lorem Ipsum est simplement du faux texte employé dans la composition
        et la mise en page avant impression. Le Lorem Ipsum est le faux texte
        standard de l'imprimerie depuis les années 1500, quand un imprimeur
        anonyme assembla ensemble des morceaux de texte pour réaliser un livre
        spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles,
        mais s'est aussi adapté à la bureautique informatique, sans que son
        contenu n'en soit modifié. Il a été popularisé dans les années 1960
        grâce à la vente de feuilles Letraset contenant des passages du Lorem
        Ipsum, et, plus récemment, par son inclusion dans des applications de
        mise en page de texte, comme Aldus PageMaker
      </p>
    </div>
  </div>
  )
}

export default About;
