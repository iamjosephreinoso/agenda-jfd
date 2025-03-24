import { Component, OnInit } from '@angular/core';
import {ExcelService} from "../../services/excel.service";
import Swal from 'sweetalert2';
import 'datatables.net';


declare var $: any;

@Component({
    selector: 'app-landing',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss']
})

export class GroupsComponent implements OnInit {

  constructor(private excelService: ExcelService) { }

  ngOnInit() {
      this.excelService.readExcelFile('/assets/data/Grupos_66.xlsx').then(data => {
          this.populateTable(data);
      });
  }
        populateTable(data: any[]): void {
            const tableBody = document.getElementById('dataBody');
            if (!tableBody) return;

            tableBody.innerHTML = ''; // Clear existing data

            data.slice(1).forEach(row => { // Skip header row
                const tr = document.createElement('tr');
                const nameTd = document.createElement('td');
                nameTd.style.borderColor = '#003366';
                nameTd.style.borderStyle = 'solid';

                nameTd.textContent = row[0]; // Assumes that name is in the first column
                tr.appendChild(nameTd);

                const actionTd = document.createElement('td');
                actionTd.style.textAlign = 'center'; // Centra horizontalmente
                actionTd.style.display = 'flex';
                actionTd.style.justifyContent = 'center'; // Centra los elementos dentro
                actionTd.style.alignItems = 'center'; // Centra verticalmente

                const infoButton = document.createElement('button');
                infoButton.textContent = 'Ver';
                infoButton.style.backgroundColor = '#003366';
                infoButton.style.color = 'white'; // Texto en blanco para contraste
                infoButton.style.border = 'none';

                infoButton.style.borderRadius = '5px';
                infoButton.style.cursor = 'pointer';
                infoButton.className = 'btn'; // Add your button styling here
                infoButton.onclick = () => {
                    this.showGroupInfo(row);
                };
                actionTd.appendChild(infoButton);

                tr.appendChild(actionTd);
                tableBody.appendChild(tr);
            });
            $('#dataTable').DataTable({
                "paging": true,
                "searching": true,
                "lengthChange": false,
                "language": {
                    "paginate": {
                        "next": "Siguiente",
                        "previous": "Anterior"
                    },
                    "search":"",
                    "searchPlaceholder": "Buscar Docente",
                    "emptyTable": "No hay datos disponibles en la tabla",
                    "info": "Mostrando _START_ a _END_ de _TOTAL_ docentes",
                    "infoEmpty": "Mostrando 0 a 0 de 0 docentes",
                    "infoFiltered": "(filtrado de _MAX_ entradas totales)",
                    "zeroRecords": "No existe docente"
                },
                "dom": '<"top"lf>rt<"bottom"ip><"clear">',
                "initComplete": function () {
                    $('.dataTables_length select').addClass('form-control form-control-sm');
                    $('.dataTables_paginate .paginate_button').addClass('btn btn-sm btn-light mx-1');
                    $('.dataTables_paginate .paginate_button.current').addClass('btn-primary');
                }
            });

        }
        showGroupInfo(row: any[]): void {
          const [Nombre, GrupoJF, GrupoJF2, LALA, Investigacion, Linea, Unnisma, Acreditacion, Continua] = row;
            Swal.fire({
                title: `<span style="font-size:20px;">${Nombre}</span>`,
                html: `<div style=" font-size:16px;">
                <strong>Jornadas de Formación Día 1:</strong> (${GrupoJF})<br>
                <strong>Jornadas de Formación Día 2:</strong> (${GrupoJF2})<br>
                <strong>Consejería Académica LALA:</strong> (${LALA})<br>
                <strong>Investigación:</strong> (${Investigacion})<br>
                <strong>UNADEDVI:</strong> (${Linea})<br>
                <strong>UNISSMA:</strong> (${Unnisma})<br> 
                <strong>Acreditación Internacional:</strong> (${Acreditacion})<br> 
                <strong>Educación Continua: </strong> (${Continua}) 
                </div>`,
                icon: 'info',
                iconColor:'#003366',
                confirmButtonText: 'Cerrar',
                confirmButtonColor: '#003366',
            });
        }
}
