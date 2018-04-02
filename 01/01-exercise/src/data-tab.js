import React, { Component } from 'react'
import './data-tab.css'

class DataTab extends Component {
  state = {
    selectedIndex: 0
  }

  renderTabHeaders = data => {
    const { selectedIndex } = this.state
    return (
      <header>
        {data.map((item, index) => (
          <div
            className={
              'tab-header' + (selectedIndex === index ? ' selected' : '')
            }
            onClick={() =>
              this.setState({
                selectedIndex: index
              })
            }
          >
            {item.title}
          </div>
        ))}
      </header>
    )
  }

  renderTabContents = data => {
    const { selectedIndex } = this.state
    return (
      <section className="tab-content-container">
        {data.map(
          (item, index) =>
            index === selectedIndex && (
              <div className="tab-content">{item.content}</div>
            )
        )}
      </section>
    )
  }

  render() {
    const { data } = this.props
    return (
      <div>
        {this.renderTabHeaders(data)}
        {this.renderTabContents(data)}
      </div>
    )
  }
}

export default DataTab
