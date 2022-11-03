const btn = document.querySelector('button');
const h1 = document.querySelector('h1');




btn.addEventListener('click', () => {
    setTimeout(()=>{
        h1.innerText = "FALCON 9 IS IN START UP";
        setTimeout(() => {
            h1.innerText = "Launch Director is GO for Launch";
        },3000);
    },1000);
    setTimeout(() => {
        h1.innerText = "10";
        setTimeout(()=>{
            h1.innerText = "9";
            setTimeout(() => {
                h1.innerText = "8";
                setTimeout(() => {
                    h1.innerText = "7";
                    setTimeout(() => {
                        h1.innerText = "6";
                        setTimeout(() => {
                            h1.innerText ='5';
                            setTimeout(() => {
                                h1.innerText ='4';
                                setTimeout(() => {
                                    h1.innerText ='3';
                                    setTimeout(() => {
                                        h1.innerText ='2';
                                        setTimeout(() => {
                                            h1.innerText ='1';
                                            setTimeout(() => {
                                                h1.innerText ='LIFT OFF';
                                                setTimeout(() => {
                                                    h1.innerText ='Vehicle Is Pitching Downrange';
                                                    setTimeout(() => {
                                                        h1.innerText ='Stage 1 Nominal Propulsion ';
                                                    },3000)
                                                },3000)
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },8000)
});