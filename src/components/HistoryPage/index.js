import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class HistoryPage extends Component {
  state = {inputElement: '', historyList: initialHistoryList}

  onInputChange = event => {
    this.setState({inputElement: event.target.value})
  }

  onDelete = uniqueNo => {
    const {historyList} = this.state

    const filteredList = historyList.filter(each => each.id !== uniqueNo)

    this.setState({historyList: filteredList})
  }

  render() {
    const {inputElement} = this.state

    const {historyList} = this.state

    const newList = historyList.filter(each =>
      each.title.toLowerCase().includes(inputElement.toLowerCase()),
    )

    return (
      <>
        <div className="bgContainer">
          <nav className="Navbar">
            <img
              className="navLogo"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
            <div className="inputContainer">
              <img
                className="searchIcon"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png "
                alt="search"
              />
              <input
                className="input"
                type="search"
                value={inputElement}
                onChange={this.onInputChange}
              />
            </div>
          </nav>
          {newList.length !== 0 ? (
            <ul className="historyContainer">
              {newList.map(each => (
                <HistoryItem
                  key={each.id}
                  values={each}
                  remove={this.onDelete}
                />
              ))}
            </ul>
          ) : (
            <p className="emptyMsg">There is no history to show</p>
          )}
        </div>
      </>
    )
  }
}
export default HistoryPage