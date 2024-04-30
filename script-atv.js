const qualAtv = localStorage.getItem('qualAtv');
const item = localStorage.getItem('item');
const img = document.querySelector('#img-atv');

switch (qualAtv) {
    case "abc":
        letras();
        break;
    case "num":
        numeros();
        break;
    case "desenhos":
        desenhos();
        break;

    default:
        break;
}

function letras() {
    let numSil;
    let numVog;
    let numCons;
    let ansSil;
    let ansVog;
    let ansCons;
    const question = document.querySelector('.question');
    let numQuestion = 0;
    const btn = document.querySelector('.btn-next');
    btn.addEventListener('click', ()=>{
        console.log('teste');
        numQuestion++;
        askQuestions();
    })
    const atvLetras = {
        a: {
                id: 'a',
                scr: './let/a.png',
                word: "avião",
                vog: 4,
                cons: 1,
                sil: 3
            },
        b: {
                id: 'b',
                scr: './let/b.png',
                word: "bola",
                vog: 2,
                cons: 2,
                sil: 2
            }
    } 
    defineImg(atvLetras);
    defineInfo(atvLetras);
    askQuestions();
    
    function askQuestions() {
        switch (numQuestion) {
            case 0:
                question.innerHTML = `
                <h2>Quantas vogais a palavra possui?</h2>
                <input type="number" class="input-ans">`
                let answer = document.querySelector('.input-ans').value;
            break;
            case 1:
                question.innerHTML = `
                <h2>Quantas consoantes a palavra possui?</h2>
                <input type="number" class="input-ans">`
            break;
            case 2:
                question.innerHTML = `
                <h2>Quantas silabas a palavra possui?</h2>
                <input type="number" class="input-ans">`;
                btn.innerHTML = `
                Verificar
                `
            break;
        
            default:
                checkAnswer();
                break;
        }
    }
    

}

function defineImg(array) {
    for (const key in array) {
        switch (key) {
            case item:
                img.src = array[key].scr;
                break;
            default:
                console.error();
                break;
        }
    }
}
function defineInfo(array) {
    for (const item in array) {
        switch (item) {
            case item:
                numSil = array[item].sil;
                numCons = array[item].cons;
                numVog = array[item].vog;
                break;
            default:
                console.error();
                break;
        }
    }
}