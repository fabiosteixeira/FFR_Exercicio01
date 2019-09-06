import React from 'react';
import "./PostComponent.css"

export const PostComponent = (props) => (
    <div className="post">
        <div className="post__divImage">
            <img src={props.pathImage} alt={props.altImage} className="post__divImage__img"/>
        </div>
        <div className="post__divConteudo">
            {props.conteudo}
        </div>
    </div>
)