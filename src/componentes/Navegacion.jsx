import React from 'react'
import { Link } from 'react-router-dom'

export const Navegacion = () => {
  const dark={backgroundColor: 'tomato'}
  return (
    <>
      <nav class="navbar navbar-expand-lg navbarcolor">
        <div class="container-fluid my-2">
          <Link class="navbar-brand" to="/avichurch/">AVI CHURCH 🏠</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/avichurch/nosotros">Nosotros</Link>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="/avichurch/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ACERCA DE AVI ⛪
                </Link>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><Link class="dropdown-item" to="/avichurch/">🏠 NOSOTROS</Link></li>
                  <li><Link class="dropdown-item" to="/avichurch/">👨🏻 NUESTROS PASTORES</Link></li>
                  <li><Link class="dropdown-item" to="/avichurch/">🎁 MISION VISION</Link></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><Link class="dropdown-item" to="/avichurch/">Something else here</Link></li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link disabled">Disabled</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
