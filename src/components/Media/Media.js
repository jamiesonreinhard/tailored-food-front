import React from "react";

const MediaGrid = () => {
  const [posts, setPosts] = React.useState([]);

  const fetchPosts = () => {
    let PROJECT_ID = "akitsunj";
    let DATASET = "production";
    let QUERY = encodeURIComponent('*[_type == "post"]');

    // Compose the URL for your project's endpoint and add the query
    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

    // fetch the content
    fetch(URL)
      .then((res) => res.json())
      .then(({ result }) => {
        console.log(result);
        setPosts(result);
      })
      .catch((err) => console.error(err));
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="media">
      <div className="container">
        <div className="articleGrid">
          <div className="header">
            <h2 className="title">{"Media & News"}</h2>
            <p className="subtitle">
              {"Tailored Food has been busy working with its partners."}
            </p>
          </div>
          <div className="cardContainer">
            {posts?.map((post, index) => (
              <a
                key={index}
                href={post.url}
                className="card"
                style={{ backgroundImage: `url(${post.image})` }}
              >
                <div className="overlay">
                  <h3 className="cardTitle">{post.title}</h3>
                  <h3 className="cardSubtitle">{post.subtitle}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaGrid;
