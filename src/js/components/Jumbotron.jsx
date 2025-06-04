import React from "react";
import toy_story from "../../img/toy_story.jpg";
import ConYSin from "../../img/con y sin react.jpg";
import Reacciones from "../../img/3 reacciones diferentes.jpg"
import Developers from "../../img/Developer.jpg";


export function Jumbotron () {
    const handleComponentButtonClick = () => {
        window.open(toy_story);
        };

        const handleComponentButtonClick2 = () => {
            window.open(ConYSin);
            };

            const handleComponentButtonClick3 = () => {
                window.open(Reacciones);
                };
        


    return(
        <div className="container py4 text-center">
            <div
          className="jumbotron-background"
          style={{ backgroundImage: `url(${Developers})`, color: "white", }}
        >
                <div className="container-fluid py-5 ">
                    <h1 className="display-5 fw-bold text-center text-white ">Jumbotron de Grupo 2</h1>
                    <hr className="my-4" />
                    <p className="col-md-8 fs-6 mx-auto mt-3 text-white" ><strong>
Landing creada por una apasionada por la programación, el diseño y ahora, descubriendo el maravilloso mundo de las bases de datos, estudiando para DBA.</strong>               
                    </p>
                    <hr className="my-4" />
                    
                    <div class="btn-group">
                        <button
                            onClick={handleComponentButtonClick}
                            className="btn btn-primary active"
                            aria-current="page"
                            >Componente
                        </button>


                        <button
                            onClick={handleComponentButtonClick2}
                            className="btn btn-primary active ms-2"
                            aria-current="page"
                            >Con y sin React
                        </button>
                        <button
                            onClick={handleComponentButtonClick3}
                            className="btn btn-primary active ms-2 rounded-end "
                            aria-current="page"
                            >Reacciones
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
