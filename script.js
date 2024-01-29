newbutton.addEventListener('click',
    async e => {

        let szervervalasz_szotar = await olvaso_fetch('https://api.chucknorris.io/jokes/random');

        viccdiv.innerHTML = szervervalasz_szotar['value'];
    }
);

async function olvaso_fetch(url){
    const response = await fetch(url);
    const json_promise = await response.json();
    return json_promise;
}
