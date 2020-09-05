import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.promise();
    this.getUsuarios().then(users =>
      console.log(users)
    );
  }

  promise() {
    const promesa = new Promise((resolve, reject) => {
      if(false) {
        resolve('Hola mundo');
      } else {
        reject('Hubo un error');
      }
    });

    promesa.then((data) => {
      console.log(data);
    }).catch(err => {
      console.info("Promise error ", err);
    })

    console.log('Fin del init');
  }

  getUsuarios() {

    return new Promise(resolve => {
      fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(body => resolve(body.data))
    })
  }

}

