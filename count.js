let fs = require('fs');
let  join = require('path').join;





// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// let allFile = findSync(__dirname)
let allFile = findSync('/Volumes/android/火影忍者/【画质狂魔&猪猪】火影忍者001-720 DVD&HD GB MKV 收藏版/')
// let allFile = findSync('/Volumes/android/火影忍者/火影忍者NaRuTo/')
let allNum = makeNumber(1, 720); // 在 哪些数字之间进行搜索



// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑



let nothingNumArr = []
allNum.map(itemIn => {
    if (!isNotInArr(String(itemIn), allFile)) {
        nothingNumArr.push(itemIn)
    }
})

console.log('缺失的剧集是-->', nothingNumArr);

function isNotInArr(item, arr) {
    let r = 0;
    arr.map(iii => {
        if (iii.includes(item)) {
            r++
        }
    })
    return r > 0 ? true : false
}


function makeNumber(startNum, endNum) {
    let a = startNum;
    let arr = [];
    while (a <= endNum) {
        let aa = String(a).padStart(3, 0); // 制作补0的字符串
        arr.push(aa);
        a++;
    }
    return arr
}




function findSync(startPath) {

    let result=[];

    function finder(path) {

        let files=fs.readdirSync(path);

        files.forEach((val,index) => {

            let fPath=join(path,val);

            let stats=fs.statSync(fPath);

            if(stats.isDirectory()) finder(fPath);

            if(stats.isFile()) result.push(fPath);

        });



    }

    finder(startPath);

    return result;

}
