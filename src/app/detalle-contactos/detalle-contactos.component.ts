import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContactosService } from "../contactos.service";
import { contactos } from '../contacto';


@Component({
  selector: "app-detalle-contactos",
  templateUrl: "./detalle-contactos.component.html",
  styleUrls: ["./detalle-contactos.component.css"],
})
export class DetalleContactosComponent implements OnInit {
  constructor(
    private cService: ContactosService,
    private route: ActivatedRoute,
  ) {}

  listaContactos?: contactos;


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = Number(params.get("id"));
      this.cService.getDetail(id).subscribe((resp: any) => {
        this.listaContactos = resp.data;
      });
    });
  }
}
