import './style/main.scss'

const MY_BIRTHDATE = new Date(1998, 6, 12)

const skillsets =
  [
    {
      name: 'Linguagens',
      skills: [{
        name: "JavaScript",
        icon: "javascript"
      }]
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


const showCollapse = (divName, event) => {
  const content = document.getElementById(divName)
  const button = event.target

  if (button.classList.contains('active'))
    closeCollapses()
  else {
    closeCollapses()
    button.classList.add('active')
    content.classList.add('active')
  }
}

const closeCollapses = () => {
  const anchors = document.getElementsByClassName('collapse-anchor')
  const containers = document.getElementsByClassName('work-container')

  for (let i = 0; i < anchors.length; i++) {
    if (anchors[i].classList.contains('active')) {
      anchors[i].classList.remove('active')
    }
    if (containers[i].classList.contains('active')) {
      containers[i].classList.remove('active')
    }
  }
}

window.showCollapse = showCollapse

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
