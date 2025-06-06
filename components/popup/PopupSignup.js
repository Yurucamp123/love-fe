export default function PopupSignup() {
    return (
        <div className="popup-signup">
            <div className="popup-container">
                <div className="popup-content"> <a className="close-popup-signup" />
                    <div className="d-flex gap-2 align-items-center"><a href="#"><img src="/assets/lib/user/imgs/template/popup/logo.svg" alt="Travila" /></a>
                        <h4 className="neutral-1000">Register</h4>
                    </div>
                    <div className="box-button-logins"> <a className="btn btn-login btn-google mr-10" href="#"><img src="/assets/lib/user/imgs/template/popup/google.svg" alt="Travila" /><span className="text-sm-bold">Sign up with Google</span></a><a className="btn btn-login mr-10" href="#"><img src="/assets/lib/user/imgs/template/popup/facebook.svg" alt="Travila" /></a><a className="btn btn-login" href="#"><img src="/assets/lib/user/imgs/template/popup/apple.svg" alt="Travila" /></a></div>
                    <div className="form-login">
                        <form action="#">
                            <div className="form-group">
                                <label className="text-sm-medium">Username *</label>
                                <input className="form-control username" type="text" placeholder="Email / Username" />
                            </div>
                            <div className="form-group">
                                <label className="text-sm-medium">Your email *</label>
                                <input className="form-control email" type="text" placeholder="Email / Username" />
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="text-sm-medium">Password *</label>
                                        <input className="form-control password" type="password" placeholder="***********" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="text-sm-medium">Confirm Password *</label>
                                        <input className="form-control password" type="password" placeholder="***********" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="box-remember-forgot">
                                    <div className="remeber-me">
                                        <label className="text-xs-medium neutral-500">
                                            <input className="cb-remember" type="checkbox" />I agree to term and conditions
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-45 mb-30"> <a className="btn btn-black-lg" href="#">Create New Account
                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 15L15 8L8 1M15 8L1 8" stroke strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></a></div>
                            <p className="text-sm-medium neutral-500">Already have an account  <a className="neutral-1000 btn-signin" href="#">Login Here !</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
