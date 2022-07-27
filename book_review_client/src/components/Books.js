import React, { Component } from "react";
import { getBooks } from ',/actions/fetchBooks'
import { connect } from "react-redux";

class Books extends React.Component {
    componentDidMount() {
        this.props.getBooks();
    }
    render() {
        return (
            <div>
                {/* {this.props.books.map((book) => {
                return <BookCard key={book.id} bookobj={book} />
            })} */}
            BOOKS LISTED HERE
            </div>
        )
    }
}

export default Books;
// export default connect(null, { getBooks })(Books);