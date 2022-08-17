import React, { Component } from "react";
import background from "../asset/img/background.jpg";
import g1 from "../asset/img/g1.jpg";
import g2 from "../asset/img/g2.jpg";
import g3 from "../asset/img/g3.jpg";
import g4 from "../asset/img/g4.jpg";
import g5 from "../asset/img/g5.jpg";
import g6 from "../asset/img/g6.jpg";
import g7 from "../asset/img/g7.jpg";
import g8 from "../asset/img/g8.jpg";
import g9 from "../asset/img/g9.jpg";
import model from "../asset/img/model.jpg";
import v1 from "../asset/img/v1.png";
import v2 from "../asset/img/v2.png";
import v3 from "../asset/img/v3.png";
import v4 from "../asset/img/v4.png";
import v5 from "../asset/img/v5.png";
import v6 from "../asset/img/v6.png";
import v7 from "../asset/img/v7.png";
import v8 from "../asset/img/v8.png";
import v9 from "../asset/img/v9.png";
import css from "./style.css";
//update

export class TryGlasses extends Component {
    state = {
        glassesImg: v1,
    };

    changeGlasses = (img) => {
        this.setState({
            glassesImg: img,
        });
    }

  render() {
    return (
      <div className="container">
        <div className="overlay"></div>
        <h1>TRY GLASSES APP ONLINE</h1>
        <div className="model">
          <div className="model1">
            <img src={model} alt=""></img>
            <img className="v7" src={v7}></img>
            <div className="content">
                <h4>FENDI F8750</h4>
                <p>Light pink square lenses define these sunglasses, ending with another of pearl effect tip.</p>
            </div>
          </div>
          <div className="model2">
            <img src={model} alt=""></img>
            <img className="try" src={this.state.glassesImg}></img>
          </div>
        </div>
        <div className="glasses row">
          <div onClick={() => this.changeGlasses(v1)} className="item">
            <img src={v1}></img>
          </div>
          <div onClick={() => this.changeGlasses(v2)} className="item">
            <img src={v2}></img>
          </div>
          <div onClick={() => this.changeGlasses(v3)} className="item">
            <img src={v3}></img>
          </div>
          <div onClick={() => this.changeGlasses(v4)} className="item">
            <img src={v4}></img>
          </div>
          <div onClick={() => this.changeGlasses(v5)} className="item">
            <img src={v5}></img>
          </div>
          <div onClick={() => this.changeGlasses(v6)} className="item">
            <img src={v6}></img>
          </div>
          <div onClick={() => this.changeGlasses(v7)} className="item">
            <img src={v7}></img>
          </div>
          <div onClick={() => this.changeGlasses(v8)} className="item">
            <img src={v8}></img>
          </div>
          <div onClick={() => this.changeGlasses(v9)} className="item">
            <img src={v9}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default TryGlasses;
