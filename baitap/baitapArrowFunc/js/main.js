/**
 * Bài tập 1 arrow function đổi màu ngôi nhà
 */
const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

const getEle = (id) => {
    return document.getElementById(id);
};

const showColorList = (colorList) => {
    let color = "";
    for (let i = 0; i < colorList.length; i++) {
        color += `<button class="color-button ${colorList[i]}" onclick="doiMau('${colorList[i]}')"></button>`;
    };
    getEle("colorContainer").innerHTML = color;
};
showColorList(colorList);

const doiMau = (id) => {
    colorList.forEach((color) => {
        if (color !== id) {
            getEle("house").classList.remove(color);

        }
        getEle("house").classList.add(id);

    })
};