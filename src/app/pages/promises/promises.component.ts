import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent implements OnInit {

  ngOnInit(): void {
    
    // const promise = new Promise(( resolve, reject ) => {
    //   if( false ) {
    //     resolve('Hola mundo');
    //   } else {
    //     reject('Algo salió mal');
    //   }
    // });

    // promise.then((message) => {
    //   console.log(message);
    // })
    // .catch((err) => console.log(`Error en Promise ${err}`))
    // console.log('Fin init');

    this.getUsuarios().then((usuario) => {
      console.log(usuario);
    })
  }

  getUsuarios() {
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
        .then((response) => response.json())
        .then((body) => resolve(body.data))
    });
  }

}
