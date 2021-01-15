import React from "react";
import PortfolioCard from './protfolioCard'

//import stock
import highQWeb from "../img/highqWeb.png";
import highQ2 from "../img/highq-2.png";
import highQ3 from "../img/highq-3.png";
import highQ4 from "../img/highq-4.png";
import highQ5 from "../img/highq-5.png";
import twitterVue from '../img/twitter-vue.png'
import twitter2 from '../img/twitter-2.png'
import twitter3 from '../img/twitter-3.png'
import twitter4 from '../img/twitter-4.png'
import twitter5 from '../img/twitter-5.png'
import twitter6 from '../img/twitter-6.png'


class Portfolio extends React.Component {
  render() {
    const projects = [
      {
        id: "highq-react",
        title: "High Q web 圖文作家的宣傳官網",
        github: 'https://github.com/Eli-777/HighQ-web',
        demo: "https://eli-777.github.io/HighQ-web/",
        detailTitle: "獨立製作，設計RWD網站，以 mobile first 方式設計。",
        detailContent: "可供圖文作家發布來自其他社群媒體的訊息和自己本身相關資訊，提供留言板功能搜集意見，有後台功能能新增、編輯、刪除前台相關資訊。",
        skills: [
          "ReactJS",
          "React-Redux",
          "Redux-saga",
          "Scss",
          "Firebase"
        ]
      },
      {
        id: "twitter-vue",
        title: "Alphitter 社群網站",
        github: 'https://github.com/Eli-777/twitter-front-end-vue',
        demo: "https://eli-777.github.io/twitter-front-end-vue/",
        detailTitle: "與兩位後端協作，負責前端所有畫面以及功能。",
        detailContent: "可供使用者註冊帳號，發布貼文讓所有人瀏覽，也可以查詢別人的帳號資訊、發過的貼文等，還有公開聊天室讓所有上線的使用者在上面對話。",
        skills: [
          "Vue",
          "Vuex",
          "socket.io"
        ]
      }
    ]

    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                {/* <p className="subtitle-a">
                  點擊 github 圖案看程式碼，或是點擊 Demo 直接看網站
                </p> */}
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <PortfolioCard
              pic1={highQWeb}
              pic2={highQ2}
              pic3={highQ3}
              pic4={highQ4}
              pic5={highQ5}
              project={projects[0]}
            />
            <PortfolioCard
              pic1={twitterVue}
              pic2={twitter2}
              pic3={twitter3}
              pic4={twitter4}
              pic5={twitter6}
              project={projects[1]}
            />

          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
