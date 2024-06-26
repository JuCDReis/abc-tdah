const qualAtv = localStorage.getItem('qualAtv');
var item = localStorage.getItem('item');
const img = document.querySelector('#img-atv');
const btn = document.querySelector('.btn-next');
const btnNumPrev = document.querySelector('.btn-previous-num');
const btnNumNext = document.querySelector('.btn-next-num');
const container = document.querySelector('.container-atv');
let numSil;
let numVog;
let numCons;
let ansSil;
let ansVog;
let ansCons;
let nomeDesenho;
let ansNomeDes;

const question = document.querySelector('.question');
let numQuestion = 0;
const respostas = document.querySelector('.respostas');

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

//main functions
function letras() {
    btnNumNext.style.display = 'none';
    btnNumPrev.style.display = 'none';

    btn.addEventListener('click', ()=>{
        storeAns();
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
            },
        c: {
                id: 'c',
                scr: './let/c.png',
                word: "casa",
                vog: 2,
                cons: 2,
                sil: 2
            },
        d: {
                id: 'd',
                scr: './let/d.png',
                word: "dado",
                vog: 2,
                cons: 2,
                sil: 2
            },
        e: {
                id: 'e',
                scr: './let/e.png',
                word: "elefante",
                vog: 4,
                cons: 4,
                sil: 4
            },
        f: {
                id: 'f',
                scr: './let/f.png',
                word: "foca",
                vog: 2,
                cons: 2,
                sil: 2
            },
        g: {
                id: 'g',
                scr: './let/g.png',
                word: "gato",
                vog: 2,
                cons: 2,
                sil: 2
            },
        h: {
                id: 'h',
                scr: './let/h.png',
                word: "hipopótamo",
                vog: 5,
                cons: 5,
                sil: 5
            },
        i: {
                id: 'i',
                scr: './let/i.png',
                word: "índio",
                vog: 3,
                cons: 2,
                sil: 3
            },
        j: {
                id: 'j',
                scr: './let/j.png',
                word: "jacaré",
                vog: 3,
                cons: 3,
                sil: 3
            },
        k: {
                id: 'k',
                scr: './let/k.png',
                word: "koala",
                vog: 3,
                cons: 2,
                sil: 3
            },
        l: {
                id: 'l',
                scr: './let/l.png',
                word: "lápis",
                vog: 2,
                cons: 3,
                sil: 2
            },
        m: {
                id: 'm',
                scr: './let/m.png',
                word: "maça",
                vog: 2,
                cons: 2,
                sil: 2
            },
        n: {
                id: 'n',
                scr: './let/n.png',
                word: "navio",
                vog: 3,
                cons: 2,
                sil: 3
            },
        o: {
                id: 'o',
                scr: './let/o.png',
                word: "ovo",
                vog: 2,
                cons: 1,
                sil: 2
            },
        p: {
                id: 'p',
                scr: './let/p.png',
                word: "pirulito",
                vog: 4,
                cons: 4,
                sil: 4
            },
        q: {
                id: 'q',
                scr: './let/q.png',
                word: "queijo",
                vog: 4,
                cons: 2,
                sil: 2
            },
        r: {
                id: 'r',
                scr: './let/r.png',
                word: "rato",
                vog: 2,
                cons: 2,
                sil: 2
            },
        s: {
                id: 's',
                scr: './let/s.png',
                word: "sabonete",
                vog: 4,
                cons: 4,
                sil: 4
            },
        t: {
                id: 't',
                scr: './let/t.png',
                word: "trem",
                vog: 1,
                cons: 3,
                sil: 1
            },
        u: {
                id: 'u',
                scr: './let/u.png',
                word: "uva",
                vog: 2,
                cons: 1,
                sil: 2
            },
        v: {
                id: 'v',
                scr: './let/v.png',
                word: "vela",
                vog: 2,
                cons: 2,
                sil: 2
            },
        w: {
                id: 'w',
                scr: './let/w.png',
                word: "wafer",
                vog: 2,
                cons: 3,
                sil: 2
            },
        x: {
                id: 'x',
                scr: './let/x.png',
                word: "xícara",
                vog: 3,
                cons: 3,
                sil: 3
            },
        y: {
                id: 'y',
                scr: './let/y.png',
                word: "yoyo",
                vog: 2,
                cons: 2,
                sil: 2
            },
        z: {
                id: 'z',
                scr: './let/z.png',
                word: "zebra",
                vog: 2,
                cons: 3,
                sil: 2
            },
    } 
    defineImg(atvLetras);
    defineInfo(atvLetras);
    askQuestions();

}

function numeros() {
    container.classList.add('atv-num');
    const question = document.querySelector('.questions')
    question.style.display = 'none';

    const atvNumeros = {
        1: {
                id: '1',
                scr: './img/atv-num/1m-removebg-preview.png',
            },
        2: {
                id: '2',
                scr: './img/atv-num/2b-removebg-preview.png',
            },
        3: {
                id: '3',
                scr: './img/atv-num/3a-removebg-preview.png',
            },
        4: {
                id: '4',
                scr: './img/atv-num/4m-removebg-preview.png',
            },
        5: {
                id: '5',
                scr: './img/atv-num/5b-removebg-preview.png',
            },
        6: {
                id: '6',
                scr: './img/atv-num/6m-removebg-preview.png',
            },
        7: {
                id: '7',
                scr: './img/atv-num/7p-removebg-preview.png',
            },
        8: {
                id: '8',
                scr: './img/atv-num/8l-removebg-preview.png',
            },
        9: {
                id: '9',
                scr: './img/atv-num/9a-removebg-preview.png',
            },
        10: {
                id: '10',
                scr: './img/atv-num/10k-removebg-preview.png',
            },
         
    } 
    defineImg(atvNumeros);
    btnNumNext.addEventListener('click', ()=>{
        if(item >= 1){
            btnNumPrev.style.display = 'flex';
        }
        if(item >= 9){
            btnNumNext.style.display = 'none';
            item++;
            defineImg(atvNumeros);
        }else{
            item++;
            console.log(item);
            defineImg(atvNumeros);
        }

})
    btnNumPrev.addEventListener('click', ()=>{
        if(item <= 10){
            btnNumNext.style.display = 'flex';
        }
        if(item <= 2){
            btnNumPrev.style.display = 'none';
            item--;
            defineImg(atvNumeros);
        }else{
            item--;
            defineImg(atvNumeros);
        }
        
})

}

function desenhos() {
    btnNumNext.style.display = 'none';
    btnNumPrev.style.display = 'none';

    btn.addEventListener('click', ()=>{
        storeAns();
        numQuestion++;
        askQuestions();
    })
    const atvDesenhos = {
        urso: {
                id: 'urso',
                scr: './img/atv-des/urso-removebg-preview.png',
                nome: "urso",
                vog: 2,
                cons: 2,
                sil: 2
            },
        leao: {
                id: 'leao',
                scr: './img/atv-des/leao-removebg-preview.png',
                nome: "leão",
                vog: 3,
                cons: 1,
                sil: 2
            },
        elefante: {
                id: 'elefante',
                scr: './img/atv-des/elefante-removebg-preview.png',
                nome: "elefante",
                vog: 4,
                cons: 4,
                sil: 4
            },
        macaco: {
                id: 'macaco',
                scr: './img/atv-des/macaco-removebg-preview.png',
                nome: "macaco",
                vog: 3,
                cons: 3,
                sil: 3
            },
        borboleta: {
                id: 'borboleta',
                scr: './img/atv-des/borboleta-removebg-preview.png',
                nome: "borboleta",
                vog: 4,
                cons: 5,
                sil: 4
            }
    } 
    defineImg(atvDesenhos);
    defineInfo(atvDesenhos);
    askQuestions();
}

//secondary functions
function defineImg(array) {
    for (const key in array) {
        if (key == item){
            img.src = array[key].scr;
        }
    }
}
function askQuestions() {
    respostas.style.display = "none";
    if (qualAtv == 'abc') {
        switch (numQuestion) {
            case 0:
                question.innerHTML = `
                <h2>Quantas vogais a palavra possui?</h2>
                <input type="number" class="input-ans">`
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
    } else if (qualAtv == 'desenhos'){
        switch (numQuestion) {
            case 0:
                question.innerHTML = `
                <h2>Qual o nome do animal no desenho?</h2>
                <input type="text" class="input-ans">`
            break;
            case 1:
                question.innerHTML = `
                <h2>Quantas vogais a palavra possui?</h2>
                <input type="number" class="input-ans">`
            break;
            case 2:
                question.innerHTML = `
                <h2>Quantas consoantes a palavra possui?</h2>
                <input type="number" class="input-ans">`
            break;
            case 3:
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
function storeAns() {
    let answer = document.querySelector('.input-ans').value;
    if (qualAtv == 'abc') {
        switch (numQuestion) {
            case 0:
                ansVog = answer;
                break;
            case 1:
                ansCons = answer;
                break;
            case 2:
                ansSil = answer;
                break;
            default:
                break;
        }
    } else if(qualAtv == 'desenhos'){
        switch (numQuestion) {
            case 0:
                ansNomeDes = answer;
                break;
            case 1:
                ansVog = answer;
                break;
            case 2:
                ansCons = answer;
                break;
            case 3:
                ansSil = answer;
                break;
            default:
                break;
        }
    }
}
function defineInfo(array) {
    for (const index in array) {
        switch (index) {
            case item:
                if (qualAtv == 'abc') {
                    numSil = array[index].sil;
                    numCons = array[index].cons;
                    numVog = array[index].vog;
                } else {
                    nomeDesenho = array[index].nome;
                    numSil = array[index].sil;
                    numCons = array[index].cons;
                    numVog = array[index].vog;
                }
                break;
            default:
                console.error('index not found');
                break;
        }
    }
}  
function checkAnswer() {
    let itensRespostas = document.querySelectorAll(".item-resposta");
    let respostasUser = document.querySelectorAll(".user");

    for (let i = 0; i < itensRespostas.length; i++) {
        let item  = itensRespostas[i];
        let itemId = item.getAttribute("id");
        if (itemId != null){
            switch (itemId) {
                case "nome":
                    if (qualAtv == 'abc') {
                        item.style.display = 'none';
                    }else{
                        item.innerHTML = `<h3>${nomeDesenho}</h3>`;
                    }
                    break;
                case "vog":
                    item.innerHTML = `<h3>${numVog}</h3>`;
                    break;
                case "cons":
                    item.innerHTML = `<h3>${numCons}</h3>`;
                    break;
                case "sil":
                    item.innerHTML = `<h3>${numSil}</h3>`;
                    break;
                default:
                    break;
            }
        }
    }
    for (let i = 0; i < respostasUser.length; i++) {
        let item  = respostasUser[i];
        let itemId = item.getAttribute("id");
        if (itemId != null){
            switch (itemId) {
                case "nome":
                    if (qualAtv == 'abc') {
                        item.style.display = 'none';
                    }else{
                        item.innerHTML = `<h3>${ansNomeDes}</h3>`;
                        if(ansNomeDes != nomeDesenho){
                        item.classList.add('user-wrong');
                        }
                    }
                    break;
                case "vog":
                    item.innerHTML = `<h3>${ansVog}</h3>`;
                    if(ansVog != numVog){
                        item.classList.add('user-wrong');
                    }
                    break;
                case "cons":
                    item.innerHTML = `<h3>${ansCons}</h3>`;
                    if(ansCons != numCons){
                        item.classList.add('user-wrong');
                    }
                    break;
                case "sil":
                    item.innerHTML = `<h3>${ansSil}</h3>`;
                    if(ansSil != numSil){
                        item.classList.add('user-wrong');
                    }
                    break;
                default:
                    break;
            }
        }
    }

    question.style.display = "none";
    btn.style.display = "none"
    respostas.style.display = "flex";
    

}