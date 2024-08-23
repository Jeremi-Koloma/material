import { Component, OnInit, ViewChild } from '@angular/core';

// Material
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';


// Element du Tableau
const ELEMENT_DATA = [
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 29.22,
    description: '2lms of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 200,
    total: 99.22,
    description: '3lms of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 300,
    total: 39.22,
    description: '4lms of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 400,
    total: 79.22,
    description: '4lms of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 500,
    total: 100.22,
    description: '5lms of tuna',
    isChecked: false
  },
];

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  // Filtrage
  @ViewChild(MatSort) sort!: MatSort;

  // Les colonnes du talbeau
  displayedColumns: string[] = ['actions', 'orderNumber', 'orderDate', 'description', 'total'];

  // Source des données
  //dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource!: MatTableDataSource<object>;

  // Pagination
  length = 100;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [1, 2, 3, 10];
  pageEvent!: PageEvent;


  constructor() { }

  ngOnInit(): void {
    this.loadData(0, this.pageSize);
    // Le filtrage
    this.dataSource.sort = this.sort;
  }


  // chargement des données de la table
  loadData(pageIndex: number, pageSize: number) {
    this.dataSource = new MatTableDataSource<object>(ELEMENT_DATA.slice(pageIndex, pageIndex + pageSize));
  }


  // Fonction pour la pagination
  onPageChange(event: PageEvent) {
    const previousIndex = event.previousPageIndex;
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    const length = event.length;
    this.loadData(this.pageIndex, this.pageSize);
  }

  // Fonction pour tout selectionner
  selectAll() {
    for (var elem of ELEMENT_DATA) {
      elem.isChecked = !elem.isChecked;
    }
  }
}
