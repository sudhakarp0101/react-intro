import React from 'react';
import Movie from '../Movie/Movie.jsx'
class Movies extends React.Component{
    render(){
        return <div>
                <Movie banner="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bheeshma-telugu-et00123751-13-01-2020-04-08-18.jpg" 
                likes="125.0k" name="Bheeshma" actor="Nithin"/>
                <Movie banner="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ala-vaikunthapuramulo-et00109721-15-08-2019-01-57-15.jpg" 
                likes="185.0k" name="Ala vaikunta puram lo" actor="Allu Arjun"/>
                <Movie banner="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sarileru-neekevvaru-et00103955-31-05-2019-02-32-44.jpg" 
                likes="225.0k" name="Sarileru Nikevvaru" actor="Mahesh"/>
        </div>;
    }
}
export default Movies;