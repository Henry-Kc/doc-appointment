import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Search, Toolbar } from '@syncfusion/ej2-react-grids';
import {
  Resize,
  Sort, // Add this import
  ContextMenu,
  Filter,
  ExcelExport,
  Edit,
  PdfExport,
} from '@syncfusion/ej2-react-grids';

import { doctorsData, contextMenuItems, doctorsGrid } from '../../data/dummy';
import { Header } from '../../components/AdminDashboardComponent';

const Doctors = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  console.log('doctorsgrid:', doctorsGrid);
  console.log('doctorsdata:', doctorsData);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Doctors" />
      <GridComponent
        id="gridcomp"
        dataSource={doctorsData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
        toolbar={['Search', 'Delete']}
        pageSettings={{ pageSize:7 }}
        width='auto'
      >
        <ColumnsDirective>
          {doctorsGrid.map((item, index) =>
            <ColumnDirective key={index} {...item} />
          )}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport, Search, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Doctors