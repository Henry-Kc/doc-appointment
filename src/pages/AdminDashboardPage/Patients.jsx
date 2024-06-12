import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Search, Toolbar, CommandColumn } from '@syncfusion/ej2-react-grids';
import {
  Resize,
  Sort, // Add this import
  ContextMenu,
  Filter,
  ExcelExport,
  Edit,
  PdfExport,
} from '@syncfusion/ej2-react-grids';


import { patientsData, contextMenuItems, patientsGrid } from '../../data/dummy';
import { Header } from '../../components/AdminDashboardComponent';

const Patients = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  console.log('Patientsgrid:', patientsGrid);
  console.log('Patientsdata:', patientsData);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Patients" />
      <GridComponent
        id="gridcomp"
        dataSource={patientsData}
        // allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
        toolbar={['Search']}
        // pageSettings={{ pageSize:6 }}
        height={320}
        // allowDeleting={true}
        width='auto'
      >
        <ColumnsDirective>
          {patientsGrid.map((item, index) =>
            <ColumnDirective key={index} {...item} />
          )}
        </ColumnsDirective>

        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport, Toolbar, Search]} />
        
      </GridComponent>
    </div>
  )
}

export default Patients