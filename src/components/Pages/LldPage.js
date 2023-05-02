import React from "react";
import Form from "../form/Form";
import Layouts from "../layout/Layout";
import CardLldUp from "../cards/CardLldUp";
import "./LldPage.css";
import CardLlCar from "../cards/CardLldCar";

 function LldPage() {
  return (
    <Layouts>
      <div>
        {/* la partie avec le bg blue*/}
        <section
          id="bgblue"
          className="bg-gradient-to-l from-black via-violet-950 to-black text-center"
        >
          <div className="title">
            <h2 className="uppercase text-2xl text-white ">
              Tout savoir <span className="text-purple-400">sur</span>
            </h2>
          </div>
          <div className="py-4 text-3xl font-semibold text-[#57007f]   ">
            <button className="bg-white rounded-full h-12 px-10 ">
              LA LOCATION LONGUE DURÉE
            </button>
          </div>
          <div className="pb-10  ">
            <hr className="w-24 m-auto h-1 bg-white mb-3"></hr>
          </div>
        </section>
        {/* partie avecc les 3 cards avec l'images */}
        <section id="cardlld">
          {/*1ere card*/}
          <div className="cardstreet">
            <div className="cardLldUp">
              <CardLldUp />
            </div>
            <div className="carsstreet">
              <div className="cardimg">
                <img
                  src="https://static.wixstatic.com/media/c33c80_c55fc1509e944b088f2486731efdd18a~mv2.jpg/v1/crop/x_998,y_0,w_3477,h_3648/fill/w_852,h_894,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/karsten-wurth-rafblRbne3o-unsplash.jpg"
                  alt="vue sur une route"
                  className="w-full max-h-[50vh] rounded-3xl mt-10"
                />
                <p className="text-[#57007f] text-center font-light">
                  La voie royale vers la LLD🔥
                </p>
              </div>
            </div>
            </div>
            <hr className="w-48 m-auto h-1  bg-[#57007f] mt-2"></hr>
          {/*2ieme card*/}
          <div className="cardstreet">
            <div className="cardimg2">
              <img
                src="https://static.wixstatic.com/media/c33c80_19e32a8bf28a4aa9a70aa57619b4bae1~mv2.jpg/v1/crop/x_672,y_0,w_3291,h_3456/fill/w_426,h_447,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/andrew-roberts-2JvEjF0tf50-unsplash.jpg"
                alt="vue prise electrique voiture"
                className="w-fulld max-h-[60vh] rounded-3xl  mt-14"
              />
              <p className="text-[#57007f]  font-light mr-10 mt-2">
                C'est simple que de brancher une prise electrique👍
              </p>
            </div>
            <div className="cardLldUp">
              <CardLlCar />
            </div>
          </div>
          {/*3ieme card*/ }
          <img src="/img-on-lease/lld/photo_3lld.jpg" alt="" />
          <hr className="w-48 m-auto h-1  bg-[#57007f]"></hr>
        </section>
        {/*Partie avec 7#*/}
        <section id="solution">
          <h2>POURQUOI OPTER POUR CETTE SOLUTION?</h2>
          <p>
            Tout simplement parceque la location longue durée vous offre en tant
            que professionnel de nombreux avantage:
          </p>
          <hr className="w-48 m-auto h-1  bg-[#57007f]"></hr>
          <p>#1</p>
          <p>#2</p>
          <img src="/img-on-lease/lld/photo_4lld.jpg" alt="" />
          <hr />
          <p>#3</p>
          <img src="/img-on-lease/lld/photo_5lld.jpg" alt="" />
          <p>#4</p>
          <p>#5</p>
          <img src="" alt="" />
          <p>#6</p>
          <p>#7</p>
          <img src="" alt="" />
        </section>
        {/* partie pour finir*/}
        <section id="end">
          <hr className="w-48 m-auto h-1  bg-[#57007f]"></hr>
          <h2 className="text-center uppercase py-3">
            POUR <span className="text-sky-200">FINIR...</span>
          </h2>
          <p>
            {" "}
            Vous l'aurez compris, la location longue durée présente bien des
            avantages: de la satisfastion de vos conducteurss jusqu'à votrte
            trésorerie en passant par l'image de votre entreprise.
          </p>
          <p>
            Pour vous accompagner dans cette solution, faites le choix du bon
            partenaire qui saura ête à votre écoute et vous guider dans la
            gestion de votre parc autombile.{" "}
          </p>
          <h3>One Lease#CLIENTFIRST!</h3>
          <hr className="w-48 m-auto h-1  bg-[#57007f]"></hr>
        </section>
        {/*Partie avec le formulaire*/}
        <section>
          <hr />
          <Form />
        </section>
      </div>
    </Layouts>
  );
}
export default LldPage
