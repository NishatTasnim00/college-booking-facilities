import Gallery from '../../component/Gallery/Gallery';
import Colleges from '../../component/Home/Colleges/Colleges';
import SearchOption from '../../component/Home/SearchOption/SearchOption';
import Research from '../../component/Research/Research';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto space-y-20 mb-20 mt-10'>
        <SearchOption></SearchOption>
        <Colleges></Colleges>
        <Gallery></Gallery>
        <Research></Research>
        <Reviews></Reviews>
        </div>
    );
};

export default Home;