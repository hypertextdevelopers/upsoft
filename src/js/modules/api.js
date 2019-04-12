window.addEventListener('load', () => {

    const user_input = document.querySelector('.form__left__input');
    const req_button = document.querySelector('.form__right__button');
    const input_border = document.querySelector('.form__left__border');
    const loading_box = document.querySelector('.loader');
    const error_modal = document.querySelector('.error-modal');

    req_button.addEventListener('click', () => {

        if(user_input.value != ""){
            
            input_border.style.backgroundColor = "#ffffff";
            loading_box.style.display = 'block';

            axios.get(`https://api.github.com/users/${user_input.value}`)
                    .then( res => {

                        loading_box.style.display = 'none';
                        user_input.value = null;
                        error_modal.style.transform = 'translateY(-100%)';
                        addUser(res.data);

                    })
                    .catch( error => {

                        console.log(error);
                        loading_box.style.display = 'none';
                        error_modal.style.transform = 'translateY(0)';

                        window.setTimeout( () => {

                            error_modal.style.transform = 'translateY(-100%)';

                        }, 5000);

                        user_input.value = null;

                    });

        }else{

            input_border.style.backgroundColor = "#e85e6c";

        }

    });

});

const addUser = user_object => {

    const ul = document.querySelector('.ul-wrapper__ul');
    
    let li = document.createElement('li');
    li.setAttribute('class', 'ul-wrapper__ul__li');

    let li_left = document.createElement('div');
    li_left.setAttribute('class', 'ul-wrapper__ul__li__left');

    let li_right = document.createElement('div');
    li_right.setAttribute('class', 'ul-wrapper__ul__li__right');

    let img = document.createElement('img');
    img.setAttribute('class', 'ul-wrapper__ul__li__left__image');
    img.setAttribute('src', user_object.avatar_url);
    img.setAttribute('alt', user_object.avatar_url);

    let p_login = document.createElement('p');
    p_login.setAttribute('class', 'ul-wrapper__ul__li__right__p');
    p_login.textContent = `login: ${user_object.login}`;

    let p_url = document.createElement('p');
    p_url.setAttribute('class', 'ul-wrapper__ul__li__right__p');
    p_url.textContent = 'url: ';

    let p_repos = document.createElement('p');
    p_repos.setAttribute('class', 'ul-wrapper__ul__li__right__p');
    p_repos.textContent = `public_repos: ${user_object.public_repos}`;

    let p_followers = document.createElement('p');
    p_followers.setAttribute('class', 'ul-wrapper__ul__li__right__p');
    p_followers.textContent = `followers: ${user_object.followers}`;

    let link = document.createElement('a');
    link.setAttribute('class', 'ul-wrapper__ul__li__right__p__a');
    link.setAttribute('href', user_object.html_url);
    link.setAttribute('target', '_blank');
    link.textContent = user_object.html_url;

    p_url.appendChild(link);

    li_left.appendChild(img);
    li_right.appendChild(p_login);
    li_right.appendChild(p_url);
    li_right.appendChild(p_repos);
    li_right.appendChild(p_followers);

    li.appendChild(li_left);
    li.appendChild(li_right);

    ul.appendChild(li);

};