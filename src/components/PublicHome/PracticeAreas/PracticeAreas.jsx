import { BsGrid3X3 } from 'react-icons/bs';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { GoLaw } from 'react-icons/go';
import { RiSuitcaseLine } from 'react-icons/ri';
import { MdOutlineFamilyRestroom } from 'react-icons/md';
import './PracticeAreas.css';

const PracticeAreas = () => {
    return (
      <div className="practice-areas-container" id="services">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="description col-md-8 col-sm-12 text-center">
              <h6>AREAS DE PRÁCTICA</h6>
              <h1>CÓMO <span>TE PODEMOS</span> AYUDAR</h1>
              <p className="">
                Lorem Ipsum is simply dummy text of the printinLorem Ipsum is simply mmy text of the printing and typeseing industry Lorem Ipsum has been the industrys standard
                dummy text ever since the when an g and typeseing indu Lorem Ipsumf the printing and. Typeseing industry Lorem Ipsum has been the industrys standard.
                Dummy text ever since the when when an stry Lorem Ipsum.
              </p>
            </div>
          </div>

          <div className="services ">
            <div className="row text-center">
              <div className="col">
                    <a href="#" className="">
                      <div className="card zoom">
                        <MdOutlineManageAccounts className="card-img-top services-icons" />
                        <div className="card-body">
                          <h5 className="card-title">Administrativo</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                      </div>
                    </a>
              </div>
              <div className="col">
                    <a href="#" className="">
                      <div className="card zoom">
                        <BsGrid3X3 className="card-img-top services-icons" />
                        <div className="card-body">
                          <h5 className="card-title">Penal</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                      </div>
                    </a>
              </div>
              <div className="col">
                    <a href="#" className="">
                      <div className="card zoom">
                        <MdOutlineFamilyRestroom className="card-img-top services-icons" />
                        <div className="card-body">
                          <h5 className="card-title">Familia</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                      </div>
                    </a>
              </div>
              <div className="col">
                    <a href="#" className="">
                      <div className="card zoom">
                        <RiSuitcaseLine className="card-img-top services-icons" />
                        <div className="card-body">
                          <h5 className="card-title">Laboral</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                      </div>
                    </a>
              </div>
              <div className="col">
                <a href="#" className="">
                  <div className="card zoom">
                    <GoLaw className="card-img-top services-icons" />
                    <div className="card-body">
                      <h5 className="card-title">Civil</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PracticeAreas;