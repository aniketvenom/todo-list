import React from 'react'

export default function Header(props) {
  return (
    <div>
      <nav class="navbar bg-secondary navbar-expand-lg bg-body-tertiary mx-5">
  <div class="container-lg">
    
    <a class="navbar-brand ms-5 " href="#">{props.title}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" routerLink="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" routerLink="/customer">About</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
