import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: "Dashboard",
      icon: "mdi mdi-gauge",
      children: [
        {
          title: "Main",
          url: "/dashboard"
        },
        {
          title: "Progress Bar",
          url: "/dashboard/progress"
        },
        {
          title: "Gráfica",
          url: "/dashboard/charts/1"
        }
      ]
    }
  ]

  constructor() { }
}
