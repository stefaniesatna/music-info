import React from "react";

export const Info = ({track}) => {
    const cleanTrack = {
        name: "",
        artists: "",
        album: "",
        type: "",
    }

    if (track.name && track.artists && track.album){
        cleanTrack.name = track.name
        cleanTrack.artists = track.artists.map(artist => artist.name).join(", ")
        cleanTrack.album = track.album.name
        cleanTrack.type = track.album.album_type
    }

    return (
        <div>
            <p>{cleanTrack.name}</p>
            <p>{cleanTrack.artists}</p>
            <p>{cleanTrack.type === "album" ? cleanTrack.album : ""}</p>
        </div>
    )
}