import React from 'react'

const HomePage = () => {
  return (
    <>
        <div>
  <main className="contenedor_main">
    <div className="subcontenedor_main">
      <div className="subcontenedor_main_pic">
        <img src="/assets/images/pic_profile.png" alt="foto de perfil" />
      </div>
      <div className="subcontenedor_main_info">
        <h1>Armando Duran👨🏻‍💻</h1>
        <h3>Web Developer Full Stack</h3>
        <p>Soy Hugo Armando Duran Mejia, un Desarrollador Web Full Stack con experiencia en tecnologías como React,Express, JavaScript, Node.js y MongoDB. Me especializo en la creación de soluciones web, trabajando principalmente como freelance. Mi enfoque integral en el desarrollo me permite entregar proyectos de alta calidad que cumplen con los objetivos del cliente y proporcionan una excelente experiencia de usuario.</p>
        <ul>
          <li><img src="/assets/images/React-icon.svg.png" alt="React" /></li>
          <li><img src="/assets/images/mongo.png" alt="MongoDB" /></li>
          <li><img src="/assets/images/JavaScript-Symbol.png" alt="JavaScript" /></li>
          <li><img src="/assets/images/1_TY9uBBO9leUbRtlXmQBiug.png" alt="NodeJS" /></li>
          <li><img src="/assets/images/express-js-01-1-q05uw85vt1jqloiy.png" alt="ExpresJS" /></li>
        </ul>
      </div>
    </div>
  </main>
  <section>
    <div className="contenedor_social">
      <ul>
        <a href="https://www.facebook.com/ardudev/"><i className="bi bi-facebook" /></a>
        <a href="https://x.com/ardudev_"><i className="bi bi-twitter-x" /></a>
        <a href="https://www.linkedin.com/in/ardudev/"><i className="bi bi-linkedin" /></a>
        <a href="https://github.com/ardu-dev"><i className="bi bi-github" /></a>
        <a href="https://www.tiktok.com/@ardudev"><i className="bi bi-tiktok" /></a>
        <a href="https://www.instagram.com/ardudev_/"><i className="bi bi-instagram" /></a>
      </ul>
    </div>
  </section>
  <section className="container lista_proyectos">
    <h2>Proyectos</h2>
    <div className="contenedor_frames">
      <div className="card esquema_frame">
        <img src="/assets/images/landing sushi.png" alt="landing de sushi" />
        <div className="card-body">
          <p className="card-text">Landig de venta estática para negocio de sushi. Diseño simple y atractivo, con elementos clave para una experiencia de usuario fluida y agradable.</p>
          <ul>
            <a href="https://landingdeventahd.netlify.app/"><i className="bi bi-globe2" /></a>
            <a href="https://github.com/ardu-dev/Landing-de-Venta"><i className="bi bi-github" /></a>
          </ul>
        </div>
      </div>
      <div className="card esquema_frame">
        <img src="/assets/images/crud ideas.png" alt />
        <div className="card-body">
          <p className="card-text">Aplicación básica para gestionar ideas y recordatorios mediante operaciones CRUD. Así nunca se te pasara.</p>
          <ul>
            <a href="https://crud-almacenamiento-de-ideas.netlify.app/"><i className="bi bi-globe2" /></a>
            <a href="https://github.com/ardu-dev/CRUD_almacenamiento-de-ideas"><i className="bi bi-github" /></a>
          </ul>
        </div>
      </div>
      <div className="card esquema_frame">
        <img src="/assets/images/dashboard crypto.png" alt />
        <div className="card-body">
          <p className="card-text">Visualiza información en tiempo real sobre el mercado de criptomonedas con gráficos de pastel y barras.</p>
          <ul>
            <a href="https://tablero-crypto-datos.netlify.app/"><i className="bi bi-globe2" /></a>
            <a href="https://github.com/ardu-dev/Tablero_de_crypto_datos"><i className="bi bi-github" /></a>
          </ul>
        </div>
      </div>
      <div className="card esquema_frame">
        <img src="/assets/images/restaurant appweb.png" alt />
        <div className="card-body esquema_frame_info">
          <p className="card-text">RestauranteApp: Aplicación web completa para restaurantes con reserva de mesas, menú y más. Desarrollada con React, Bootstrap y Firebase.</p>
          <ul>
            <a href="https://appweb-basic-restaurant.netlify.app/"><i className="bi bi-globe2" /></a>
            <a href="https://github.com/ardu-dev/Restaurant-app"><i className="bi bi-github" /></a>
          </ul>
        </div>
      </div>
      <div className="card esquema_frame">
        <img src="/assets/images/ecommerce con paypal.png" alt />
        <div className="card-body esquema_frame_info">
          <p className="card-text">Proyecto E-commerce Basic: tienda en línea con React.js y Node.js. Explora, agrega al carrito y paga con seguridad vía PayPal.</p>
          <ul>
            <a href="https://ecommerce-basic-ad.netlify.app/"><i className="bi bi-globe2" /></a>
            <a href="https://github.com/ardu-dev/ecommerce_basic"><i className="bi bi-github" /></a>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section className="seccion_contacto">
    <form className="container">
      <h1>Contáctame😁📱</h1>
      <div className="row">
        <div className="col">
          <input type="text" className="form-control" placeholder="First name" aria-label="Nombre" />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Last name" aria-label="Apellido" />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label" />
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo electrónico" />
        <div id="emailHelp" className="form-text">Nunca compartiremos tu mail con nadie más</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPhone" className="form-label" />
        <input type="phone" className="form-control" id="exampleInputPhone" aria-describedby="phonelHelp" placeholder="Teléfono" />
        <div id="phonelHelp" className="form-text">Nunca compartiremos tu telefono con nadie más</div>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Aceptas que te enviemos boletines y publicidad</label>
      </div>
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
    <div className="imagen_contacto">
      <img src="/assets/images/software-developer-6521720_1920.jpg" alt />
    </div>
  </section>
</div>

    </>

    
  )
}

export default HomePage