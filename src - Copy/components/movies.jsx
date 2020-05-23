import React, { Component } from 'react';
import _ from 'lodash';

import  ListGroup  from './common/listGroup';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import  MoviesTable  from './moviesTable';

import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';

class Movies extends Component {
    state = { 
        movies : [],
        genres :[],
        currentPage:1,
        pageSize : 4,
        sortColumn : {path:'title', order :'asc'}
     };

     componentDidMount(){
         const genres = [{_id:"",name :'All Genres'}, ...getGenres()]
         this.setState({movies : getMovies(), genres });
     }

     handleDelete = movie => {
       // console.log(movie);
       const movies = this.state.movies.filter(m => m._id !== movie._id);
       this.setState({ movies})
     };
     handleLike = (movie) => {
       const movies = [...this.state.movies];
       const index = movies.indexOf(movie);
       movies[index] = {...movies[index]};
       movies[index].liked = !movies[index].liked;
       this.setState({ movies});
     };
     handlePageChange = (page) => {
         this.setState ({ currentPage : page});
     };
     handleGenreSelect =(genre) => {
       this.setState( { itemSelected : genre , currentPage :1})
      // console.log(genre);
     };
     handleSort = sortColumn => {
        this.setState({sortColumn})
     }
     getPagedData =()=>{
      const { pageSize, 
        currentPage,
        itemSelected,
        sortColumn, 
        movies :allMovies } = this.state;
    

      const filtered = itemSelected && itemSelected._id ? allMovies.filter(m => m.genre._id === itemSelected._id) :allMovies;
      
    const sorted =  _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
      const movies = paginate(sorted, currentPage, pageSize);

      return {totalCount: filtered.length, data: movies};
     }

    render() { 
        const { length : count } = this.state.movies;
        const { pageSize, 
            currentPage,
            itemSelected,
            sortColumn 
             } = this.state;
            if (count === 0) return <p>There are no movies in the DB</p>  
    const {totalCount, data:movies} = this.getPagedData();
        return (
    <div className="row">
        <div className="col-2 m-2">
          <ListGroup items={this.state.genres}
                     selectedItem = {this.state.itemSelected}
                     onItemSelect={this.handleGenreSelect} />
        </div>
        <div className="col">
           <div className="container m-2">
            <p>Showing {totalCount } movies from the DB</p> 
           <MoviesTable movies={movies}
                        sortColumn={sortColumn}
                        onLike={this.handleLike}
                        onSort={this.handleSort}
                        onDelete={this.handleDelete} />
           <Pagination itemsCount={totalCount} 
                       pageSize={this.state.pageSize}
                       currentPage ={this.state.currentPage} 
                       onPageChange={this.handlePageChange}/>
        </div>
        </div>
    </div>
         );
    }
}
 
export default Movies;