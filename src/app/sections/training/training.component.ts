import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
    selector: 'app-profile',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.scss']
})

export class TrainingComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
    showGroupInfo(): void {
        Swal.fire({
            title: `<span style="font-size: 20px; color: #000;">Lista de Líderes</span>`,
            html: `<div style="font-size: 14px;">
                Grupo 1: P. Luis Ángel Banegas - Aula 7 Gullermo Mensi<br>
                Grupo 2: P. Raúl Conza - Aula 8 Gullermo Mensi<br>
                Grupo 3: P. Marcelo Coronel - Aula 9 Gullermo Mensi<br>
                Grupo 4: Guillermo Pillajo - Aula 10 Gullermo Mensi<br>
                Grupo 5: Nexi Rosales - Aula 11 Gullermo Mensi<br>
                Grupo 6: Paúl Flores - Aula 12 Gullermo Mensi<br>
                Grupo 7: Jhon Ávila - Aula 13 Gullermo Mensi<br>
                Grupo 8: Fernando Garcés - Aula 14 Gullermo Mensi<br>
                Grupo 9: Bertha Tacuri - Aula 15 Gullermo Mensi<br>
                Grupo 10: Gabriela Arias - Aula 16 Gullermo Mensi<br>
            </div>`,
            confirmButtonText: 'Cerrar',
            confirmButtonColor: "#003366"
        });
    }

    showGroupInfo2(): void {
        Swal.fire({
            title: `<span style="font-size: 20px; color: #000;">Lista de Líderes</span>`,
            html: `<div style="font-size: 14px;">
                Grupo 1,2,3: P. Luis Ángel Banegas, P. Raúl Conza, P. Marcelo Coronel, Líder 1 ITFAS - Auditorio Leonidas Proaño<br>
                Grupo 4,5: Guillermo Pillajo, Nexi Rosales, Líder 2 ITFAS - Auditorio Mons. Luna Tobar<br>
                Grupo 6: Paúl Flores, Líder 3 ITFAS - Aula 12 Guillermo Mensi<br>
                Grupo 7: Jhon Ávila, Líder 4 ITFAS - Aula 13 Guillermo Mensi<br>
                Grupo 8: Fernando Garcés, Líder 5 ITFAS - Aula 14 Guillermo Mensi<br>
                Grupo 9: Bertha Tacuri, Líder 6 ITFAS - Aula 15 Guillermo Mensi<br>
                Grupo 10: Gabriela Arias, Líder 7 ITFAS - Aula 16 Guillermo Mensi
            </div>`,
            confirmButtonText: 'Cerrar',
            confirmButtonColor: "#003366"
        });
    }
}
