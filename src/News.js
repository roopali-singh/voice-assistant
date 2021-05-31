import React from "react";
import "./News.css";

function News() {
  // let news;
  const newsData = document.createElement("div");
  document.body.append(newsData);
  // var newsData = document.querySelector("#news");
  // var newsHtml;
  // newsData.innerHTML = newsHtml;
  let source = "the-hindu";
  let apiKey = "a5225953c2564a3cb63d8e2e82a72b9c";

  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
    true
  );
  xhr.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      let articles = json.articles;
      let newsHtml = "";
      articles.forEach(function (element, index) {
        const news = `<div class="accordion" id="accordionExample">
        <div class="accordion-item">
        <h2 class="accordion-header" id="heading${index}">
          <button
            class="accordion-button collapsed forColor"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse${index}"
            aria-expanded="false"
            aria-controls="collapse${index}"
          >
            <b>Breaking News ${index + 1} : </b>
            <span> ${element["title"]}</span>
          </button>
        </h2>
        <div
          id="collapse${index}"
          class="accordion-collapse collapse"
          aria-labelledby="heading${index}"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
          ${element["content"]}. <a href="${
          element["url"]
        }" target="_blank">Read more here</a>
          </div>
        </div>
      </div>
      </div>`;

        newsHtml += news;
      });
      newsData.innerHTML = newsHtml;
    } else {
      console.log("some error occured");
    }
  };
  xhr.send();

  return (
    <div className="news" id="news">
      {/* <p>{news}</p> */}
    </div>
  );
}

export default News;
