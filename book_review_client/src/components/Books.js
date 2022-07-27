import React, { Component } from "react";
import { getBooks } from '../actions/fetchBooks'
import { connect } from "react-redux";
import AddBook from './AddBook';

class Books extends Component {
    componentDidMount() {
        this.props.getBooks();
    }
    render() {
        return (
            <div>
                <AddBook />
                {/* {this.props.books.map((book) => {
                return <BookCard key={book.id} bookobj={book} />
            })} */}
            BOOKS LISTED HERE
            </div>
        )
    }
}

export default connect(null, { getBooks })(Books);