
function getBooks() {
    return (dispatch) =>
        fetch("http://localhost:3001/books")
            .then((res) => res.json())
            .then((books) => {
                dispatch({ type: "GET_BOOKS", payload: books });
            });
};


function addBook(book) {
    return (dispatch) => {
        fetch("http://localhost:3001/books", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify(book),
        })
    }
}
export { getBooks, addBook }