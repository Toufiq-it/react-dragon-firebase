import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, image_url, details } = news;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl mb-16 border-b-2">
                <figure><img className='' src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>
                        {details}
                    </p>
                    {
                        details.length > 200
                            ? <p>{details.slice(0, 200)} <Link 
                            to={`/news/${_id}`}
                            className='text-blue-600 font-bold'>Read More....</Link></p>
                            : <p>{details}</p>
                    }
                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object
}

export default NewsCard;