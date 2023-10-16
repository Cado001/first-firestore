import { addArt, getAllArt } from "./src/art.js";

await addArt({
    artist: "Van Gough",
    title: "irises",
    Media:"Oil",
});


await addArt({
    artist: "Davinic",
    title: "Last Supper",
    Media:"Oil",

});


await getAllArt();
