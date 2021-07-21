export const Testimonials = (props) => {
    return (
      <div id='testimonials'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2>O que dizem nossos clientes mirins</h2>
          </div>
          <div className='row'>
                  <div className='col-md-4'>
                    <div className='testimonial'>
                      <div className='testimonial-image'>
                        <img src="img/testimonials/01.jpg" alt='' />
                      </div>
                      <div className='testimonial-content'>
                        <p>Aprendi que para comprar o que quero, preciso guardar pelo menos um pouquinho de dinheiro toda vez que ganho minha mesada.</p>
                        <div className='testimonial-meta'>Ana Bia</div>
                      </div>
                    </div>
                  </div>
                
                  <div className='col-md-4'>
                    <div className='testimonial'>
                      <div className='testimonial-image'>
                        <img src="img/testimonials/02.jpg" alt='' />
                      </div>
                      <div className='testimonial-content'>
                        <p>Toda vez que ganho dinheiro de presente, já abro o site do Meu Tesourinho pra anotar lá. Isso me ajuda a lembrar quanto falta pra chegar até o Meu tesourinho de verdade.</p>
                        <div className='testimonial-meta'>Arthur</div>
                      </div>
                    </div>
                  </div>
  
                  <div className='col-md-4'>
                    <div className='testimonial'>
                      <div className='testimonial-image'>
                        <img src="img/testimonials/03.jpg" alt='' />
                      </div>
                      <div className='testimonial-content'>
                        <p>Antes eu sempre queria comprar doces no recreio. Agora eu preciso pensar antes de comprar pra ter certeza se isso não vai atrapalhar a chegar nas coisas que quero. Daí peço ajuda da minha mãe pra olhar quanto falta no Meu Tesourinho.</p>
                        <div className='testimonial-meta'>Caroline</div>
                      </div>
                    </div>
                  </div>
          </div>
        </div>
      </div>
    )
  }