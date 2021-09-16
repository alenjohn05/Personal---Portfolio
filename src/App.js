import {Component} from 'react'

import TabItem from './components/TabItem'
import ProjectItem from './components/ProjectItem'
import Header from './components/Header'

import './App.css'
import Skills from './components/Skills'
import Footer from './components/footer'
import Hero from './components/herosection'

const tabsList = [
  {tabId: 'DYNAMIC', displayText: 'Dynamic'},
  {tabId: 'UIUX-DESIGN', displayText: 'UiUx Design'},
  {tabId: 'STATIC', displayText: 'Static'},
]

const projectsList = [
  {
    projectId: 0,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
    title: 'Music Page',
    description:
      'The music page enables the users to browse through the images of all-time favorite music albums.',
  },
  {
    projectId: 1,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    title: 'Tourism Website',
    description:
      'A tourism website enables the user to browse through the images of popular destinations.',
  },
  {
    projectId: 2,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s1-img.png',
    title: 'Advanced Technologies',
    description:
      'A website that gives you a basic understanding of Advanced Technologies.',
  },
    //  {
    //    projectId: 3,
    //    category: 'STATIC',
    //    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s2-img.png',
    //    title: 'Happy Meals',
    //    description: 'Discover the best foods in over 1,000 restaurants.',
    //  },
  {
    projectId: 4,
    category: 'UIUX-DESIGN',
    imageURL: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/c306b6122756835.60e056e288a49.png',
    title: 'Mercedes-Benz Website Redesign',
    description:
      'Mercedes-Benz Website UI Redesign, created with various creative Adobe Creative Tools',
  },
  {
    projectId: 5,
    category: 'UIUX-DESIGN',
    imageURL: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/795e66122693301.60dedf778d712.png',
    title: 'Caytrex WebApp',
    description: 'A Website Ui Design of a Crypto Currency App ',
  },
  {
    projectId: 6,
    category: 'UIUX-DESIGN',
    imageURL: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ea4d0c122727071.60dff3dad2327.png',
    title: 'Imperial - Real Estate Web Design Project',
    description:
      'A Real Estate Website Ui Design Project with mobile prototype design.',
  },
//  {
//    projectId: 7,
//    category: 'UIUX-DESIGN',
//    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r1-img.png',
//    title: 'Design',
//    description:
//      'A website to showcase the best features and give more information about the Design tool.',
//  },
  {
    projectId: 8,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: 'Speed Typing Test',
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
  },
  {
    projectId: 9,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: 'Random Joke Page',
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
  },
  {
    projectId: 10,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
    title: 'Sizing An Image',
    description:
      'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
  },
]

class App extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
  }

  clickTabItem = tabValue => {
    this.setState({activeTabId: tabValue})
  }

  getFilteredProjects = () => {
    const {activeTabId} = this.state
    const filteredProjects = projectsList.filter(
      eachprojectDetails => eachprojectDetails.category === activeTabId,
    )
    return filteredProjects
  }

  render() {
    const {activeTabId} = this.state
    const filteredProjects = this.getFilteredProjects()
    return (
      <div className="app-container">
        <Header />
        <Hero/>
        <Skills/>
        <h1 className="title"> 🏅 My Projects</h1>
        <p className="description">
          Your skills and achievements showcase your strengths and abilities.
          Speak about any new skills or software you learnt to perform the
          project responsibilities.
        </p>

        <ul className="tabs-container">
          {tabsList.map(tabDetails => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              clickTabItem={this.clickTabItem}
              isActive={activeTabId === tabDetails.tabId}
            />
          ))}
        </ul>

        <ul className="project-list-container">
          {filteredProjects.map(projectDetails => (
            <ProjectItem
              key={projectDetails.projectId}
              projectDetails={projectDetails}
            />
          ))}
        </ul>
        <Footer/>
      </div>
    )
  }
}

export default App