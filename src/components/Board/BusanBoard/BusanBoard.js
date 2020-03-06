import React, { Component } from 'react';
import './BusanBoard.scss';
import { FaBars, FaPen, FaPhabricator, FaRegCommentAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "components/WorldInfoAsia/sample.scss";
import "components/WorldInfoAsia/styleSample.scss";
import $ from "jquery";

class BusanBoard extends Component {
    componentDidMount() {
        $(document).ready(function() {
          $("#sidebarCollapse").on("click", function() {
            $("#sidebar").toggleClass("active");
            $(this).toggleClass("active");
          });
        });
    }
    render() {
        const { busanList } = this.props;
        const busanItem = busanList.map(data => {
            let { idx, title, region, view, created_at } = data;
            return (
                <div className ="BoardPage-List" key ={idx}>
                    <span className ="BoardPage-List-Location">지역: {region}</span>
                    <Link to ="/BoardPage" onClick ={() => {
                        sessionStorage.setItem('index', idx);
                    }} className ="BoardPage-List-Item">제목: {title}</Link>
    
                    <div>
                        <span className ="BoardPage-List-Time">{created_at}</span>
                        <div className ="BoardPage-Info">
                            <span className ="BoardPage-List-View"><FaPhabricator />{view}</span>
                            <FaRegCommentAlt />
                        </div>
                    </div>
    
                    <hr className ="BoardPage-Line" />
                </div>
            )
        })
    return (
        <>
        <div className ="BusanBoard">
            <div className="BusanBoard-Top">
                <FaBars className ="showNavbar" />
                <input type ="text" className ="boardSearch" placeholder ="검색어를 입력하세요." />
            </div>

            <div className="BusanBoard-TitleZone">
                <span className="BusanBoard-Title">부산 정보 공유 게시판</span>
                <button className="sortBtn">인기순</button>
            </div>

            <div className="BusanBoard-NoticeZone">
                <span className="BusanBoard-Notice">공지</span>
                <span className="BusanBoard-NoticeContents">익명 게시판입니다. 비방, 욕설 등은 삼가해주세요.</span>
            </div>

            <div className="BusanBoard-List">
                {busanItem}
            </div>

            <button className ="writeBoard" onClick ={() => window.location ="/BoardInsert"}>
                <FaPen />
            </button>
        </div>

        <div className="allType1">
          <div class="wrapper">
            <nav id="sidebar">
              <div class="sidebar-header">
                <h3>메로나, 여기</h3>
              </div>

              <ul class="list-unstyled components">
                <p>Corona?</p>
                <li>
                  <a
                    data-toggle="collapse"
                    aria-expanded="false"
                    onClick={() => {
                      this.props.history.push("/");
                    }}
                  >
                    국내현황
                  </a>
                </li>
                <li class="active">
                  <a
                    onClick={() => {
                      this.props.history.push("/worldWide");
                    }}
                  >
                    전세계 현황
                  </a>
                </li>
                <li>
                  <a data-toggle="collapse" aria-expanded="false">
                    국내 사망자 현황
                  </a>
                </li>
                <li>
                  <a>격리 해제 현황</a>
                </li>
                <li>
                  <a>지역 공유 게시판</a>
                </li>
                <li
                  onClick={() => {
                    this.props.history.push("/symptom");
                  }}
                >
                  <a>의심 증상</a>
                </li>
                <li>
                  <a>자영업자 장터</a>
                </li>
                <li>
                  <a>문의 질문</a>
                </li>
              </ul>
              <ul class="list-unstyled CTAs">
                <li>
                  <a>지역 콜센터 120</a>
                </li>
                <li>
                  <a>콜센터 1339</a>
                </li>
              </ul>
            </nav>

            <div id="content">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                  <button type="button" id="sidebarCollapse" class="navbar-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                  <button
                    class="btn btn-dark d-inline-block d-lg-none ml-auto"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i class="fas fa-align-justify"></i>
                  </button>

                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    {/* <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item active">
                      <a class="nav-link">
                        Page
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link">
                        Page
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link">
                        Page
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link">
                        Page
                      </a>
                    </li>
                  </ul> */}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        </>
    );
    }
}

export default BusanBoard;