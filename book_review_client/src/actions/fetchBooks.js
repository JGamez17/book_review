
function getBooks() {
    return (dispatch) =>
        fetch("http://localhost:3001/books")
            .then((res) => res.json())
            .then((books) => {
                dispatch({ type: "GET_BOOKS", payload: books });
            });
};


function addBooks(books) {
    return (dispatch) => {
        fetch("http://localhost:3001/books", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify(books),
        })
    }
}
export { getBooks, addBooks }