import React from "react"

const MyFooter = () => <footer className="page-footer font-small blue pt-3 bg-dark text-light">
    {/* <div className="container-fluid text-center">
        <div className="row">
            <div className="col-12">
                <h5 className="text-uppercase">Footer Content</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>
        </div>
    </div> */}

    <div className="footer-copyright pb-3 d-flex align-items-center justify-content-center gap-1"><p className="m-0">© 2024 Copyright:</p>
        <a href="link">Epibook.com</a>
    </div>

</footer>

export default MyFooter