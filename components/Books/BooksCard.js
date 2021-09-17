export default function BooksCard({image, name, author}) {
    return (
        <div className="books_card">
            <img src={image} alt="bookImg" />
            <div className="books_info">
              <span className="books_name">{name}</span>
              <span className="books_author">{author}</span>
            </div>
        </div>
    )
}