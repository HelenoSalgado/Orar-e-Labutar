const likeHeart = document.querySelector('.feather-heart');
const countLike = document.getElementById('count-like');
let indexLike = Number(countLike?.textContent);
let currentLike = true;

likeHeart?.addEventListener('click', () => {
    likeHeart.classList.toggle('like-animation');
    if (currentLike) {
        countLike.textContent = indexLike += 1;
        currentLike = false;
    } else {
        countLike.textContent = indexLike -= 1;
        currentLike = true;
    }

    fetch('http://localhost:1337/api/posts/1', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            data: {
                id: 1,
                attributes: {
                    likes: indexLike
                }
            }
        })
    }).then(res => {
        console.log(res.json());
    });
});