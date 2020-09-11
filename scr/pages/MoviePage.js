import React from 'react';
import { connect } from 'react-redux';

// import Movie from '../containers/Movie/Movie';

// const MoviePage = props => {
//     return (
//         <div>
//             <h1>{props.movie ? props.movie.title : null}</h1>
//             <Movie id={props.match.params.movieId} />
//         </div>
//     );
// };

// const mapStateToProps = state => {
//     return {
//         movie: state.movie.movie,
//     };
// };

// export default connect(mapStateToProps)(MoviePage);

class MoviePage extends React.PureComponent {
          
    render() {
  
      // раз написано <Route path="/client/:clid" component={Page_Client} />
      // значит Page_Client получит то что в УРЛе после /client/ под именем props.match.params.clid в виде строки
      let movieId=parseInt(this.props.match.params.movieId);
  
      let clientData=appData.clientsArr.find( c => c.id==clientId );
  
      return (
        <MobileClientInfo
          info={clientData}
        />
      );
      
    }
  
  }
