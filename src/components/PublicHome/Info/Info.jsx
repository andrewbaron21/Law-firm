import React, { useState, useEffect } from 'react';
import { BsPersonCheck } from 'react-icons/bs';
import { SiBookstack } from 'react-icons/si';
import { IoIosPeople } from 'react-icons/io';
import './Info.css'

const PublicHome = () => {
    const [lawyer, setLawyer] = useState(0);
    const [cases, setCases] = useState(0);
    const [clients, setClients] = useState(0);

    const sumLawyer = () => {
        setTimeout(function(){
            let total = 0;
            total = lawyer + 1;
            setLawyer(total)
        }, 30);
    };
    const sumCases = () => {
        setTimeout(function(){
            let total = 0;
            total = cases + 1;
            setCases(total)
        }, 30);
    };
    const sumClients = () => {
        setTimeout(function(){
            let total = 0;
            total = clients + 1;
            setClients(total)
        }, 30);
    };
    
    useEffect(() => {
        if (lawyer < 4) {
            sumLawyer()
        }
        if (cases < 102) {
            sumCases()
        }
        if (clients < 98) {
            sumClients()
        }
    });

    return (
        <div className="info-container">
            <div className='info-wrapper container'>
                <div className="row text-center">
                    <div className="col row info-item">
                            <div className="col-3">
                                <IoIosPeople className="icons-details" />
                            </div>
                            <div className="col-9">
                                <h2>{lawyer}</h2> <br />
                                <span>ABOGADOS CALIFICADOS</span> 
                            </div>
                    </div>
                    <div className="col row info-item">
                        <div className="col-3">
                            <SiBookstack className="icons-details" />
                        </div>
                        <div className="col-9">
                                <h2>{cases}</h2> <br />
                                <span>CASOS DE ÉXITO</span> 
                        </div>
                    </div>
                    <div className="col row info-item">
                        <div className="col-3">
                            <BsPersonCheck className="icons-details" />
                        </div>
                        <div className="col-9">
                                <h2>{clients}</h2> <br />
                                <span>CLIENTES FELICES</span> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublicHome;