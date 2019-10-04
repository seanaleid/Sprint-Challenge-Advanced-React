import React from "react";

export default function PlayerCard(props) {
    console.log(props)

    return(
        <div>
            <div className="card">
                <h3>{props.player.name}</h3>
                <h3>{props.player.country}</h3>
                <h3>{props.player.id}</h3>
            </div>
        </div>
    )
}