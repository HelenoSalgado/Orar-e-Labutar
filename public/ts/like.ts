export default function likeExec() {

    const likeHeart = document.querySelector('.feather-heart');
    const countLike: any = document.getElementById('count-like');
    let indexLike: number = Number(countLike?.textContent);
    let currentLike = true;

    likeHeart?.addEventListener('click', () => {
        likeHeart.classList.toggle('like-animation');
        if (currentLike) {
            countLike.textContent = String(indexLike++);
            currentLike = false;
        } else {
            countLike.textContent = String(indexLike--);
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

}