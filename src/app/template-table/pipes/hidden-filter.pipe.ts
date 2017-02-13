import {Pipe, PipeTransform, QueryList} from "@angular/core";
import {ColumnComponent} from "../column.component";
@Pipe({
  name: 'hiddenfilter'
})

export class HiddenFilterPipe implements PipeTransform {
  transform(items: QueryList<ColumnComponent>) {
    return items.filter((item: ColumnComponent)=> {
      return !item.hidden;
    });
  }
}
