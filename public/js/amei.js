const containerLikes = document.querySelector('.amei-container');
const countLikes = document.createElement('span');
countLikes.id = 'count-likes';

const slug = location.pathname.split('/');
const apiUrl = 'https://amei-api.onrender.com/api/likes'; //'http://localhost:3001/api/likes';

const options = {
    "Content-Type": "application/json"
};
const data = {
    slug: (slug[slug.length - 1]).split('/')[0]
};
function fillHeart(liked){
    if(liked){
       containerLikes.childNodes[0].style.fill = 'red';
       containerLikes.childNodes[0].style.stroke = 'red';
       return;
    }
    containerLikes.childNodes[0].style.fill = '';
    containerLikes.childNodes[0].style.stroke = '';
}
if(localStorage.getItem('likeActive') == 'true'){
    fillHeart(true);
}
(async() => {
    const getLikes = await fetch(apiUrl+'/'+data.slug);
    const likes = await getLikes.json();
    if(likes.statusCode == 404) return renderLikes(await createLike());
    renderLikes(likes);
 })();
async function createLike(){
    const create = await fetch(apiUrl, { 
        method: 'POST',
        headers: options,
        body: JSON.stringify(data)
    });
    renderLikes(await create.json());
};
async function updateLike(){
    if(localStorage.getItem('likeActive') == 'true'){
        data.likes = -1;
        localStorage.setItem('likeActive', false);
        fillHeart(false);
    }else{
        localStorage.setItem('likeActive', true);
        data.likes = 1;
        fillHeart(true);
    };
    const update = await fetch(apiUrl, { 
        method: 'PUT',
        headers: options,
        body: JSON.stringify(data)
    });
    renderLikes(await update.json());
    containerLikes.classList.add('amei-animation');
    setTimeout(() => {
        containerLikes.classList.remove('amei-animation');
    },1000);
};
containerLikes.addEventListener('click', async() => {
    await updateLike();
});
function renderLikes({likes}) {
    countLikes.textContent = likes;
    containerLikes.appendChild(countLikes);
};