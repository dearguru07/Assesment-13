console.log('clikced the download btn')
console.log('server is fecth')
console.log('movie is downloading')
console.log('Movie is downloaded , stored to ur divice')


async function dataFetch() {
    const data =await fetch("https://dummyjson.com/products")
    .then((data) =>{
        const originalData=data.json()
        return originalData
    }).then((originalData)=>{
        document.getElementById('headiing').innerHTML=originalData[1].text
    })
    console.log(originalData)
}
dataFetch()



function hello(){
    let data=fetch('https://dummyjson.com/products')
    console.log(data)
    .then((data)=>{
        let originalData=data.json()
        console.log(originalData)
    })
}
