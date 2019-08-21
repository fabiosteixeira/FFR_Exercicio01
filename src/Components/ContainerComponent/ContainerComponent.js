import React, { Component } from "react";
import "./ContainerComponent.css";
import { PostComponent } from "../PostComponent/PostComponent";

export class ContainerComponent extends Component {

    state = {
        posts: [
            { pathImage: "./images/img1.jpg", altImage: "Imagem 1", conteudo: "Conteudo do primeiro post de todos!" },
            { pathImage: "./images/img2.jpg", altImage: "Imagem 2", conteudo: "Este é o post intermediário e ele é bem grande para estimular a quebra da linha para que eu possa avaliar o comportamento do componente mediante as classes CSS implementadas." },
            { pathImage: "./images/img3.jpg", altImage: "Imagem 3", conteudo: "Esse é o conteúdo do último post." }
        ]
    }

    render() {
        return (
            <div className="container">
                {this.state.posts.map(post => (
                     PostComponent(post)
                 ))}
            </div>
        );
    }
}