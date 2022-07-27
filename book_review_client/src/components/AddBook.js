import React, { Component } from "react";



class AddBook extends Component {
    state = {
        title: "",
        author: "",
        genres: "",
    };

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <form>
                    <h2>Add Book</h2>
                    <label>Title</label>
                    <input
                        type="text"
                        value={this.state.title}
                        name="title"
                        onChange={this.handleOnChange} />
                    <br />
                    <label>Author</label>
                    <input
                        type="text"
                        value={this.state.author}
                        name="author"
                        onChange={this.handleOnChange} />
                    <br />
                    <label>Genres</label>
                    <input
                        type="text"
                        value={this.state.genres}
                        name="genre"
                        onChange={this.handleOnChange} />
                    <br />
                    <input type="submit" value="Add Book" onClick={this.handlonClick} />
                </form>
            </div>
        );
    }
}



export default AddBook;

