import React, { useEffect, useState } from "react";
import Layout from "../Layouts/index";
import "./story.css";

const featuredList = [
  {
    title: "Kimiko Matsuda-Lawrence",
    desc: "On Being Black and Asian in America",
  },
  {
    title: "Sara Herchenroether",
    desc: "I Thought I Had to Breastfeed My Babies. Then I Lost My Breasts",
  },
  {
    title: "Shoshana Zuboff",
    desc: "Democracy Can Still End Big Tech's Dominance Over Our Lives",
  },
  {
    title: "Ruth Millington",
    desc: "Dora Maar's Anti-Fascist Worldview Influenced Picasso's Art",
  },
  {
    title: "Suriya Jayanti",
    desc: "Ukraine Is in Worse Shape than You Think",
  },
  {
    title: "Vangela M. Wade",
    desc: "Don’t Use Racial Equality to Justify Stripping Women of Their Right to Choose",
  },
];

function Story() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getTimeStories")
      .then((response) => response.json())
      .then((data) => setStories(data));
  }, []);

  return (
    <Layout>
      <div
        style={{
          margin: "0px 100px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "80%" }}>
          <p style={{ fontSize: "32px", fontWeight: "bold" }}>
            FEATURED VOICES
          </p>
          <ul className="list">
            {featuredList?.map((item) => {
              return (
                <li className="li">
                  <p
                    style={{
                      color: "red",
                      fontSize: "26px",
                      margin: "15px 0px",
                    }}
                  >
                    {item.title}
                  </p>
                  <p style={{ fontSize: "22px", margin: "0px" }}>{item.desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div style={{ flex: "20%" }}>
          <p
            style={{
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            LATEST STORIES
          </p>
          <ul className="storylist">
            {stories?.map((item) => {
              return (
                <li className="storylistchild">
                  <a className="storylink" href={item.link}>
                    {item.title}
                  </a>
                  <p className="storydate">{item.createdAt}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Story;
