const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result=document.getElementById("result");
const btn=document.getElementById("search");

btn.addEventListener("click",()=>{
    let inputword=document.getElementById("myinput").value;
    // console.log(inputword)
    fetch(`${url}${inputword}`).then((response)=> response.json()).then((data)=>{
        console.log(data);
        result.innerHTML=
        `
            <div class="word">
                <h3>${data[0].word}</h3>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech || ""}</p>
                <p>${data[0].phonetic}</p>
            </div>
            <p class="meaning">
                ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p  class="example">Example</p>
            <p class="word-example">
                ${data[0].meanings[0].definitions[0].example || ""}
            </p>
        `
    }).catch(()=>{
        result.innerHTML=`<h4 class="error"> Couldn't Find Word, please try another word</h4>`
    })
})