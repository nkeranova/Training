import React from 'react'
// import renderer from 'react-test-renderer'
// import { shallow } from 'enzyme' // render, static
import preload from '../../data.json'
// import Search from '../Search'
import Search, { Unwrapped as UnwrappedSearch } from '../Search';
import ShowCard from '../ShowCard'
import Header from '../Header';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../store';
import { setSearchTerm } from '../actionCreators';
import { shallow, render } from 'enzyme' // add render import

test('Search renders correctly', () => {
    // const component = shallow(<Search shows={preload.shows}/>)
    // let tree = component.toJSON()
    const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm='' />);
    expect(component).toMatchSnapshot()
})

test('Search should render correct amount of shows', () => {
    // const component = shallow(<Search shows={preload.shows}/>) //shows={preload.shows}
    const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm='' />);
    expect(component.find(ShowCard).length).toEqual(preload.shows.length)
})

test('Search should render correct amount of shows based on search without Redux', () => {
    const searchWord = 'black'
    const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm={searchWord} />) // shows={preload.shows}

    // component.find(Header).dive().find('input').simulate('change', { target: { value: searchWord } });
    // component.find('input').simulate('change', {target: { value: searchWord }})
    const showCount = preload.shows.filter(
        show => `${show.title.toUpperCase()} ${show.description.toUpperCase()}`.indexOf(searchWord.toUpperCase()) >= 0).length
    expect(component.find(ShowCard).length).toEqual(showCount)
})

test('Search should render correct amount of shows based on search with Redux', () => {
    const searchWord = 'New York';
    store.dispatch(setSearchTerm(searchWord));
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Search shows={preload.shows} />
        </MemoryRouter>
      </Provider>
    );
    const showCount = preload.shows.filter(show =>
      `${show.title.toUpperCase()} ${show.description.toUpperCase()}`.includes(searchWord.toUpperCase())
    ).length;
    expect(showCount).toEqual(component.find('.show-card').length);
  });
// when we want to skip some test case, we can add x to test i.e. xtest()
/* correct approach

describe('Search', () => {
    it('render correcty', () => {

    })

    it('should render correct amount of shows', () => {

    })
})
*/