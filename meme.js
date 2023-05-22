const urlBar = document.querySelector('#urlBar');
const topText = document.querySelector('#topText');
const bottomText = document.querySelector('#bottomText');
const canvas = document.querySelector('#memeCanvas');
const memeBtn = document.querySelector('button[type="submit"]');
const form = document.querySelector('form');
const memeZone = document.querySelector('#memeZone');


form.addEventListener('submit', function(e){
    console.log(topText.value);
    console.log(bottomText.value);
    console.log(urlBar.value);
    e.preventDefault();
  form.reset();

});

memeBtn.addEventListener('click', createMeme);

function createMeme () {
    if(topText.value === '' || bottomText.value === '' || urlBar.value === ''){
        console.log('Fill out the forms');
        return;
    }
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.style.backgroundColor = '#9883E5';
    deleteBtn.style.borderRadius = '10px';
    deleteBtn.style.color = '#484538';

    deleteBtn.addEventListener('click', function(e){
        meme.remove();
    })

    let meme = document.createElement('div');
    let topZone = document.createElement('div');
    let bottomZone = document.createElement('div');
    let newImg = document.createElement('img');
    let memeSrc = urlBar.value;

    topZone.classList.add('topZone')
    bottomZone.classList.add('bottomZone')
    meme.classList.add('meme');
    topZone.textContent = topText.value;
    bottomZone.textContent = bottomText.value;

    meme.append(topZone);
    meme.append(bottomZone);
    meme.append(newImg);
    meme.append(deleteBtn);
    newImg.setAttribute('src', memeSrc);


    memeZone.appendChild(meme);   
}

