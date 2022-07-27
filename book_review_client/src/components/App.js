import React from 'react';
import Books from './Books';
// import { BrowserRouter } from "react-router-dom";
// import { booksReducer } from '../reducers/booksReducer';


class App extends React.Component {
  // componentDidMount() {
  //   this.props.getBooks();
  // }

  render() {
    return (
      <div className="App">
        <Books />
        {/* <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/books" component={Books}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/add_book" component={CreateBook}></Route>
          </Switch>
        </BrowserRouter> */}
      </div>
    );
  }
}

export default App;

// export default connect(null, { getBooks })(App);