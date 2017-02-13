import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'tt-paginator',
  templateUrl: './paginator.html'
})

export class PaginatorComponent {
  @Input() rowsPerPage: number = 0;

  @Input() styleClass: string;

  @Output() onPageChange: EventEmitter<any> = new EventEmitter();

  public _totalRecords: number = 0;

  public _first: number = 0;

  @Input() get totalRecords(): number {
    return this._totalRecords;
  }

  set totalRecords(val: number) {
    this._totalRecords = val;
    //this.updatePageLinks();
  }

  @Input() get first(): number {
    return this._first;
  }

  set first(val: number) {
    this._first = val;
    //this.updatePageLinks();
  }

  isFirstPage(): boolean {
    return this.getPage() === 0;
  }

  isLastPage(): boolean {
    return this.getPage() === this.getPageCount() - 1;
  }

  getPageCount(): number {
    return Math.ceil(this.totalRecords / this.rowsPerPage) || 1;
  }

  changePage(p: number, event) {
    var pc = this.getPageCount();

    if (p >= 0 && p < pc) {
      this.first = this.rowsPerPage * p;
      var state = {
        page: p,
        first: this.first,
        rowsPerPage: this.rowsPerPage,
        pageCount: pc
      };
      //this.updatePageLinks();

      this.onPageChange.emit(state);
    }

    if (event) {
      event.preventDefault();
    }
  }

  getPage(): number {
    return Math.floor(this.first / this.rowsPerPage);
  }

  changePageToFirst(event) {
    this.changePage(0, event);
  }

  changePageToPrev(event) {
    this.changePage(this.getPage() - 1, event);
  }

  changePageToNext(event) {
    this.changePage(this.getPage() + 1, event);
  }

  changePageToLast(event) {
    this.changePage(this.getPageCount() - 1, event);
  }
}
