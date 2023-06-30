// no capital letter because its not a component
// will contain variables that we will use
/* 
step1
click login button

step2
redirect to login page

step3
redirect to home page once logged in
*/

//these are used to make a big url at the end of the class

export const authEndpoint = "https://accounts.spotify.com/authorize"

const redirectUri = "http://ricardocrzz.github.io/spotifyWebAppClone/"

// id provided by The Clever Programmer on yt
const clientId = "577184167f4c4451988f07dd3f69239a"

// you are now going to do the following on this app
// these are the permissions allowed from my spotify data
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// get the token from the url

export const getTokenFromUrl = () => {
    // the hashtag after the local host url, goes to location of the url and goes to the hash
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {/*       

        by using the hash and subtringing 1, we deleted everything before the hash we went from:

        http://localhost:3000/#access_token=supersecretkey&token_type=Bearer&expires_in=3600
        
        to just:

        #access_token=supersecretkey&token_type=Bearer&expires_in=3600

        removed the(http://localhost:3000/) 

        now we split this at the &, such that we have just:

        #access_token=supersecretkey

        (removed the &token_type=Bearer&expires_in=3600) 
        */
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1])
        // go into the intial array being returned, for the parts[0](the access_token) decode parts[1], the key

        return initial;
    }, {}); //add the ", {}" because this is what the intial should start with
}
//"`" these are backticks, they are used to use some javacript and some string 
// string interpolation
// ? is adding a parameter
// %20 is how a url reads space
// &response_type=toke means once you get authenticated, give us back a token, a string representing our authentication
export const loginUrl =
    `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;