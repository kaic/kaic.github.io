import './style/main.scss'

const MY_BIRTHDATE = new Date(1998, 6, 12)

const skillsets =
  [
    {
      name: 'Linguagens',
      skills: [{
        name: "JavaScript",
        icon: "javascript"
      }, 
    {name: "TypeScript",
    icon: "javascript"}]
    },
    {
      name: 'Backend',
      skills: [{
        name: "NodeJS",
        icon: "nodejs"
      },{
        name: "ExpressJS",
        icon: "nodejs"
      },{
        name: "HapiJS",
        icon: "nodejs"
      }, {
        name: "RESTful APIs",
        icon: "api-settings"
      },
      {
        name: "Microservices",
        icon: "cloud-connection"
      }]
    },
    {
      name: 'Frontend',
      skills: [{
        name: "HTML 5",
        icon: "html-5"
      },
      {
        name: "CSS 3",
        icon: "css3"
      },
      {
        name: "Bootstrap",
        icon: "bootstrap"
      },
      {
        name: "Angular",
        icon: "angularjs"
      },
      {
        name: "SASS",
        icon: "sass"
      },
      {
        name: "Ionic",
        icon: "ionic"
      }]
    },
    {
      name: 'Data',
      skills: [
        {
          name: "SQL",
          icon: "sql"
        },
        {
          name: "MySQL",
          icon: "mysql"
        },
        {
          name: "PostgreSQL",
          icon: "postgreesql"
        },
        {
          name: "MongoDB",
          icon: "mongodb"
        }]
    },
    {
      name: 'Ferramental',
      skills: [
        {
          name: "NPM",
          icon: "npm"
        },
        {
          name: "Jenkins",
          icon: "jenkins"
        },
        {
          name: "Git",
          icon: "git"
        },
        {
          name: "Linux",
          icon: "linux"
        },
        {
          name: "Bash",
          icon: "console"
        },
        {
          name: "Webpack",
          icon: "webpack"
        },
        {
          name: "Docker",
          icon: "docker"
        },
        {
          name: "Scrum",
          icon: "sprint-iteration"
        }
      ]
    }
  ]

const calculateMyAge = birthdate => {
  var diffMs = Date.now() - birthdate.getTime()
  var ageDate = new Date(diffMs)

  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

document.getElementById('age').innerText = calculateMyAge(MY_BIRTHDATE)

const getYear = () => new Date().getUTCFullYear()

document.getElementById('year').innerText = getYear()

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
document.getElementById('skillsets').insertAdjacentHTML('beforeend', skillsetHtml)

const career = [{
  company: 'FitDance',
  position: 'Software Developer',
  period: 'dez de 2019 - atualmente',
  description: `Projeto: Desenvolvimento fullstack e refatoração de legado
  Manutenção e adição de features em APIs (Microserviços, Typescript, Kafka, ExpressJS).
  Manutenção e modelagem do Banco de Dados (PostgreSQL).
  Manutenção e adição de features no WebApp (ReactJS).
  Desenvolvimento mobile com React Native.
  CI/CD, Docker, Kubernetes
  Testes
  Code Review
  `,
  location: 'São Paulo, Brasil',
  img: require('./assets/images/fitdance.jpeg')  
},
{
  company: 'LinkApi',
  position: 'Backend Developer',
  period: 'abr de 2019 - jul de 2019',
  description: `Projeto: Desenvolvimento de integrações.
  Integrações VTEX, Oracle DB, Microvix, Salesforce.
  `,
  location: 'São Paulo, Brasil',
  img: require('./assets/images/linkapi.png')  
},
{
  company: 'Ebix',
  position: 'Javascript Developer',
  period: 'nov de 2018 - fev de 2019',
  description: `Projeto: Desenvolvimento de backend para o chatbot BIA da Bradesco Seguros.
  Manutenção e adição de features em APIs (NodeJS, ExpressJS).
  IBM Watson.
  Serveless functions.  
  `,
  location: 'São Paulo, Brasil',
  img: require('./assets/images/ebix.jpeg')  
},
{
  company: 'Concrete',
  position: 'Javascript Developer',
  period: 'abr de 2017 - fev de 2018',
  description: `Projeto: Desenvolvimento de backend para o aplicativo móvel Meu Carrefour.
  Manutenção e adição de features em APIs (NodeJS, HapiJS).
  Uso de filas com RabbitMQ.
  Desenvolvimento de API Gateway para integrar diversos serviços do cliente.
  Testes automatizados.   
  `,
  location: 'São Paulo, Brasil',
  img: require('./assets/images/concrete.png')  
},
{
  company: 'FCamara',
  position: 'IT Solutions Consultant',
  period: 'abr de 2017 - set de 2017',
  description: `Projeto: Desenvolvimento de uma IDE e um Framework para auxílio no desenvolvimento Web de um grande prestador de serviços para o varejo.
Desenvolvimento de aplicação desktop multiplataforma (Windows e Linux) usando ElectronJS.
Manutenção e adição de features em APIs (NodeJS, ExpressJS).
Desenvolvimento mobile com Ionic I e III.
Desenvolvimento web com AngularJS e Angular.
  `,
  location: 'São Paulo, Brasil',
  img: require('./assets/images/fcamara.jpeg')  
},
{
  company: 'FCamara',
  position: 'Developer Trainee',
  period: 'nov de 2016 - abr de 2017',
  description: `Projeto: Timesheet Online para gestão e controle de tempo.
  Manutenção e adição de features no WebApp (AngularJS).
  Desenvolvimento da extensão do HashTrack para Google Chrome.
  Desenvolvimento da versão mobile do HashTrack (https://mobile.hashtrack.io/) no formato de Progressive Web App. No blog -
  http://blog.hashtrack.io/hashtrack-mobile
  Manutenção e adição de features na API (NodeJS, ExpressJS).
  Manutenção e modelagem do Banco de Dados (MongoDB).
  Entrega do software na nuvem (Digital Ocean e Azure) utilizando Docker.   
  `,
  location: 'São Paulo, Brasil',
  img: require('./assets/images/fcamara.jpeg')  
}]

const careerHtml = `
  <div class="col-lg-8 col-md-10">
  <ul class="work-links-list">
  <div class="vl">
    ${career.map(work => ` 
      <li> <div class="work-container">
          <img src="${work.img}" class="img-thumbnail" alt="${work.company} Logo" />
          <h3>${work.position} @ ${work.company}</h3>
          <h4>📅 ${work.period}</h4>
          <h4>📍 ${work.location}</h4>
          <p>${work.description}</p>
          </div>
      </li>
    `).join('')}
    </div>
    </ul>
    <hr />
    </div>`
document.getElementById('career').insertAdjacentHTML('beforeend', careerHtml)

window.addEventListener('load', () => {
  setTimeout(() => {
    window.scrollTo(0, 1)
  }, 0)
})

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    console.log('Service worker is registrating.')
    navigator.serviceWorker.register('service-worker.js').then(
      function () {
        console.log('service worker registration complete.')
      },
      function () {
        console.log('service worker registration failure.')
      }
    )
  } else {
    console.log('service worker is not supported.')
  }
}
