

import './grid.css'
import './App.css';
import './fontawesome-free-6.1.0-web/css/all.min.css';
import img from './assets/img/avatar-trang.webp';
import img1 from './assets/img/avatar.jpg';
import img2 from './assets/img/avatar1.jpg';
import img3 from './assets/img/avatar2.jpg';



function App() {
  return (
    <div class="grid" >
        <div class="navbar header row ">
            <div class="col l-8 m-10 c-12">
                <div class="row">
                    <div class="navbar__element navbar__instar--img col l-4 m-4 c-4">
                        <a href="#">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
                                alt="Instagram_logo"/>
                        </a>
                    </div>
                    <div class="navbar__element navbar_search col l-4 m-4 c-0">
                        <div class="navbar_search--box">
                            <i class="navbar_search--icon fa-solid fa-magnifying-glass"></i>
                            <input type="search" placeholder="Tìm kiếm" class="navbar_search--input"/>
                        </div>
                    </div>
                    <div class="navbar__element navbar__icons col l-4 m-4 c-8">
                        <div class="row">
                            <i class="navbar__icon col l-2 m-2 c-2  fa-solid fa-house"></i>
                            <i class="navbar__icon col l-2 m-2 c-2 fa-brands fa-facebook-messenger"></i>
                            <i class="navbar__icon col l-2 m-2 c-2 fa-regular fa-square-plus"></i>
                            <i class="navbar__icon col l-2 m-2 c-2 fa-regular fa-compass"></i>
                            <i class="navbar__icon col l-2 m-2 c-2 fa-regular fa-heart"></i>
                            <div class="navbar__icon col l-2 m-2 c-2 navbar__icon--avatar">
                                <img src={img} alt="avatar"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="body row ">
            <div class="col l-8 m-12 c-12 ">
                <div class="row">
                    <div class="body__content col l-6 m-8 c-11">
                        <div class="body__content--head bgd-content">
                            <div class="row body__newPost">
                                <div class="body__newPost--infor ">
                                    <div class="body__newPost--avatar avatar__share">
                                        <img src={img1} alt="avatar"/>
                                    </div>
                                    <div class="body__newPost--name name">
                                        Nhật Hạ
                                    </div>
                                </div>
                                <div class="body__newPost--infor ">
                                    <div class="body__newPost--avatar avatar__share">
                                        <img src={img3} alt="avatar"/>
                                    </div>
                                    <div class="body__newPost--name name">
                                        Lê Hoàng An Bình
                                    </div>
                                </div>
                                <div class="body__newPost--infor ">
                                    <div class="body__newPost--avatar avatar__share">
                                        <img src={img1} alt="avatar"/>
                                    </div>
                                    <div class="body__newPost--name name">
                                        Nhật Hạ
                                    </div>
                                </div>
                                <div class="body__newPost--infor ">
                                    <div class="body__newPost--avatar avatar__share">
                                        <img src={img3} alt="avatar"/>
                                    </div>
                                    <div class="body__newPost--name name">
                                        Lê Hoàng An Bình
                                    </div>
                                </div>
                                <div class="body__newPost--infor ">
                                    <div class="body__newPost--avatar avatar__share">
                                        <img src={img1} alt="avatar"/>
                                    </div>
                                    <div class="body__newPost--name name">
                                        Nhật Hạ
                                    </div>
                                </div>
                                <div class="body__newPost--infor ">
                                    <div class="body__newPost--avatar avatar__share">
                                        <img src={img3} alt="avatar"/>
                                    </div>
                                    <div class="body__newPost--name name">
                                        Lê Hoàng An Bình
                                    </div>
                                </div>
                                <div class="body__newPost--infor ">
                                    <div class="body__newPost--avatar avatar__share">
                                        <img src={img1} alt="avatar"/>
                                    </div>
                                    <div class="body__newPost--name name">
                                        Nhật Hạ
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="body__newContent bgd-content">
                            <div class="body__newContent--head">
                                <div class="body__newContent--head-info">
                                    <div class="body__newContent__head--avatar avatar__share">
                                        <img src={img1} alt=""/>
                                    </div>
                                    <div class="body__newContent__head--name name">
                                        Nhật Hạ
                                    </div>
                                </div>
                                <div class="body__newContent__head--menu">
                                    <i class="fa-solid fa-ellipsis"></i>
                                </div>
                            </div>
                            <div class="body__newContent--img">
                                <img src={img1} alt=""/>
                                <i class="fa-solid fa-angle-right body__newContent--icon"></i>
                            </div>
                            <div class="body__newContent--icons">
                                <div class="body__newContent--iconFirst">
                                    <i class="hover fa-regular fa-heart"></i>
                                    <i class="hover fa-regular fa-comment"></i>
                                    <i class="hover fa-regular fa-paper-plane"></i>
                                </div>
                                <div class="body__newContent--iconSecond">
                                    <i class=" fa-solid fa-circle blue"></i>
                                    <i class=" fa-solid fa-circle"></i>
                                    <i class=" fa-solid fa-circle"></i>

                                </div>
                                <div class="body__newContent--iconThird">
                                    <i class="hover fa-regular fa-bookmark"></i>
                                </div>
                            </div>
                            <div class="body__newContent--like">
                                <img src={img1} alt=""/>
                                <div class="body__newContent--like-text">
                                    <div class="body__newContent__like-name first-text">Nhật Hạ</div>
                                    <div class="body__newContent__like-and second-text"> và</div>
                                    <div class="body__newContent__like-num first-text">2,970,623 người khác</div>
                                    <div class="body__newContent__liked second-text">đã thích</div>
                                </div>
                            </div>
                            <div class="body__newContent--content">
                                <div class="body__newContent__content-name first-text">Nhật Hạ</div>
                                <div class="body__newContent__content-twitch second-text">Home work HTML && CSS Boot Camp Techainer</div>
                            </div>
                            <div class="body__newContent--comment">
                                <div class="body__newContent-comment-head third-text">
                                    Xem tất cả 8,305 bình luận
                                </div>
                                <div class="body__newContent-comment-body">
                                    <div class="body__newContent-comment-body-texts">
                                        <div class="body__newContent-comment-body-name first-text">Hoàng Hải</div>
                                        <div class="body__newContent-comment-body-text second-text">Lập trình Front-end với ReactJS</div>
                                    </div>
                                    <i class="hover fa-regular fa-heart"></i>
                                </div>
                                <div class="body__newContent-comment-body">
                                    <div class="body__newContent-comment-body-texts">
                                        <div class="body__newContent-comment-body-name first-text">Hoàng Hải</div>
                                        <div class="body__newContent-comment-body-text second-text">Lập trình Front-end với ReactJS</div>
                                    </div>
                                    <i class="hover fa-regular fa-heart"></i>
                                </div>
                                <div class="body__newContent-comment-time third-text">
                                    2 NGÀY TRƯỚC
                                </div>
                            </div>
                            <div class="body__newContent--comment-add">
                                <div class="body__newContent--comment-add-first">
                                    <i class="hover fa-regular fa-face-smile"></i>
                                    <div class="body__newContent--comment-add-first-text third-text"> Thêm bình luận...</div>
                                </div>
                                <div class="body__newContent--comment-add-last">Đăng</div>
                            </div>
                        </div>
                        <div class="body__newContent bgd-content">
                            <div class="body__newContent--head">
                                <div class="body__newContent--head-info">
                                    <div class="body__newContent__head--avatar avatar__share">
                                        <img src={img1} alt=""/>
                                    </div>
                                    <div class="body__newContent__head--name name">
                                        Nhật Hạ
                                    </div>
                                </div>
                                <div class="body__newContent__head--menu">
                                    <i class="fa-solid fa-ellipsis"></i>
                                </div>
                            </div>
                            <div class="body__newContent--img">
                                <img src={img1} alt=""/>
                                <i class="fa-solid fa-angle-right body__newContent--icon"></i>
                            </div>
                            <div class="body__newContent--icons">
                                <div class="body__newContent--iconFirst">
                                    <i class="hover fa-regular fa-heart"></i>
                                    <i class="hover fa-regular fa-comment"></i>
                                    <i class="hover fa-regular fa-paper-plane"></i>
                                </div>
                                <div class="body__newContent--iconSecond">
                                    <i class=" fa-solid fa-circle blue"></i>
                                    <i class=" fa-solid fa-circle"></i>
                                    <i class=" fa-solid fa-circle"></i>

                                </div>
                                <div class="body__newContent--iconThird">
                                    <i class="hover fa-regular fa-bookmark"></i>
                                </div>
                            </div>
                            <div class="body__newContent--like">
                                <img src={img1} alt=""/>
                                <div class="body__newContent--like-text">
                                    <div class="body__newContent__like-name first-text">Nhật Hạ</div>
                                    <div class="body__newContent__like-and second-text"> và</div>
                                    <div class="body__newContent__like-num first-text">2,970,623 người khác</div>
                                    <div class="body__newContent__liked second-text">đã thích</div>
                                </div>
                            </div>
                            <div class="body__newContent--content">
                                <div class="body__newContent__content-name first-text">Lê Hoàng An Bình</div>
                                <div class="body__newContent__content-twitch second-text">Home work HTML && CSS Boot Camp Techainer</div>
                            </div>
                            <div class="body__newContent--comment">
                                <div class="body__newContent-comment-head third-text">
                                    Xem tất cả 8,305 bình luận
                                </div>
                                <div class="body__newContent-comment-body">
                                    <div class="body__newContent-comment-body-texts">
                                        <div class="body__newContent-comment-body-name first-text">Hoàng Hải</div>
                                        <div class="body__newContent-comment-body-text second-text">Lập trình Front-end với ReactJS</div>
                                    </div>
                                    <i class="hover fa-regular fa-heart"></i>
                                </div>
                                <div class="body__newContent-comment-body">
                                    <div class="body__newContent-comment-body-texts">
                                        <div class="body__newContent-comment-body-name first-text">Hoàng Hải</div>
                                        <div class="body__newContent-comment-body-text second-text">Lập trình Front-end với ReactJS</div>
                                    </div>
                                    <i class="hover fa-regular fa-heart"></i>
                                </div>
                                <div class="body__newContent-comment-time third-text">
                                    2 NGÀY TRƯỚC
                                </div>
                            </div>
                            <div class="body__newContent--comment-add">
                                <div class="body__newContent--comment-add-first">
                                    <i class="hover fa-regular fa-face-smile"></i>
                                    <div class="body__newContent--comment-add-first-text third-text"> Thêm bình luận...</div>
                                </div>
                                <div class="body__newContent--comment-add-last">Đăng</div>
                            </div>
                        </div>
                    </div>
                    <div class="body__infor col l-4 m-0 c-0">
                        <div class="body__infor--head">
                            <div class="body__infor--head-infor">
                                <img src={img} alt=""/>
                                <div class="body__infor--head-name">
                                    <div class="body__infor--head-pryname first-text">BootCamp2022</div>
                                    <div class="body__infor--head-secondname third-text">BootCamp Techainer</div>
                                </div>
                            </div>
                            <div class="body__infor--head-transfer first-text blue">Chuyển</div>
                        </div>
                        <div class="body__infor--container">
                            <div class="body__infor--container-head">
                                <div class="body__infor--container-exm first-text">Gợi ý cho bạn</div>
                                <div class="body__infor--container-seeAll second-text">Xem tất cả</div>
                            </div>
                            <div class="body__infor--container-body">
                                <div class="body__infor--container-offer">
                                    <img src={img3} alt=""/>
                                    <div class="body__infor--container-name">
                                        <div class="body__infor--container-pryname first-text">React Native</div>
                                        <div class="body__infor--container-sencondname third-text">Phổ biến</div>
                                    </div>
                                </div>
                                <div class="body__infor--container-follow first-text blue">Theo dõi</div>
                            </div>
                            <div class="body__infor--container-body">
                                <div class="body__infor--container-offer">
                                    <img src={img3} alt=""/>
                                    <div class="body__infor--container-name">
                                        <div class="body__infor--container-pryname first-text">React Native</div>
                                        <div class="body__infor--container-sencondname third-text">Phổ biến</div>
                                    </div>
                                </div>
                                <div class="body__infor--container-follow first-text blue">Theo dõi</div>
                            </div>
                            <div class="body__infor--container-body">
                                <div class="body__infor--container-offer">
                                    <img src={img3} alt=""/>
                                    <div class="body__infor--container-name">
                                        <div class="body__infor--container-pryname first-text">React Native</div>
                                        <div class="body__infor--container-sencondname third-text">Phổ biến</div>
                                    </div>
                                </div>
                                <div class="body__infor--container-follow first-text blue">Theo dõi</div>
                            </div>
                            <div class="body__infor--container-body">
                                <div class="body__infor--container-offer">
                                    <img src={img3} alt=""/>
                                    <div class="body__infor--container-name">
                                        <div class="body__infor--container-pryname first-text">React Native</div>
                                        <div class="body__infor--container-sencondname third-text">Phổ biến</div>
                                    </div>
                                </div>
                                <div class="body__infor--container-follow first-text blue">Theo dõi</div>
                            </div>
                            <div class="body__infor--container-body">
                                <div class="body__infor--container-offer">
                                    <img src={img3} alt=""/>
                                    <div class="body__infor--container-name">
                                        <div class="body__infor--container-pryname first-text">React Native</div>
                                        <div class="body__infor--container-sencondname third-text">Phổ biến</div>
                                    </div>
                                </div>
                                <div class="body__infor--container-follow first-text blue">Theo dõi</div>
                            </div>
                        </div>
                        <div class="body__infor--footer">
                            <div class="body__infor--footer-contact third-text">
                                <a href="#">Giới thiệu</a>
                                <a href="#">Trợ giúp</a>
                                <a href="#">Báo chí</a>
                                <a href="#">API</a>
                                <a href="#">Việc Làm</a>
                                <a href="#">Quyền Riêng tư</a>
                                <a href="#">Điều khoản</a>
                                <a href="#">Vị trí</a>
                                <a href="#">Ngôn ngữ</a>
                            </div>
                            <div class="body__infor--footer-license third-text">
                                © 2022 INSTAGRAM FROM META
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer row">
        </div>
    </div>
  );
}

export default App;
