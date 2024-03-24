import {
  FilterSettingsModel,
  GridComponent,
  GroupSettingsModel,
  PageSettingsModel,
  PdfExportProperties,
  ResizeSettingsModel,
  ToolbarItems,
} from '@syncfusion/ej2-angular-grids';
import { ActivatedRoute, Router } from '@angular/router';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridDefaults } from '@issp/common/ui/libraries';
import { ISSPDetails } from '../models/issp-details';
import { Subscription } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy({ arrayName: 'subs' })
@Component({
  selector: 'issp-items',
  templateUrl: './issp-items.component.html',
  styleUrl: './issp-items.component.scss',
})
export class IsspItemsComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  // Grid
  @ViewChild('itemsGrid', { static: true })
  grid: GridComponent;
  gridId = 'itemsGrid';
  gridData: Array<ISSPDetails> = new Array<ISSPDetails>();
  gridPageSettings: PageSettingsModel = new GridDefaults();
  resizeSettings: ResizeSettingsModel = { mode: 'Normal' };
  filterSettings: FilterSettingsModel = { type: 'Excel' };
  sortSettings = { columns: [{ field: 'createdAt', direction: 'Descending' }] };
  toolbar: ToolbarItems[] = [
    'Print',
    'Search',
    'ExcelExport',
    'PdfExport',
    'ColumnChooser',
  ];
  groupSettings: GroupSettingsModel = {
    showDropArea: false,
  };
  loadingIndicator: object;

  subs: Subscription[] = [];

  ngOnInit() {
    this.initSubs();
    this.loadingIndicator = { indicatorType: 'Shimmer' };
  }

  initSubs() {
    const routeSub = this.route.data.subscribe(({ issps }) => {
      this.gridData = issps;
    });
    this.subs.push(routeSub);
  }

  toolbarClick(args: ClickEventArgs) {
    if (args.item) {
      if (args.item.id === this.gridId + '_excelexport') {
        (this.grid as GridComponent).excelExport();
      }
      if (args.item.id === this.gridId + '_pdfexport') {
        const pdfExportProperties: PdfExportProperties = {
          exportType: 'CurrentPage',
          allowHorizontalOverflow: true,
          pageOrientation:
            'Landscape' as PdfExportProperties['pageOrientation'],
        };
        (this.grid as GridComponent).pdfExport(pdfExportProperties);
      }
    }
  }

  addNew() {
    this.router.navigate(['./new'], { relativeTo: this.route });
  }

  created(): void {
    (
      document.getElementById(this.gridId + '_searchbar') as Element
    ).addEventListener('keyup', () => {
      (this.grid as GridComponent).search(
        ((event as MouseEvent).target as HTMLInputElement).value
      );
    });
  }
}
