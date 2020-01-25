'use strict';
import '../scss/teams.scss';

import {loadImage, loadJSON} from "../../../utils";


const teams = document.getElementById('teams');

const iconsLink = new Map([
    ["www.facebook.com",["fab", "fa-facebook"]],
    ["twitter.com",  ["fab", "fa-twitter"]],
    ["ru.linkedin.com",  ["fab", "fa-linkedin"]],
    ["google.com",  ["fab", "fa-google-plus"]]
]);



async function fillEmployees() {

    const persons = await loadJSON('./data/employees.json');
    persons.forEach( person=> {
        teams.appendChild(createMemberTeam(person));
    });
}

fillEmployees();


const createMemberTeam = person => {
    const personItem = document.createElement('div');
    personItem.classList.add('person');

    personItem.appendChild(loadImage(person.profilePicture, person.name,"./assets/images/onError/person.png"));
    personItem.appendChild(createPersonName(person.name));
    personItem.appendChild(createPersonRole(person.role));
    personItem.appendChild(createPersonDescription(person.description));
    personItem.appendChild(createPersonLink(person.contacts));

    return personItem;
};


const createPersonName = name => {
    const nameElement = document.createElement('h4');
    nameElement.innerText = name;

    return nameElement;
};

const createPersonRole = role => {
    const roleElement = document.createElement('h5');
    roleElement.innerText = role;

    return roleElement;
};

const createPersonDescription = description => {
    const descriptionElement = document.createElement('p');
    descriptionElement.innerText = description;

    return descriptionElement;
};

const createPersonLink = linkArray => {
    const linkBlock = document.createElement('ul');
    linkBlock.classList.add('socialIconsContainer');

    linkArray.forEach( (oneLink,index) => {
        if (index < 5) {
            const linkItem = document.createElement("li");
            linkItem.classList.add('socialIconsItem');

            const link = document.createElement('a');
            link.setAttribute('href', oneLink);

            const linkIcon = document.createElement('i');

            const classList = iconsLink.get(
                new URL(oneLink).hostname
            );

            linkIcon.classList.add(...classList);

            link.appendChild(linkIcon);
            linkItem.appendChild(link);

            linkBlock.appendChild(linkItem);
        }
    });

    return linkBlock;
};