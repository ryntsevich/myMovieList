// import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { LANDING } from '../../constants/routes';
// import PropTypes from 'prop-types';

// import './SearchBar.css';
// // import Spinner from '../Spinner/Spinner';

// class SearchBar extends React.Component {
//   // const { onClick, value, setValue } = props;

//   // console.log(props)
//   // let newValue = null;

//   state = {
//     value: this.props.value
//   };

//   changeInputValue = (event) => {
//     // this.props.cbIsChange();
//     if (event.target.value.trim()) {
//       this.setState({ value: event.target.value });
//       console.log(this.state.value)
//     };

//     search = (this.state.value) => {
//       this.props.cbSearch(this.state.value)
//     }


//   }
//   render() {
//     return (
//       <div className="searchBar__container">
//         <input className="searchBar__input" type="text" defaultValue={this.state.value} onChange={this.changeInputValue} placeholder="Search..." />
//         <input type="button" value="Search" onClick={this.search} />
//       </div>
//     );
//   }
// }

// // SearchBar.propTypes = {
// //   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// //   onClick: PropTypes.func,
// // };

// export default SearchBar;
