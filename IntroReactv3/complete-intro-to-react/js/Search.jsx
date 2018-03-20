// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';

const Search = (props: {
  searchTerm: string, // eslint-disable-line react/no-unused-prop-types
  shows:Array<{
      title: string,
      description: string,
      year: string,
      imdbID: string,
      poster: string,
      trailer: string
  }>
}) => (
  <div className="search">
    <Header showSearch />
    <div>
      {props.shows
        .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0)
        .map((show, index) => <ShowCard {...show} key={show.imdbID} id={index} />)}
    </div>
  </div>
);

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});
export const Unwrapped = Search
export default connect(mapStateToProps)(Search);

// class Search extends Component {
//   // state = {
//   //   searchTerm: ''
//   // };
  
//   // props: {
//   //   // shows: Array<Show>
//   //   shows: Array<{
//   //       title: string,
//   //       description: string,
//   //       year: string,
//   //       imdbID: string,
//   //       poster: string,
//   //       trailer: string
//   //   }>
//   // };
//   // handleSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
//   //   this.setState({ searchTerm: event.target.value });
//   // };
//   render() {
//     return (
//       <div className="search">
//         <Header searchTerm={this.state.searchTerm} showSearch handleSearchTermChange={this.handleSearchTermChange} />
//         <div>
//           {this.props.shows
//             .filter(
//               show =>
//                 `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
//             )
//             .map(show => <ShowCard key={show.imdbID} {...show} />)}
//         </div>
//       </div>
//     );
//   }
// }

// export default Search;

// // @flow

// import React, { Component } from 'react';
// // import preload from '../data.json';
// import ShowCard from './ShowCard';
// import Header from './Header';

// class Search extends Component {
//     // constructor(props) {
//     //     super(props);
    
//     //     this.state = {
//     //       searchTerm: 'this is a debug statement'
//     //     };
//     //   }
//     state = {
//     searchTerm: ''
//     }

//     // props: {
//     //     shows: Array<mixed>
//     // }

//     // we can declare new type in types.js and use it in the Array
//     // type Show = {
//     //     title: string,
//     //     description: string,
//     //     year: string,
//     //     imdbID: string,
//     //     poster: string,
//     //     trailer: string
//     //   };
      
//       // add propTypes inside Search
//       props: {
//         // Array<Show>
//         shows: Array<{
//             title: string,
//             description: string,
//             year: string,
//             imdbID: string,
//             poster: string,
//             trailer: string
//         }>
//       };

//     handleSearchTermChange = (event: SyntheticKeyboardEvent & {target: HTMLInputElement}) => {
//         this.setState({searchTerm: event.target.value})
//     }
//     render() {
//         // this.state.searchTerm.toUpperCase()
//         return (
//         <div className="search">
//          <Header showSearch />
//             <div>
//                 {this.props.shows
//                     .filter(
//                     show =>
//                         `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
//                     )
//                     .map((show, index) => <ShowCard {...show} key={show.imdbID} id={index} />)}
//             </div>
//         </div>
//         )
//     }
// }

// export default Search