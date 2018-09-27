const bands = [
    "The Plot in You",
    "The Devil Wears Prada",
    "Pierce theVeil",
    "Norma Jean",
    "The Bled",
    "Say Anything",
    "The Midway State",
    "WeCame as Romans",
    "Counterparts",
    "Oh, Sleeper",
    "A Skylit Drive",
    "AnywhereBut Here",
    "An Old Dog"
];

function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, "").trim();
}
const newBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

document.querySelector("#bands").innerHTML = newBands
    .map(band => `<li>${band}</li>`)
    .join("");

console.log(newBands);
