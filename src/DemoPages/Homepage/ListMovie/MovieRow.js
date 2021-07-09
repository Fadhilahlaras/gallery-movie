import React from 'react'
import {Button, Card} from 'reactstrap'

class MovieRow extends React.Component {
  viewMovie() {
    // console.log("Trying to view movie")
    // console.log(this.props.movie.title)
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }

  render() {
    return <table key={this.props.movie.id} >
        <tbody>
        <tr>
          <td>
            <img alt="poster" width="120" src={this.props.movie.poster_src}/>
          </td>
          <td style={{fontStyle: "bold", paddingLeft: "30px"}}>
            <h3>{this.props.movie.title}</h3>
            <p>{this.props.movie.overview}</p>
            <input style={{fontSize:"15px", backgroundColor:"yellow"}} color="warning" type="button" onClick={this.viewMovie.bind(this)} value="View Detail"/>
          </td>
        </tr>

        </tbody>
    </table>
  }
}

export default MovieRow