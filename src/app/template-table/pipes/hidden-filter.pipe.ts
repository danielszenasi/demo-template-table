import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
  name: 'hiddenfilter'
})

export class FilterPipe implements PipeTransform {
  transform(items: Array<any>, ...args: any[]) {
    return items.filter(item => {
      item.hidden == args[0].hidden
    });
  }
}
