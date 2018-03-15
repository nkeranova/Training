import React from 'react'
import ReactDOM from 'react-dom'
const ce = React.createElement

const MyTitle = function (props) {
  return (
    ce('div', null,
      ce('h1', { style: { color: props.color } }, props.title))
  )
}

const MyComponent = function () {
  return ce('div', { id: 'my-component' },
    ce(MyTitle, { title: 'Game of Thrones', color: 'Aquamarine' }),
    ce(MyTitle, { title: 'Taboo', color: 'LimeGreen' }),
    ce(MyTitle, { title: 'Silicon Valley', color: 'DeepBlue' }))
}

ReactDOM.render(
  ce(MyComponent),
  document.getElementById('app')
)
