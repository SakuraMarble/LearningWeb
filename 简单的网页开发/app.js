const app = Vue.createApp({
    data() {
        return {
            url: 'https://www.google.com',
            showBooks: true,
            showFavBooks: true,
            books:[
                {title: 'Name of the Wind', author: 'Patrick Rothfuss', img: 'assets/1.jpg', isFav: true},
                {title: 'The Way of Kings', author: 'Brandon Sanderson', img: 'assets/2.jpg', isFav: false},
                {title: 'Good Omens', author: 'Terry Pratchett & Neil Gaiman', img: 'assets/3.jpg', isFav: true}
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleFav(book) {
            book.isFav = !book.isFav;
        },
        toggleShowFavBooks() {
            this.showFavBooks = !this.showFavBooks
        }
    },
    computed:{
        favBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
});

app.mount('#app')