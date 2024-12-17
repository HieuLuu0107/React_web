import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";

class HomeHeader extends Component {
  render() {
    return (
      <div className="home-header-container">
        <div className="home-header-conten">
          <div className="toptopheader">
            <div className="topheader">
              <div className="top-left">Trọng Hiếu shose</div>
              <div className="top-mid"></div>
              <div className="top-right">
                <div className="home-login">
                  <p>Đăng nhập</p>
                </div>
                <div className="home-register">
                  <p>Đăng kí</p>
                </div>
              </div>
            </div>
            <div className="mid-header">
              <div className="left-mid-header">
                <div className="logo-1"></div>
              </div>
              <div className="mid-mid-header">
                <div className="search">
                  <i className="fas fa-search"></i>
                  <input type="text" placeholder="Tìm cái gì"></input>
                </div>
              </div>
              <div className="right-mid-header">
                <div className="conten1">
                  <div className="bag">
                    <i className="fas fa-shopping-bag"></i>
                  </div>
                  <div className="right-bag">
                    <div>giỏ hàng của bạn</div>
                    <div>chưa có sản phẩm</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-header">
              <div className="conten2">
                <ul>
                  <li className="li1">DANH MỤC SẢN PHẨM</li>
                  <li>TRANG CHỦ</li>
                  <li>TIN TỨC</li>
                  <li>BỘ SƯU TẠP GIÀY</li>
                  <li>ODER GIÀY</li>
                  <li>HẸ THỐNG CỬA HÀNG</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="body-container">
          <div className="body-conten">
            <div className="body-conten-left"></div>
            <div className="body-conten-right">
              <div className="body-item-container">
                <div className="item-conten">
                  <div className="item-img"></div>
                  <div className="item-buynow">Mua ngay</div>
                  <div className="item-name">Giày snike kake</div>
                  <div className="item-sell">2000$</div>
                </div>
                <div className="item-conten">
                  <div className="item-img"></div>
                  <div className="item-buynow">Mua ngay</div>
                  <div className="item-name">Giày snike kake</div>
                  <div className="item-sell">2000$</div>
                </div>
                <div className="item-conten">
                  <div className="item-img"></div>
                  <div className="item-buynow">Mua ngay</div>
                  <div className="item-name">Giày snike kake</div>
                  <div className="item-sell">2000$</div>
                </div>
                <div className="item-conten">
                  <div className="item-img"></div>
                  <div className="item-buynow">Mua ngay</div>
                  <div className="item-name">Giày snike kake</div>
                  <div className="item-sell">2000$</div>
                </div>
              </div>
              <div className="body-item-container">
                <div className="item-conten">
                  <div className="item-img"></div>
                  <div className="item-buynow">Mua ngay</div>
                  <div className="item-name">Giày snike kake</div>
                  <div className="item-sell">2000$</div>
                </div>
                <div className="item-conten">
                  <div className="item-img"></div>
                  <div className="item-buynow">Mua ngay</div>
                  <div className="item-name">Giày snike kake</div>
                  <div className="item-sell">2000$</div>
                </div>
                <div className="item-conten">
                  <div className="item-img"></div>
                  <div className="item-buynow">Mua ngay</div>
                  <div className="item-name">Giày snike kake</div>
                  <div className="item-sell">2000$</div>
                </div>
                <div className="item-conten">
                  <div className="item-img"></div>
                  <div className="item-buynow">Mua ngay</div>
                  <div className="item-name">Giày snike kake</div>
                  <div className="item-sell">2000$</div>
                </div>
              </div>
              <div className="body-item-container">
                <div className="item-conten">
                  <div className="item-img"></div>
                  <div className="item-buynow">Mua ngay</div>
                  <div className="item-name">Giày snike kake</div>
                  <div className="item-sell">2000$</div>
                </div>
                <div className="item-conten">
                  <div className="item-img"></div>
                  <div className="item-buynow">Mua ngay</div>
                  <div className="item-name">Giày snike kake</div>
                  <div className="item-sell">2000$</div>
                </div>
                <div className="item-conten">
                  <div className="item-img"></div>
                  <div className="item-buynow">Mua ngay</div>
                  <div className="item-name">Giày snike kake</div>
                  <div className="item-sell">2000$</div>
                </div>
                <div className="item-conten">
                  <div className="item-img"></div>
                  <div className="item-buynow">Mua ngay</div>
                  <div className="item-name">Giày snike kake</div>
                  <div className="item-sell">2000$</div>
                </div>
              </div>
              <div className="body-item-container">
                <div className="item-conten">
                  <div className="item-img"></div>
                  <div className="item-buynow">Mua ngay</div>
                  <div className="item-name">Giày snike kake</div>
                  <div className="item-sell">2000$</div>
                </div>
                <div className="item-conten">
                  <div className="item-img"></div>
                  <div className="item-buynow">Mua ngay</div>
                  <div className="item-name">Giày snike kake</div>
                  <div className="item-sell">2000$</div>
                </div>
                <div className="item-conten">
                  <div className="item-img"></div>
                  <div className="item-buynow">Mua ngay</div>
                  <div className="item-name">Giày snike kake</div>
                  <div className="item-sell">2000$</div>
                </div>
                <div className="item-conten">
                  <div className="item-img"></div>
                  <div className="item-buynow">Mua ngay</div>
                  <div className="item-name">Giày snike kake</div>
                  <div className="item-sell">2000$</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-container">
          <div className="footer-conten">
            <div className="footer-left">
              <ul>
                <th>Thông tin liên hệ</th>
                <li>Hostline: 0961345024</li>
                <li>Email: hieuluucucxuc@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.admin.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
