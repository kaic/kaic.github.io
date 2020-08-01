import { insertHTML } from './view'
import career from '../assets/jsons/career.json'

const careerHtml = `
  <div class="col-lg-8 col-md-10">
    <ul class="work-links-list">
      <div class="vl">
        ${career.map(work => ` 
          <li> 
            <div class="work-container">
              <div class="work-header">
                <img src="${require(`../assets/images/${work.img}`)}" class="img-thumbnail" alt="${work.company} Logo" />
                <div id="header-text">
                  <h3>${work.position}</h3>
                  <span>🏢 ${work.company}</span>
                  <span>📅 ${work.period}</span>
                  <span>📍 ${work.location}</span>
                </div>
              </div>
              <p>${work.description}</p>
            </div>
          </li>
        `).join('')}
        </div>
      </ul>
      <hr />
  </div>`

insertHTML('career', careerHtml);  