import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small bg-transparent">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 py-3">
                            <div className="mb-2 flex-center">
                                <a className="fb-ic" href="https://www.facebook.com/joshlee1996/">
                                    <i className="fab fa-facebook-f fa-lg white-text m-4 fa-2x"> </i>
                                </a>
                                <a className="tw-ic" href="https://twitter.com/josias_lee">
                                    <i className="fab fa-twitter fa-lg white-text m-4 fa-2x"> </i>
                                </a>
                                <a className="li-ic" href="https://www.linkedin.com/in/joshua-lee-a47b94157/">
                                    <i className="fab fa-linkedin-in fa-lg white-text m-4 fa-2x"> </i>
                                </a>
                                <a className="ins-ic" href="https://www.instagram.com/im_joshlee/">
                                    <i className="fab fa-instagram fa-lg white-text m-4 fa-2x"> </i>
                                </a>
                                <a className="github-ic" href="https://github.com/jlks96">
                                    <i className="fab fa-github fa-lg white-text m-4 fa-2x"> </i>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3 bg-transparent">© 2020 Copyright: Joshua Lee</div>
            </footer>
        );
    }

}


export default Footer;
