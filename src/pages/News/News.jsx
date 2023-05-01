import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  const { _id, title, image_url, details, category_id } = news;
  console.log(news);
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details.length < 250 ? details : <>{details.slice(0, 250)}...</>}
          </Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="primary">All News Category</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
