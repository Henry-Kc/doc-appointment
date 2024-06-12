import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter, Search } from '@syncfusion/ej2-react-grids';

import { appointmentsData, appointmentsGrid } from '../../data/dummy';
import { Header } from '../../components/AdminDashboardComponent';

const Appointments = ({category, title}) => {
  const selectionsettings = { persistSelection: false };
  const toolbarOptions = ['Delete', 'Search'];
  const editing = { allowDeleting: true, allowEditing: true };

  const currentRoute = window.location.pathname; // get the current route
  console.log(currentRoute)
  const condition = currentRoute === '/admin/appointments';

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title={condition? 'Appointments' : title} category={condition? 'Page' : category}/>
      <GridComponent
        dataSource={appointmentsData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {appointmentsGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>

        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter, Search, Toolbar]} />
        
      </GridComponent>
    </div>
  );
};

export default Appointments;