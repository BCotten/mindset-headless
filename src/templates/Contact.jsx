import { useState, useEffect } from "react";
import Loading from "../utilities/Loading";
import { restBase } from "../utilities/Utilities";

const Contact = () => {
  const restPath = restBase + "pages?slug=contact&_embed";
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
            <h1>{restData.title.rendered}</h1>
            <div
              className="entry-content"
              dangerouslySetInnerHTML={{ __html: restData.content.rendered }}
            ></div>
          </article>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Contact;
