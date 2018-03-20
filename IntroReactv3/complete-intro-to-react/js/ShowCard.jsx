// @flow

import React from 'react';
// import { string } from 'prop-types';
// $FlowFixMe
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link: any)`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

class ShowCard extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  props: {
    poster: string,
    title: string,
    year: string,
    description: string,
    imdbID: string,
  };
  render() {
    return (
      <Wrapper className="show-card" to={`/details/${this.props.imdbID}`}>
        <Image alt={`${this.props.title} Show Poster`} src={`/public/img/posters/${this.props.poster}`} />
        <div>
          <h3>{this.props.title}</h3>
          <h4>({this.props.year})</h4>
          <p>{this.props.description}</p>
        </div>
      </Wrapper>
    );
  }
}

export default ShowCard;


// ShowCard.propTypes = {
//   poster: string.isRequired,
//   title: string.isRequired,
//   year: string.isRequired,
//   description: string.isRequired
// };
