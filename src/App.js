import React from 'react';
import MovieGrid from './Components/MovieGrid/MovieGrid';
import movies from './assets/movies.json';

const App = () => <MovieGrid items={movies} />;

// export default class App extends Component {
//   render() {
//     return <MovieGrid items={movies} />;
//   }
// }

export default App;
