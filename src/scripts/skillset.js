import { insertHTML } from './view'
import skillsets from '../assets/jsons/skillsets.json'

const skillsetHtml = `<div class="col-lg-8 col-md-10">
${skillsets.map(skillset => {
return `
  <div class="skills-container">
    <h3>${skillset.name}</h3>
    ${skillset.skills.map(skill => {
    return `<div class="skill">
        <i class="icon-${skill.icon}">
        <svg>
        <use xlink:href="./assets/icons/icons.svg#icon-${skill.icon}"></use>
        </svg>
        </i> <span class="justify-content-center text-center">${skill.name}</span></div>`
        }).join('')}
    </div>`
}).join('')}
<hr />
</div>`

insertHTML('skillsets', skillsetHtml)