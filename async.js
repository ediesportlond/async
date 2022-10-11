import fs from 'fs';

// //callback
// fs.readFile("./file.txt", "utf8", console.log);

const filename = 'file.txt';
// promise (then)
fs.promises.readFile(filename,"utf8")
    .then((data) => {
    console.log(data);
})

// async.. await
const showText = async () => {
// async function showText() {
    const data = await fs.promises.readFile(filename, 'utf8');
    return data
}

console.log(await showText())