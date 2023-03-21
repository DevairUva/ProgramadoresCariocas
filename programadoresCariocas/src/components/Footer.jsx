import '../styles/footer.css'

function Footer() {
  return (
    <div className='containerDiv' id='container-imagem'>
      <div class="container fundoFooter py-4">
        <footer class="py-5 footerW">
          <div class="row">
            <div class="col-6 col-md-2 mb-3">
              <h5>Programa</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 textColor textColor">História</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 textColor">Organização</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 textColor">OUTRO</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 textColor">OUTRO</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 textColor">OUTRO</a></li>
              </ul>
            </div>

            <div class="col-6 col-md-2 mb-3">
              <h5>Parceiros</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 textColor">Resília</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 textColor">Senac</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 textColor">Senai</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 textColor">OUTRO</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 textColor">OUTRO</a></li>
              </ul>
            </div>

            <div class="col-6 col-md-2 mb-3">
              <h5>Redes</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 textColor">Instagram</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 textColor">Twitter</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 textColor">Facebook</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 textColor">OUTRO</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 textColor">OUTRO</a></li>
              </ul>
            </div>

            <div class="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Quer saber mais?</h5>
                <p>Deixe seu endereço de email para receber mais informações:</p>
                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">Email address</label>
                  <input type="email" id="newsletter1" />
                  <button class="btn btn-primary" type="button">Enviar</button>
                </div>
              </form>
            </div>
          </div>

          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>&copy; Squad 3 | Programadores Cariocas - Irajá | 2023</p>
            <ul class="list-unstyled d-flex">
              <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter" /></svg></a></li>
              <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram" /></svg></a></li>
              <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook" /></svg></a></li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Footer;