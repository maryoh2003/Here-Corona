import React from "react";
import { Component } from "react";
/* eslint-disable */
import "bootstrap/dist/css/bootstrap.min.css";
// import "./sample.scss";
import $ from "jquery";
import "./styleSample.scss";
import { Icon } from "@class101/ui";
import Circle from "../Chart/Circle";

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teset: ""
    };
  }
  componentDidMount() {
    $(document).ready(function() {
      $("#sidebarCollapse").on("click", function() {
        $("#sidebar").toggleClass("active");
        $(this).toggleClass("active");
      });
    });
  }
  render() {
    return (
      <>
        <div className="allType">
          <div class="wrapper">
            <nav id="sidebar">
              <div class="sidebar-header">
                <h3>메로나, 여기</h3>
              </div>

              <ul class="list-unstyled components">
                <p>Corona?</p>
                <li class="active">
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
                <li>
                  <a href="#">전세계 현황</a>
                  <a data-toggle="collapse" aria-expanded="false">
                    국내 사망자 현황
                  </a>
                </li>
                <li>
                  <a href="#">격리 해제 현황</a>
                </li>
                <li>
                  <a href="#">지역 공유 게시판</a>
                </li>
                <li>
                  <a href="#">의심 증상</a>
                </li>
                <li>
                  <a href="#">자영업자 장터</a>
                </li>
                <li>
                  <a href="#">문의 질문</a>
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
                      <a class="nav-link" href="#">
                        Page
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Page
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Page
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Page
                      </a>
                    </li>
                  </ul> */}
                  </div>
                </div>
              </nav>
              여기 지도
              <Circle />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Social;