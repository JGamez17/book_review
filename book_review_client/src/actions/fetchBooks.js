
function getBooks() {
    return (dispatch) =>
        fetch("http://localhost:3001/books")
            .then((res) => res.json())
            .then((books) => {
                dispatch({ type: "GET_BOOKS", payload: books });
            });
};

export { getBooks }