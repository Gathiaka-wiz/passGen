let passwords = [];
const body = document.body;
let newPasswordContent = document.querySelector('.new-password-content');
const passwordsContainer = document.querySelector('.passwords-container');
const editBtn = document.querySelector('.edit');
const newForm = document.querySelector('#new').querySelector('form');


document.querySelector('header').querySelector('form').addEventListener('submit',(e) => {
    e.preventDefault();
    let pass = document.querySelector('input[name="pass"]').value;

    initNew();

    newPasswordContent.value = pass;
});

const setContent = () => {
    localStorage.setItem('content', JSON.stringify(passwords));
};

const getContent = () => {
    let content =  JSON.parse(localStorage.getItem('content'));
    passwords = Array.isArray(content) ? content : [];

    setContent();
};
getContent();

const toText = () => {
    let input =  event.target.parentElement.querySelector('input');
    input.type === 'password' ?  input.type = 'text' : input.type = 'password';
};

const generatePassword = () => {
    let pass = document.querySelector('input[name="pass"]');
    const max = 12;

    let caps =  "ABCDEFGHIJKLMNOPQRSTUVWXWZ";
    let small = "abcdefghijklmnopqrstuvwxwz";
    let numbers = "1234567890";
    let symbols = "`'~!@#$%^&*()=+{]}[|\;:<>.,/?";
    let allChars = caps + small + numbers + symbols;
    let password = '';

    password += symbols[Math.floor(Math.random() * symbols.length)];
    password += caps[Math.floor(Math.random() * caps.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += small[Math.floor(Math.random() * small.length)];
        
    for (let i = 1; i<=max ; i ++  ) {
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }

        pass.value = password

};

generatePassword();

const displayPasswords = () => {
    passwordsContainer.innerHTML = '';
    if(passwords.length > 0){
        passwords.forEach((element, key) => {
            let container = document.createElement('div');
            container.classList.add('container');
            container.dataset.id = key;
            const newLocal = `
            <header>
                    <h3 class="password-name">${element.name}</h3>
                </header>

                <details >
                    <summary>
                            <?xml version="1.0" encoding="utf-8"?>
                            <svg width="20"         height="20" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
    <path d="M10.6927 0C10.3687 0 10.0457 0.126953 9.79895 0.37375C9.79895 0.37375 9.5877 0.585 9.5877 0.585C9.5877 0.585 11.3752 2.3725 11.3752 2.3725C11.3742 2.37352 11.5865 2.16125 11.5865 2.16125C12.0811 1.66664 12.08 0.867344 11.5865 0.37375C11.3386 0.126953 11.0167 0 10.6927 0ZM9.18962 1.04814C9.13072 1.05626 9.07587 1.08571 9.03525 1.12939C9.03525 1.12939 0.601499 9.57126 0.601499 9.57126C0.567983 9.60173 0.542593 9.64134 0.528374 9.68501C0.528374 9.68501 0.00837392 11.635 0.00837392 11.635C-0.0149855 11.7244 0.0114208 11.8188 0.0764208 11.8838C0.141421 11.9488 0.235874 11.9752 0.325249 11.9519C0.325249 11.9519 2.27525 11.4319 2.27525 11.4319C2.31892 11.4177 2.35853 11.3923 2.389 11.3588C2.389 11.3588 10.8309 2.92501 10.8309 2.92501C10.9345 2.82446 10.9355 2.65892 10.8349 2.55532C10.7344 2.45173 10.5688 2.45071 10.4652 2.55126C10.4652 2.55126 2.07212 10.9444 2.07212 10.9444L1.01587 9.88814C1.01587 9.88814 9.409 1.49501 9.409 1.49501C9.4872 1.41985 9.51056 1.30306 9.46689 1.20353C9.42322 1.104 9.32267 1.04204 9.214 1.04814C9.20587 1.04814 9.19775 1.04814 9.18962 1.04814Z" fill="#FFFFFF" transform="translate(0.52 0.52)" />
                            </g>
                            </svg>
                    </summary>
                    <ul>
                        <li class="edit" onclick="editDetails('${key}')" >Edit </li>
                        <li class="delete" onclick="deletePassword('${key}')" >
                            Delete
                            <?xml version="1.0" encoding="utf-8"?>
                            <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g>
    <path d="M4.05 0C3.80326 0 3.6 0.203254 3.6 0.45C3.6 0.45 3.6 0.75 3.6 0.75C3.6 0.75 1.98984 0.75 1.98984 0.75C1.72664 0.75 1.48193 0.888422 1.34648 1.11416C1.34648 1.11416 1.11504 1.5 1.11504 1.5C1.11504 1.5 0.6 1.5 0.6 1.5C0.2704 1.5 0 1.7704 0 2.1C0 2.4296 0.2704 2.7 0.6 2.7C0.6 2.7 0.761133 2.7 0.761133 2.7C0.761133 2.7 1.29727 9.66885 1.29727 9.66885C1.33316 10.1364 1.72568 10.5 2.19463 10.5C2.19463 10.5 7.10537 10.5 7.10537 10.5C7.57432 10.5 7.96684 10.1364 8.00274 9.66885C8.00274 9.66885 8.53887 2.7 8.53887 2.7C8.53887 2.7 8.7 2.7 8.7 2.7C9.0296 2.7 9.3 2.4296 9.3 2.1C9.3 1.7704 9.0296 1.5 8.7 1.5C8.7 1.5 8.18496 1.5 8.18496 1.5C8.18496 1.5 7.95352 1.11416 7.95352 1.11416C7.81807 0.888422 7.57336 0.75 7.31016 0.75C7.31016 0.75 5.7 0.75 5.7 0.75C5.7 0.75 5.7 0.45 5.7 0.45C5.7 0.203254 5.49675 0 5.25 0C5.25 0 4.05 0 4.05 0ZM5.25015 0.300018C5.3349 0.300018 5.40015 0.365264 5.40015 0.450018C5.40015 0.450018 5.40015 0.750018 5.40015 0.750018L3.90015 0.750018C3.90015 0.750018 3.90015 0.450018 3.90015 0.450018C3.90015 0.365264 3.96539 0.300018 4.05015 0.300018C4.05015 0.300018 5.25015 0.300018 5.25015 0.300018ZM3.72473 1.05002C3.74093 1.0527 3.75746 1.0527 3.77366 1.05002C3.77366 1.05002 5.52473 1.05002 5.52473 1.05002C5.54093 1.0527 5.55746 1.0527 5.57366 1.05002C5.57366 1.05002 7.31008 1.05002 7.31008 1.05002C7.46838 1.05002 7.61447 1.13281 7.69592 1.26857C7.69592 1.26857 7.92502 1.65002 7.92502 1.65002C7.92502 1.65002 7.42493 1.65002 7.42493 1.65002C7.39788 1.64964 7.37272 1.66385 7.35909 1.68721C7.34545 1.71057 7.34545 1.73947 7.35909 1.76283C7.37272 1.78619 7.39788 1.8004 7.42493 1.80002C7.42493 1.80002 8.17493 1.80002 8.17493 1.80002C8.17493 1.80002 8.69993 1.80002 8.69993 1.80002C8.86743 1.80002 8.99993 1.93252 8.99993 2.10002C8.99993 2.26752 8.86743 2.40002 8.69993 2.40002C8.69993 2.40002 0.599927 2.40002 0.599927 2.40002C0.432427 2.40002 0.299927 2.26752 0.299927 2.10002C0.299927 1.93252 0.432427 1.80002 0.599927 1.80002C0.599927 1.80002 1.19993 1.80002 1.19993 1.80002C1.19993 1.80002 6.37493 1.80002 6.37493 1.80002C6.40198 1.8004 6.42713 1.78619 6.44077 1.76283C6.4544 1.73947 6.4544 1.71057 6.44077 1.68721C6.42713 1.66385 6.40197 1.64964 6.37493 1.65002C6.37493 1.65002 1.37483 1.65002 1.37483 1.65002C1.37483 1.65002 1.60393 1.26857 1.60393 1.26857C1.68539 1.13281 1.83148 1.05002 1.98977 1.05002C1.98977 1.05002 3.72473 1.05002 3.72473 1.05002ZM6.82497 1.64997C6.79792 1.64959 6.77276 1.6638 6.75913 1.68716C6.74549 1.71052 6.74549 1.73942 6.75913 1.76278C6.77276 1.78614 6.79792 1.80035 6.82497 1.79997C6.82497 1.79997 7.12497 1.79997 7.12497 1.79997C7.15202 1.80035 7.17718 1.78614 7.19081 1.76278C7.20445 1.73942 7.20445 1.71052 7.19081 1.68716C7.17718 1.6638 7.15202 1.64959 7.12497 1.64997C7.12497 1.64997 6.82497 1.64997 6.82497 1.64997ZM1.06165 2.69998C1.06165 2.69998 8.23821 2.69998 8.23821 2.69998C8.23821 2.69998 7.70354 9.64598 7.70354 9.64598C7.67943 9.95996 7.42025 10.2 7.1053 10.2C7.1053 10.2 2.19456 10.2 2.19456 10.2C1.87961 10.2 1.62042 9.95996 1.59631 9.64598C1.59631 9.64598 1.06165 2.69998 1.06165 2.69998ZM2.84978 3.30002C2.60212 3.30002 2.39978 3.50235 2.39978 3.75002C2.39978 3.75002 2.39978 9.00002 2.39978 9.00002C2.39978 9.24768 2.60212 9.45002 2.84978 9.45002C3.09744 9.45002 3.29978 9.24768 3.29978 9.00002C3.29978 9.00002 3.29978 3.75002 3.29978 3.75002C3.29978 3.50235 3.09744 3.30002 2.84978 3.30002ZM4.65007 3.30002C4.40241 3.30002 4.20007 3.50235 4.20007 3.75002C4.20007 3.75002 4.20007 9.00002 4.20007 9.00002C4.20007 9.24768 4.40241 9.45002 4.65007 9.45002C4.89774 9.45002 5.10007 9.24768 5.10007 9.00002C5.10007 9.00002 5.10007 8.47502 5.10007 8.47502C5.10046 8.44797 5.08625 8.42281 5.06288 8.40918C5.03952 8.39554 5.01063 8.39554 4.98726 8.40918C4.9639 8.42281 4.94969 8.44797 4.95007 8.47502C4.95007 8.47502 4.95007 9.00002 4.95007 9.00002C4.95007 9.16665 4.81671 9.30002 4.65007 9.30002C4.48344 9.30002 4.35007 9.16665 4.35007 9.00002C4.35007 9.00002 4.35007 3.75002 4.35007 3.75002C4.35007 3.58338 4.48344 3.45002 4.65007 3.45002C4.81671 3.45002 4.95007 3.58338 4.95007 3.75002C4.95007 3.75002 4.95007 7.57502 4.95007 7.57502C4.94969 7.60207 4.9639 7.62722 4.98726 7.64086C5.01063 7.6545 5.03952 7.6545 5.06288 7.64086C5.08625 7.62722 5.10046 7.60207 5.10007 7.57502C5.10007 7.57502 5.10007 3.75002 5.10007 3.75002C5.10007 3.50235 4.89774 3.30002 4.65007 3.30002ZM6.45001 3.30002C6.20234 3.30002 6.00001 3.50235 6.00001 3.75002C6.00001 3.75002 6.00001 3.97502 6.00001 3.97502C5.99962 4.00207 6.01384 4.02722 6.0372 4.04086C6.06056 4.0545 6.08945 4.0545 6.11282 4.04086C6.13618 4.02722 6.15039 4.00207 6.15001 3.97502C6.15001 3.97502 6.15001 3.75002 6.15001 3.75002C6.15001 3.58338 6.28337 3.45002 6.45001 3.45002C6.61664 3.45002 6.75001 3.58338 6.75001 3.75002C6.75001 3.75002 6.75001 9.00002 6.75001 9.00002C6.75001 9.16665 6.61664 9.30002 6.45001 9.30002C6.28337 9.30002 6.15001 9.16665 6.15001 9.00002C6.15001 9.00002 6.15001 5.17502 6.15001 5.17502C6.15039 5.14797 6.13618 5.12281 6.11282 5.10918C6.08945 5.09554 6.06056 5.09554 6.0372 5.10918C6.01384 5.12281 5.99962 5.14797 6.00001 5.17502C6.00001 5.17502 6.00001 9.00002 6.00001 9.00002C6.00001 9.24768 6.20234 9.45002 6.45001 9.45002C6.69767 9.45002 6.90001 9.24768 6.90001 9.00002C6.90001 9.00002 6.90001 3.75002 6.90001 3.75002C6.90001 3.50235 6.69767 3.30002 6.45001 3.30002ZM2.84993 3.44998C3.01656 3.44998 3.14993 3.58335 3.14993 3.74998C3.14993 3.74998 3.14993 8.99998 3.14993 8.99998C3.14993 9.16662 3.01656 9.29998 2.84993 9.29998C2.68329 9.29998 2.54993 9.16662 2.54993 8.99998C2.54993 8.99998 2.54993 3.74998 2.54993 3.74998C2.54993 3.58335 2.68329 3.44998 2.84993 3.44998ZM6.07384 4.34886C6.05395 4.34917 6.03499 4.35737 6.02115 4.37165C6.0073 4.38594 5.9997 4.40514 6.00001 4.42503C6.00001 4.42503 6.00001 4.72503 6.00001 4.72503C5.99963 4.75208 6.01384 4.77723 6.0372 4.79087C6.06056 4.8045 6.08946 4.8045 6.11282 4.79087C6.13618 4.77723 6.15039 4.75208 6.15001 4.72503C6.15001 4.72503 6.15001 4.42503 6.15001 4.42503C6.15033 4.40473 6.1424 4.38517 6.12805 4.37082C6.1137 4.35646 6.09414 4.34854 6.07384 4.34886C6.07384 4.34886 6.07384 4.34886 6.07384 4.34886Z" fill="#D1C4E9" transform="translate(2.85 1.95)" />
  </g>
                            </svg>
                        </li>
                    </ul>
                </details>

                <section id="p">
                    <input type="password" value="${element.value}" id="${key}"  name="password" >
                    <span  class="see" onclick="toText()" >👁</span>
                    <button class="copy-password" onclick="copy('${element.value}')" >
                        <?xml version="1.0" encoding="utf-8"?><svg width="18px" height="18px" fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 111.07 122.88" style="enable-background:new 0 0 111.07 122.88" xml:space="preserve"><style type="text/css"></style><g><path class="st0" d="M97.67,20.81L97.67,20.81l0.01,0.02c3.7,0.01,7.04,1.51,9.46,3.93c2.4,2.41,3.9,5.74,3.9,9.42h0.02v0.02v75.28 v0.01h-0.02c-0.01,3.68-1.51,7.03-3.93,9.46c-2.41,2.4-5.74,3.9-9.42,3.9v0.02h-0.02H38.48h-0.01v-0.02 c-3.69-0.01-7.04-1.5-9.46-3.93c-2.4-2.41-3.9-5.74-3.91-9.42H25.1c0-25.96,0-49.34,0-75.3v-0.01h0.02 c0.01-3.69,1.52-7.04,3.94-9.46c2.41-2.4,5.73-3.9,9.42-3.91v-0.02h0.02C58.22,20.81,77.95,20.81,97.67,20.81L97.67,20.81z M0.02,75.38L0,13.39v-0.01h0.02c0.01-3.69,1.52-7.04,3.93-9.46c2.41-2.4,5.74-3.9,9.42-3.91V0h0.02h59.19 c7.69,0,8.9,9.96,0.01,10.16H13.4h-0.02v-0.02c-0.88,0-1.68,0.37-2.27,0.97c-0.59,0.58-0.96,1.4-0.96,2.27h0.02v0.01v3.17 c0,19.61,0,39.21,0,58.81C10.17,83.63,0.02,84.09,0.02,75.38L0.02,75.38z M100.91,109.49V34.2v-0.02h0.02 c0-0.87-0.37-1.68-0.97-2.27c-0.59-0.58-1.4-0.96-2.28-0.96v0.02h-0.01H38.48h-0.02v-0.02c-0.88,0-1.68,0.38-2.27,0.97 c-0.59,0.58-0.96,1.4-0.96,2.27h0.02v0.01v75.28v0.02h-0.02c0,0.88,0.38,1.68,0.97,2.27c0.59,0.59,1.4,0.96,2.27,0.96v-0.02h0.01 h59.19h0.02v0.02c0.87,0,1.68-0.38,2.27-0.97c0.59-0.58,0.96-1.4,0.96-2.27L100.91,109.49L100.91,109.49L100.91,109.49 L100.91,109.49z"/></g></svg>
                    </button>
                </section>

                <section id="url">
                    <input type="url" value="${element.link !== '' ? element.link : ''}" name="link" >
                    <button class="copy-url" onclick="copy('${element.link}')" >
                        <?xml version="1.0" encoding="utf-8"?><svg width="14px" height="14px" fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 111.07 122.88" style="enable-background:new 0 0 111.07 122.88" xml:space="preserve"><style type="text/css"></style><g><path class="st0" d="M97.67,20.81L97.67,20.81l0.01,0.02c3.7,0.01,7.04,1.51,9.46,3.93c2.4,2.41,3.9,5.74,3.9,9.42h0.02v0.02v75.28 v0.01h-0.02c-0.01,3.68-1.51,7.03-3.93,9.46c-2.41,2.4-5.74,3.9-9.42,3.9v0.02h-0.02H38.48h-0.01v-0.02 c-3.69-0.01-7.04-1.5-9.46-3.93c-2.4-2.41-3.9-5.74-3.91-9.42H25.1c0-25.96,0-49.34,0-75.3v-0.01h0.02 c0.01-3.69,1.52-7.04,3.94-9.46c2.41-2.4,5.73-3.9,9.42-3.91v-0.02h0.02C58.22,20.81,77.95,20.81,97.67,20.81L97.67,20.81z M0.02,75.38L0,13.39v-0.01h0.02c0.01-3.69,1.52-7.04,3.93-9.46c2.41-2.4,5.74-3.9,9.42-3.91V0h0.02h59.19 c7.69,0,8.9,9.96,0.01,10.16H13.4h-0.02v-0.02c-0.88,0-1.68,0.37-2.27,0.97c-0.59,0.58-0.96,1.4-0.96,2.27h0.02v0.01v3.17 c0,19.61,0,39.21,0,58.81C10.17,83.63,0.02,84.09,0.02,75.38L0.02,75.38z M100.91,109.49V34.2v-0.02h0.02 c0-0.87-0.37-1.68-0.97-2.27c-0.59-0.58-1.4-0.96-2.28-0.96v0.02h-0.01H38.48h-0.02v-0.02c-0.88,0-1.68,0.38-2.27,0.97 c-0.59,0.58-0.96,1.4-0.96,2.27h0.02v0.01v75.28v0.02h-0.02c0,0.88,0.38,1.68,0.97,2.27c0.59,0.59,1.4,0.96,2.27,0.96v-0.02h0.01 h59.19h0.02v0.02c0.87,0,1.68-0.38,2.27-0.97c0.59-0.58,0.96-1.4,0.96-2.27L100.91,109.49L100.91,109.49L100.91,109.49 L100.91,109.49z"/></g></svg>
                    </button>
                </section>
            `;
            container.innerHTML = newLocal;

            passwordsContainer.appendChild(container);
        })
    }
    setContent();
};
const initNew = () => {
    body.classList.add('init-new');
        document.querySelector('.new-password-name').focus();
};
const removeNew = () => {
    const newPasswordName = document.querySelector('.new-password-name');
    const newPasswordUrl = document.querySelector('.new-password-url');

    body.classList.remove('init-new');
    body.classList.contains('edit-new') ? body.classList.remove('edit-new'): "" ;
};
const copyPassword = () => {
    let input = ((event.target.parentElement.parentElement).querySelector('[name="pass"]')).value;

    navigator.clipboard.writeText(input);
    console.log(input);
};
const copy = (input) => {
    navigator.clipboard.writeText(input);
    console.log(input);
};

document.querySelector('#new').querySelector('.cancel-password-save').addEventListener('click' ,() => removeNew());

newForm.addEventListener('submit' ,(e) => {
    if(!body.classList.contains('edit-new')){
        e.preventDefault();
        const newPasswordName = document.querySelector('.new-password-name');
        const newPasswordUrl = document.querySelector('.new-password-url');
            
        let newPassword = {
            name:newPasswordName.value,
            value:newPasswordContent.value,
            link:newPasswordUrl.value
        };
    
        if(passwords.length <= 0){
            passwords = [newPassword];
            
            displayPasswords();
        }else{
            passwords.push(newPassword);
            displayPasswords();
        }
        removeNew();
    }

});

displayPasswords();


const editDetails = (key) => {
    initNew();
    body.classList.add('edit-new');

    document.querySelector('.new-password-name').value = passwords[key].name;
    document.querySelector('.new-password-content').value = passwords[key].value;
    document.querySelector('.new-password-url').value = passwords[key].link !== undefined ? passwords[key].link : "" ;
    
    
    newForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let current =  passwords[key];
        
        if (current){
            let newContent = document.querySelector('.new-password-content').value;
            let newLink = document.querySelector('.new-password-url').value;
            let newName = document.querySelector('.new-password-name').value === undefined ? "" : document.querySelector('.new-password-name').value;

            let  newValue = {
                name:newName,
                value:newContent,
                link:newLink 
            };

            passwords[key] = newValue;

            displayPasswords();
            removeNew();
        }


    });
    
}

const deletePassword = (key) => {
    passwords.splice(key,1);
    displayPasswords();
}

