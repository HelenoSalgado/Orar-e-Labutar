const containerLikes = document.querySelector('.amei-container');

const data = {
    slug: ''
};

data.slug = location.pathname.split('/').slice(-1);

if(data.slug == '') data.slug = location.pathname.split('/').slice(-2)[0];

console.log(data.slug);

const apiUrl = 'https://amei-api.onrender.com/api/likes';

const options = {
    "Content-Type": "application/json"
};

function fillHeart(liked){
    if(liked){
       containerLikes.childNodes[1].style.fill = 'red';
       containerLikes.childNodes[1].style.stroke = 'red';
       return;
    }
    containerLikes.childNodes[1].style.fill = '';
    containerLikes.childNodes[1].style.stroke = '';
}

if(localStorage.getItem(data.slug) == 'true'){
    fillHeart(true);
}

(async() => {
  await fetch(apiUrl+'/'+data.slug).then(async(res) => {
   const likes = await res.json(); 
   if(likes.statusCode == 404){
    await createLike().then(async(res) => {
        const likes = await res.json();
        renderLikes(likes);
    });
   } 
   renderLikes(likes);
});  
})();


async function createLike(){
    await fetch(apiUrl, { 
        method: 'POST',
        headers: options,
        body: JSON.stringify(data)
    }).then(async(res) => {
        const likes = await res.json();
        renderLikes(likes);
    });
    
};
async function updateLike(){
    if(localStorage.getItem(data.slug) == 'true'){
        data.likes = -1;
        localStorage.setItem(data.slug, false);
        fillHeart(false);
    }else{
        localStorage.setItem(data.slug, true);
        data.likes = 1;
        fillHeart(true);
    };
    await fetch(apiUrl, { 
        method: 'PUT',
        headers: options,
        body: JSON.stringify(data)
    }).then(async(res) => {
        const likes = await res.json();
        renderLikes(likes);
    });
    
    containerLikes.classList.add('amei-animation');
    setTimeout(() => {
        containerLikes.classList.remove('amei-animation');
    },1000);
};

containerLikes.addEventListener('click', async() => {
    await updateLike();
});

async function renderLikes({likes}) {
    const countLikes = document.querySelector('.count-likes').textContent = likes;
    if(!countLikes) new Error('<span class="count-likes"></span> faltando.')
};