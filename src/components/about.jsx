import React from "react";
import { FaRegHandPointRight } from 'react-icons/fa';
import pdf from '../pdf/Eli-resume.pdf'

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: 'react',
          name: 'React',
          icon: 'devicon-react-original colored skill-icon pl-3',
        },
        {
          id: 'Angular',
          name: 'Angular',
          icon: 'devicon-angularjs-plain colored skill-icon pl-3',
        },
        {
          id: 'javascript',
          name: 'Javascript',
          icon: 'devicon-javascript-plain colored skill-icon pl-3',
        },
        {
          id: 'css',
          name: 'CSS',
          icon: 'devicon-css3-plain colored skill-icon pl-3',
        },
        {
          id: 'scss',
          name: 'Scss',
          icon: 'devicon-sass-original colored skill-icon pl-3',
        },
        {
          id: 'bootstrap',
          name: 'bootstrap',
          icon: 'devicon-bootstrap-plain colored skill-icon pl-3',
        },
      ],
      experiences: [
        {
          id: "firm01",
          firmName: "台灣永興東潤服飾有限公司",
          jobTitle: "會計專員",
          jobDate: "2018~2019",
          jobDescription: "嬰幼童運動用品專賣店，代理各大運動品牌 Nike、levis 等。",
          jobWork: [
            "查核新導入的會計系統問題，及後續追蹤。",
            "協助公司轉換銀行，降低刷卡手續費率並增加店鋪收款方式。",
            "製作銀行手續費試算核對報表。"
          ]
        },
        {
          id: "firm02",
          firmName: "歡樂派股份有限公司",
          jobTitle: "會計專員",
          jobDate: "2016~2018",
          jobDescription: "主要為代理線上遊戲公司，也自製遊戲。",
          jobWork: [
            "解決同事會計系統、人事系統問題。",
            "為了讓老闆方便看報表，使用 google sheets 製作線上收支報表。",
            "處理外國同事及老闆的工作簽證。"
          ]
        },
        {
          id: "firm03",
          firmName: "長誌聯合會計師事務所",
          jobTitle: "助理查帳員",
          jobDate: "2014~2016",
          jobDescription: "提供記查帳、稅務申報、工商登記等會計服務。",
          jobWork: [
            "負責25家公司帳務。",
            "解決客戶稅務問題。",
            "處理客戶臨時的工商登記。"
          ]
        },
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">About</h3>
                <p className="subtitle-a">
                  <a href={pdf} target="_blank" rel="noopener noreferrer">
                    <span className="pdfDownload">
                      <FaRegHandPointRight className="FaRegHandPointRight" />
                      PDF 下載
                    </span>
                  </a>
                </p>
                <div className="line-mf"></div>
              </div>
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="title-box-3">
                        <h5 className="title-left mb-4">Summary</h5>
                      </div>
                      <div className="r">
                        <div className="summary-content col-10 mb-4">
                          之前從事會計工作擁有與各部門溝通經驗，但覺得無趣及乏味，發現前端技術能呈現自己無法勾勒出的畫面效果，因此在網頁技術中找到成就感，開始學習前端與後端技術，也幫自己解決生活上不方便的地方，期待能接觸更多技術與打造各種實用產品。
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="title-box-3">
                        <h6 className="title-left mb-4">Skill</h6>
                      </div>
                    </div>
                    <div className="row">
                      {
                        this.state.skills.map(skill => {
                          return (
                            <div className="col-md-4 col-sm-6 col-12 mb-4" key={skill.id}>
                              <i className={skill.icon}>
                                <p className="skill-name pl-2">{skill.name}</p>
                              </i>
                            </div>
                          )
                        })
                      }
                    </div>

                  </div>

                </div>
                {/* <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="title-box-3">
                        <h6 className="title-left mb-4 mt-4">Experience</h6>
                      </div>
                    </div>
                    {
                      this.state.experiences.map(experience => {
                        return (
                          <div className="row" key={experience.id}>
                            <div className="job-title col-md-4">
                              <h6 className="title-small col-12">
                                {experience.firmName}
                              </h6>
                              <div className="job col-12">
                                <p className="job-name mb-0">{experience.jobTitle}</p>
                                <p className="job-date">{experience.jobDate}年</p>
                              </div>
                            </div>
                            <div className="job-des col-md-8">
                              <p className="job-detail pl-3 pr-3">
                                {experience.jobDescription}
                              </p>
                              <ul>
                                {
                                  experience.jobWork.map((work, index) => {
                                    return (
                                      <li key={index}>
                                        {work}
                                      </li>
                                    )
                                  })
                                }
                              </ul>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div> */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="title-box-3">
                        <h6 className="title-left mb-4 mt-4">Education</h6>
                      </div>
                    </div>
                    <div className="row">
                      <p className="title-small col-12 pl-4">國立彰化師範大學</p>
                      <p className="job-date pl-4 pr-3">商業教育系</p>
                      <p className="job-date pl-4 pr-3">2009~2013年</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
