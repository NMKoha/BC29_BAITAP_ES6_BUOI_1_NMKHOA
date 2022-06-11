/**
 * bài tập 2 sử dụng arrow function tính điểm trung bình
 */

const getEle = (id) => {
    return document.getElementById(id);
};

getEle("btnKhoi1").onclick = () => {
    const khoi1 = [];
    const diemToan = getEle("inpToan").value * 1;
    const diemLy = getEle("inpLy").value * 1;
    const diemHoa = getEle("inpHoa").value * 1;
    khoi1.push(diemToan, diemLy, diemHoa);
    let DTB = tinhDTB(khoi1);
    getEle("tbKhoi1").innerHTML = DTB;
};
getEle("btnKhoi2").onclick = () => {
    const khoi2 = [];
    const diemVan = getEle("inpVan").value * 1;
    const diemSu = getEle("inpSu").value * 1;
    const diemDia = getEle("inpDia").value * 1;
    const diemAnh = getEle("inpEnglish").value * 1;
    khoi2.push(diemVan, diemSu, diemDia, diemAnh);
    let DTB = tinhDTB(khoi2);
    getEle("tbKhoi2").innerHTML = DTB;
};

const tinhDTB = ([...arr]) => {

    let tong = 0;
    for (let i = 0; i < arr.length; i++) {
        tong += arr[i];
    }
    return tong / arr.length;
};