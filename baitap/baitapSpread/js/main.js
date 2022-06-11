const layND = (id) => {
    return document.getElementsByClassName(id)[0].innerHTML;
};
let chars = [...layND("heading")];
const taoSpan = (chars) => {
    let content = "";
    for (let i = 0; i < chars.length; i++) {
        content += `<span>${chars[i]}</span>`;
    }
    document.getElementsByClassName("heading")[0].innerHTML = content;
};
taoSpan(chars);