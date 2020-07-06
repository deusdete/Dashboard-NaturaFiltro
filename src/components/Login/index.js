import React from 'react'

export default function LogiCpm() {
  return (
    <section class="iq-login-regi">
      <div class="container">
          <div class="row align-items-center d-flex justify-content-center">
          {/* <div class="col-lg-6 col-md-12 col-sm-12">
            <h2>Login</h2>
            <p class="mt-3 mb-4 pr-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <h5>You can Login With <i class="fa fa-hand-o-down" aria-hidden="true"></i></h5>
            <ul class="iq-media mt-3">
              <li><a href="#" class="fb"><i class="fab fa-facebook"></i></a></li>
              <li><a href="#" class="tw"><i class="fab fa-twitter"></i></a></li>
              <li><a href="#" class="gplus"><i class="fab fa-google"></i></a></li>
              <li><a href="#" class="lkd"><i class="fab fa-linkedin"></i></a></li>
            </ul>
          </div> */}
            <div class="col-lg-6 col-md-12 col-sm-12 r-mt3">
              <div class="iq-login iq-rmt-20">
                <form>
                  <div class="form-group">
                    <input type="email" class="form-control email-bg" id="exampleInputEmail1" placeholder="Email"></input>
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control email-bg" id="exampleInputPassword1" placeholder="Senha"></input>
                  </div>
                  <button type="submit" class="button">Login</button>
                </form>
                <div class="row">
                  <div class="col-sm-6">
                    <a href="#" >Esqueceu a senha?</a>
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <div class="text-right">
                      <div >Não tem uma conta?</div>
                      <div > <a href="#">Registre-se agora</a></div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
