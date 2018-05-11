// TODO migrate to typescript instead of using proptypes (build time rather than run time checks, and a little nicer with functional reactive)
// BUG select options is below adjacent elements
// TODO search terms automatically in lowercase

// TODO refactor to not use redux
  // Make alter state that uses setState() - alterBooks(index, objToModify) where objToModify is {status: 'new-status'} 
  // pass alter function down through functions
  // need to refactor saveData to trigger on data modificaiton (imperative)
  


import React, {Component} from 'react';
import Header from './Header';
import BookShelf from './BookShelf';
import AddBook from './AddBook';
import { loadState, saveState } from './localStorage'
import { createStore } from 'redux';
import { Route } from 'react-router-dom';
import './App.css';

const persistedState = loadState()

const initialState = {
  books : [
      {
        index: 0,
        title: "Out of the Box",
        author: "Suzanne Dudley",
        status: "currently-reading",
        imgUrl: "https://99designs-blog.imgix.net/wp-content/uploads/2017/12/attachment_83090027.jpg?auto=format&q=60&fit=max&w=930"
      },
      {
        index: 1,
        title: "The World of Abstract Art",
        author: "Emily Robbins",
        status: "want-to-read",
        imgUrl: "https://about.canva.com/wp-content/uploads/sites/3/2015/01/art_bookcover.png"
      },
      {
        index: 2,
        title: "Dungeon Lord",
        author: "Hugo Huesca",
        status: "done-reading",
        imgUrl: "https://static1.squarespace.com/static/5202d1b3e4b099a0812c51a3/523753d6e4b030ffaec4a565/5a2043310d9297af42dde909/1512063793878/Dungeon-Lord.jpg"
      },
      {
        index: 3,
        title: "The Both Die at the End",
        author: "Adam Silver",
        status: "currently-reading",
        imgUrl: "https://insiders.bookriot.com/wp-content/uploads/2017/07/They_Both_Die_at_the_End_cover.jpg",
      },
      {
        index: 4,
        title: "Tess of the Road",
        author: "Rachel Hartman",
        status: "want-to-read",
        imgUrl: "https://i.pinimg.com/736x/1c/52/59/1c5259ef6eb54ce4bfc2c1880fdaaa90.jpg"
      },
      {
        index: 5,
        title: "The Confidence Effect",
        author: "Grace Killelea",
        status: "done-reading",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6FcQwPboXhx4lvX4RYM4i_y_MGYmV_QqCQPeuqCFXs_fAwC3Hw"
      },
      {
        index: 6,
        title: "Mom, I'm Gay",
        author: "Susan Cottrel",
        status: "currently-reading",
        imgUrl: "http://www.designpointinc.com/wp-content/uploads/designpoint-book-cover-mom-im-gay.jpg"
      },
      {
        index: 7,
        title: "Illuminations",
        author: "rimbaud",
        status: "want-to-read",
        imgUrl: "https://www.poetrysociety.org/psa/poetry/crossroads/on_poetry/covers/attachment/preview.jpg"
      },
      {
        index: 8,
        title: "1984",
        author: "George Orwell",
        status: "done-reading",
        imgUrl: "http://wwwcdn.printmag.com/wp-content/uploads/1984-book-covers-2.jpg",
      },
      {
        index: 9,
        title: "Fred the Lonely Monster",
        author: "Anne Lowinsky",
        status: "none",
        imgUrl: "https://about.canva.com/wp-content/uploads/sites/3/2015/01/children_bookcover.png"
      },
      {
        index: 10,
        title: "The Vegetarian",
        author: "Han Kang",
        status: "none",
        imgUrl: "https://cdn.pastemagazine.com/www/system/images/photo_albums/30-best-book-covers-2016/large/2vegetariancover.png?1384968217",
      },
      {
        index: 11,
        title: "Pride and Prejudice",
        author: "Jane Austin",
        status: "none",
        imgUrl: "http://digitalausten.org/sites/default/files/media/image/2017-10/Norton%202%20Edition%20Front.jpg",
      },
      {
        index: 12,
        title: "Harry Potter and the Order of the Phoenix",
        author: "J.K. Rowling",
        status: "none",
        imgUrl: "http://cdn01.cdn.justjaredjr.com/wp-content/uploads/2013/07/hp-covers/new-harry-potter-book-covers-05.jpg"
      },
      {
        index: 13,
        title: "American Pyscho",
        author: "Bret Easton Ellis",
        status: "none",
        imgUrl: "https://shortlist.imgix.net/app/uploads/2012/06/24225129/the-50-coolest-book-covers-5.jpg?w=1200&h=1&fit=max&auto=format%2Ccompress"
      },
      {
        index: 14,
        title: "Hajit Murat",
        author: "Leo Tolstoy",
        status: "none",
        imgUrl: "http://1.bp.blogspot.com/-ww3RXKXqd0g/UUDpegddlKI/AAAAAAAAJj4/PbCYey5Xh-I/s1600/hadji+murat.jpg"
      },
      {
        index: 15,
        title: "The Hobbit",
        author: "J.R.R Tolkien",
        status: "none",
        imgUrl: "http://nerdalicious.com.au/wp-content/uploads/2013/09/Hobbit-Ballantine-1989.jpg"
      },
      {
        index: 16,
        title: "Bloatef JabbaScript Frameworks",
        author: "Pete Hunt",
        status: "none",
        imgUrl: "https://boyter.org/static/books/ChnulxvW0AEUs1J.jpg-large.jpg"
      },
      {
        index: 17,
        title: "Shatner Quake",
        author: "William Shatner",
        status: "none",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJJEVcYM9H3SJLM5sN5La2HMravsi0t-9XVV_nw0w7v1Ssj46y"
      },
      {
        index: 18,
        title: "Harry Potter and the Sorcerers Stone",
        author: "J.K. Rowling",
        status: "none",
        imgUrl: "https://ewedit.files.wordpress.com/2016/09/hpsorcstone.jpg"
      },
    ],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_BOOK":
      return {
        books: state.books.map( book => {
          if (book.index !== action.index) {
            return book
          } else {
            return {
              ...book,
              status: action.status
            }
          }
        })
      }
    default:
      return state;
  }
}

const store = createStore(reducer, persistedState)
store.subscribe(() => {
  saveState(store.getState());
});

class App extends Component {
  constructor() {
    super()
    this.state = persistedState || initialState
  }

  alterBook = (index, status) => {
    // returns new state

    const books = this.state.books
    const newBooks = books.map( book => {
      if (book.index === index) {
        return {
          ...book,
          status
        }
      } else {
        return book
      }
    })
    this.setState({books: newBooks})
  }

  render() {

    return (
        <div>
          <Header />
          <main>
            <Route exact path="/" render = { () => <BookShelf state = {this.state}/>} />
            <Route exact path="/add" render = { () => <AddBook state = {this.state}/>}/>
          </main>
        </div>
    )
  }
}

export default App;
