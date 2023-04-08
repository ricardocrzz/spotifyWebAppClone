import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import Player from './Player';

import { getTokenFromUrl } from './spotify';
//need to import this library
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';

// constructor of a instance of spotify inside of our app
const spotify = new SpotifyWebApi();

function App() {
  // useState is a refresh variable 
  //const [token, setToken] = useState(null);
  //get the user from the data layer using our dispatch gun
  // {user} == DataLayer.user
  const [{ token }, dispatch] = useDataLayerValue();


  // run code based on a given condition, always runs a arrow function,
  // this runs when the website first loads, and is always updating to see if you have the correct token
  useEffect(() => {
    // get token from the url
    // we get the value access_token=supersecretkey
    const hash = getTokenFromUrl();
    // we DO NOT want our token exposed in the url, so we overrun the url
    window.location.hash = "";

    // temporary token
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      //setToken(_token);

      // give the access token to the spotify api, the key that will allow you to talk through spotify and our website
      spotify.setAccessToken(_token);

      // this returns a promise 
      spotify.getMe().then(user => {
        //dispatch the user, it reads the type and assigns the user
        dispatch({
          type: 'SET_USER',
          user: user
        })

      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      })
      spotify.getPlaylist('48mOZvfCRRQxWF7ZhXRdnM').then((playlist) => {
        dispatch({
          type: 'SET_PLAYLIST',
          playlist: playlist
        })
      })

    }

  }, []);
  //console.log("this is the user", user);
  //console.log("this is your token", token);

  return (
    <div className="app">
      {/* if there is a token, render the app, if not render the Login page*/}
      {token ? (<Player spotify={spotify} />) : (<Login />)}
    </div>
  );
}

export default App;