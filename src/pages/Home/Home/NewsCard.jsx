import React from "react";
import { Card } from "react-bootstrap";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, image_url, title, details, rating } = news;
  return (
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 256)}...
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Rating
          placeholderRating={rating.number}
          readonly
          emptySymbol={<FaRegStar className="text-warning"></FaRegStar>}
          placeholderSymbol={<FaStar className="text-warning"></FaStar>}
          fullSymbol={<FaStar></FaStar>}
        ></Rating>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
