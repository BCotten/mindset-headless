import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../utilities/Loading";
import { restBase } from "../utilities/Utilities";
import FeaturedImage from "../utilities/FeaturedImage";

const Post = () => {
  const { slug } = useParams();
  const restPath = `${restBase}posts?slug=${slug}&_embed`;
  const [restData, setData] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data[0]);
        setLoadStatus(true);
      } else {
        setLoadStatus(false);
      }
    };
    fetchData();
  }, [restPath]);

  return (
    <>
      {isLoaded ? (
        <>
          <title>{`${restData.title.rendered} | Mindset Headless`}</title>
          <article id={`post-${restData.id}`}>
            {restData.featured_media !== 0 && restData._embedded && (
              <FeaturedImage
                featuredImageObject={restData._embedded["wp:featuredmedia"][0]}
              />
            )}

            <h1>{restData.title.rendered}</h1>

            <div
              className="entry-content"
              dangerouslySetInnerHTML={{ __html: restData.content.rendered }}
            ></div>
          </article>

          <nav className="posts-navigation">
            {restData?.previous_post?.slug && (
              <Link
                to={`/blog/${restData.previous_post["slug"]}`}
                className="prev-post"
              >
                Previous: {restData.previous_post["title"]}
              </Link>
            )}
          </nav>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Post;
