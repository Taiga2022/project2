// ここから書いてください。
const imgDictionary={
    '1':"https://cdn.pixabay.com/photo/2015/12/18/13/46/tiger-1098607__340.jpg",
    "2":"https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636__480.jpg",
    "3":"https://cdn.pixabay.com/photo/2018/09/22/17/05/parrot-3695678__340.jpg",
    "4":"https://cdn.pixabay.com/photo/2015/10/28/15/05/lemurs-1010643__340.jpg",
    "5":"https://cdn.pixabay.com/photo/2018/11/11/16/51/ibis-3809147__340.jpg",
    "6":"https://cdn.pixabay.com/photo/2019/08/21/16/03/panda-4421395__340.jpg",
    "7":"https://cdn.pixabay.com/photo/2020/10/13/10/20/zebra-5651454__480.jpg",
    "8":"https://cdn.pixabay.com/photo/2018/06/28/00/11/mara-mammal-3502921__340.jpg",
    "9":"https://cdn.pixabay.com/photo/2019/07/27/06/21/giraffe-4366005__340.jpg",
}

const target=document.getElementById("target");

let sliderShow = document.createElement("div");
let main = document.createElement("div");
let extra = document.createElement("div");
let animalImage=document.getElementById("animalImg")


sliderShow.classList.add("col-12", "d-flex", "flex-nowrap", "overflow-hidden","justify-content-center");
main.classList.add("main", "full-width");
extra.classList.add("extra", "full-width");
target.append(sliderShow);

let btns =document.querySelectorAll("button");

const createImgEle=(img)=>{
    let image=document.createElement("img");
    image.src=img
    image.classList.add("w-75");
    image.setAttribute('id','animalImg')
    return image
}

firstImage=createImgEle(imgDictionary[1]);
sliderShow.append(firstImage);
console.log(sliderShow);

//ボタンを押したときの処理
for (let index = 0; index < btns.length; index++) {
    const btn= btns[index];
    btn.addEventListener('click',(e)=>{
        img=imgDictionary[e.target.value]
        let image=createImgEle(img);
        extra.append(image);

        main.append(animalImage)
        main.classList.add("expand-animation");
        extra.classList.add("deplete-animation");

        sliderShow.append(extra);
        sliderShow.append(main);
    })
}
