# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
 
books = Book.create([
	{
		title: "Out of the Silent Planet",
		author: "CS Lewis",
		genres: "Science Fiction"
	},
{
		title: "Accidental Thief",
		author: "Jamie Davis",
		genres: "Fantasy"
	},
{
		title: "Milk and Honey",
		author: "Rupi Kaur",
		genres: "Poetry"
	}
])

reviews = Review.create([
	{
		title: "great book",
		score: 5
		# book: books.first
	}
])
