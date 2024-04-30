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
    const respostas = document.querySelector('.respostas');
    const btn = document.querySelector('.btn-next');
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
   
    function askQuestions() {
        respostas.style.display = "none";
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
    }
    function storeAns() {
        let answer = document.querySelector('.input-ans').value;
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
    }
    function defineInfo(array) {
        for (const index in array) {
            switch (index) {
                case item:
                    numSil = array[index].sil;
                    numCons = array[index].cons;
                    numVog = array[index].vog;
                    break;
                default:
                    console.error();
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

