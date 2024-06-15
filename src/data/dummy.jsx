import React from 'react';

import { MdOutlineDashboard, MdOutlineEditCalendar, MdPeopleOutline, MdFormatListBulletedAdd } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { FaClinicMedical } from "react-icons/fa"; 
import { TbCalendarUp, TbCalendarPlus } from "react-icons/tb";
import { AiFillSchedule } from "react-icons/ai";


import { IoMdContacts } from 'react-icons/io';


export const adminlinks = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'dashboard',
        icon: <MdOutlineDashboard />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'patients',
        icon: <IoMdContacts />,
      },
      {
        name: 'doctors',
        icon: <FaUserDoctor />,
      },
      {
        name: 'departments',
        icon: <FaClinicMedical />,
      },
      {
        name: 'appointments',
        icon: <TbCalendarPlus />,
      },
    ],
  },
  
];
export const userlinks = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'dashboard',
        icon: <MdOutlineDashboard />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'appointments',
        icon: <TbCalendarPlus />,
      },
      {
        name: 'doctors',
        icon: <FaUserDoctor />,
      },
      {
        name: 'departments',
        icon: <FaClinicMedical />,
      },
      
    ],
  },
  
];
export const doctorlinks = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'dashboard',
        icon: <MdOutlineDashboard />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'appointment list',
        icon: <MdFormatListBulletedAdd />,
      },
      {
        name: 'appointment schedule',
        icon: <AiFillSchedule />,
      },
      
    ],
  },
  
];

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];

export const gridPatientStatus = ({props}) => {
  console.log('PatientStatus-props:', props)
  return (
    <button
      type="button"
      style={{ background: props.StatusBg }}
      className="text-white py-1 px-2 capitalize rounded-2xl text-md"
    >
      {props.Status}
    </button>
  )
};
const gridDoctorProfile = (props) => (
  <div className="items-center">
    <p>{props.DoctorName}</p>
  </div>
); 
const appointmentsGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
    <p>{props.Status}</p>
  </div>
);


export const dashboardData = [
  {
    icon: <MdOutlineEditCalendar />,
    total: '10',
    title: 'Total appointments',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <MdPeopleOutline />,
    total: '3',
    title: 'Total Patients',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <FaUserDoctor />,
    total: '10',
    title: 'Total Doctors',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',
    pcColor: 'green-600',
  },
  {
    icon: <TbCalendarUp />,
    total: '3',
    title: 'Upcoming Appointments',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];

export const patientsGrid = [
  {
    field: 'PatientID',
    headerText: 'Patient ID',
    width: '120',
    textAlign: 'Center',
    editType: 'dropdownedit',
    isPrimaryKey: true, // specify the primary key column
  },
  { field: 'PatientName',
    headerText: 'Patient Name',
    width: '150',
    textAlign: 'Center',
    editType: 'dropdownedit',
  },
  { field: 'PatientEmail',
    headerText: 'Patient Email',
    width: '150',
    textAlign: 'Center',
    editType: 'dropdownedit',
  },
  { field: 'DoctorName',
    headerText: 'Doctor Name',
    width: '150',
    textAlign: 'Center',
    editType: 'dropdownedit',
  },
  {
    field: 'Speciality',
    headerText: 'Speciality',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  
  // {
  //   field: 'TotalAmount',
  //   headerText: 'Total Amount',
  //   format: 'C2',
  //   textAlign: 'Center',
  //   editType: 'numericedit',
  //   width: '150',
  // },
  // {
  //   headerText: 'Status',
  //   template: gridOrderStatus,
  //   field: 'Status',
  //   textAlign: 'Center',
  //   width: '120',
  // },
  
];
export const patientsData = [
  {
    PatientID: 'P001',
    PatientName: 'Lalrinkimi',
    PatientEmail: 'abc@xyz.com',
    DoctorName: 'Dr.Mike Wazowski',
    Speciality: 'Neurology',
    // Status: 'pending',
    // StatusBg: '#FB9678',
  },
  {
    PatientID: 'P002',
    PatientName: 'Khuma',

    PatientEmail: 'abc@xyz.com',
    DoctorName: 'Dr.James P. Sullivan',
    Speciality: 'Gynaecology',
    // Status: 'pending',
    // StatusBg: '#FB9678',
  },
  {
    PatientID: 'P003',
    PatientName: 'Veli',

    PatientEmail: 'abc@xyz.com',
    DoctorName: 'Dr. Mike Wazowski',
    Speciality: 'Dermatology',
    // Status: 'pending',
    // StatusBg: '#FB9678',
  },
  {
    PatientID: 'P004',
    PatientName: 'Hmangaiha',

    PatientEmail: 'abc@xyz.com',
    DoctorName: 'Dr.Randall Boggs',
    Speciality: 'Neurology',
    // Status: 'pending',
    // StatusBg: '#FB9678',
  },
  {
    PatientID: 'P005',
    PatientName: 'Lalchhuanmawia',
    PatientEmail: 'abc@xyz.com',
    DoctorName: 'Dr. Fungus',
    Speciality: 'Cardiology',
  },
  {
    PatientID: 'P006',
    PatientName: 'Lalremruata',
    PatientEmail: 'abc@xyz.com',
    DoctorName: 'Dr. Needleman',
    Speciality: 'Orthopedics',
  },
  {
    PatientID: 'P007',
    PatientName: 'Lalhmingliana',
    PatientEmail: 'abc@xyz.com',
    DoctorName: 'Dr. Waternoose',
    Speciality: 'Gastroenterology',
  },
  {
    PatientID: 'P008',
    PatientName: 'Lalruatfela',
    PatientEmail: 'abc@xyz.com',
    DoctorName: 'Dr. Celia Mae',
    Speciality: 'Pediatrics',
  },
  {
    PatientID: 'P009',
    PatientName: 'Lalchhuanawma',
    PatientEmail: 'abc@xyz.com',
    DoctorName: 'Dr. Roz',
    Speciality: 'Ophthalmology',
  },
  {
    PatientID: 'P010',
    PatientName: 'Lalhlimpuia',
    PatientEmail: 'abc@xyz.com',
    DoctorName: 'Dr. Sulley',
    Speciality: 'Urology',
  },
]

export const doctorsGrid = [
  { type: 'checkbox', width: '50' },
  { 
    headerText: 'Doctor ID',
    field: 'DoctorID',
    width: '60',
    textAlign: 'Center',
    isPrimaryKey: true
  },
  { 
    headerText: 'DoctorName',
    field: 'DoctorName',
    template: gridDoctorProfile,
    width: '120',
    textAlign: 'Center',
  },
  { 
    headerText: 'Doctor Email',
    field: 'DoctorEmail',
    width: '170',
    textAlign: 'Center',
  },
  { 
    headerText: 'Speciality',
    field: 'Speciality',
    width: '170',
    textAlign: 'Center',
  },

  // { field: 'Title',
  //   headerText: 'Designation',
  //   width: '170',
  //   textAlign: 'Center',
  // },
  // { headerText: 'Country',
  //   width: '120',
  //   textAlign: 'Center',
  //   template: gridEmployeeCountry },

  // { field: 'HireDate',
  //   headerText: 'Hire Date',
  //   width: '135',
  //   format: 'yMd',
  //   textAlign: 'Center' },

  // { field: 'ReportsTo',
  //   headerText: 'Reports To',
  //   width: '120',
  //   textAlign: 'Center' },
  // { field: 'EmployeeID',
  //   headerText: 'Employee ID',
  //   width: '125',
  //   textAlign: 'Center' },
];
export const doctorsData = [
  {
    DoctorID: 'D001',
    DoctorName: 'Nancy Davolio',
    DoctorEmail: 'pqr@doc.com',
    Speciality: 'Neurology',
  },
  {
    DoctorID: 'D002',
    DoctorName: 'Dr. Mike Wazowski',
    DoctorEmail: 'pqr@doc.com',
    Speciality: 'Dermatology',
  },
  {
    DoctorID: 'D003',
    DoctorName: 'Dr. James P. Sullivan',
    DoctorEmail: 'pqr@doc.com',
    Speciality: 'Gynaecology',
  },
  {
    DoctorID: 'D004',
    DoctorName: 'Dr. Randall Boggs',
    DoctorEmail: 'pqr@doc.com',
    Speciality: 'Neurology',
  },
  {
    DoctorID: 'D005',
    DoctorName: 'Dr. Fungus',
    DoctorEmail: 'pqr@doc.com',
    Speciality: 'Cardiology',
  },
  {
    DoctorID: 'D006',
    DoctorName: 'Dr. Needleman',
    DoctorEmail: 'pqr@doc.com',
    Speciality: 'Orthopedics',
  },
  {
    DoctorID: 'D007',
    DoctorName: 'Dr. Waternoose',
    DoctorEmail: 'pqr@doc.com',
    Speciality: 'Gastroenterology',
  },
  {
    DoctorID: 'D008',
    DoctorName: 'Dr. Celia Mae',
    DoctorEmail: 'pqr@doc.com',
    Speciality: 'Pediatrics',
  },
  {
    DoctorID: 'D009',
    DoctorName: 'Dr. Roz',
    DoctorEmail: 'pqr@doc.com',
    Speciality: 'Ophthalmology',
  },
  {
    DoctorID: 'D010',
    DoctorName: 'Dr. Sulley',
    DoctorEmail: 'pqr@doc.com',
    Speciality: 'Urology',
  },
];


export const departmentsGrid = [
  { type: 'checkbox', width: '50' },
  {
    headerText: 'Department ID',
    field: 'DepartmentID',
    width: '120',
    textAlign: 'Center',
    isPrimaryKey: true
  },
  {
    headerText: 'Department Name',
    field: 'DepartmentName',
    width: '150',
    textAlign: 'Center',
  },
  {
    headerText: 'Speciality',
    field: 'Speciality',
    width: '150',
    textAlign: 'Center',
  },
];
export const departmentsData = [
  {
    DepartmentID: 'D001',
    DepartmentName: 'Dermatology',
    Speciality: 'Skin related issues',
  },
  {
    DepartmentID: 'D002',
    DepartmentName: 'Gynaecology',
    Speciality: 'Women\'s health and pregnancy',
  },
  {
    DepartmentID: 'D003',
    DepartmentName: 'Neurology',
    Speciality: 'Brain and nervous system disorders',
  },
  {
    DepartmentID: 'D004',
    DepartmentName: 'Cardiology',
    Speciality: 'Heart related issues',
  },
  {
    DepartmentID: 'D005',
    DepartmentName: 'Orthopedics',
    Speciality: 'Bone and joint disorders',
  },
  {
    DepartmentID: 'D006',
    DepartmentName: 'Gastroenterology',
    Speciality: 'Digestive system disorders',
  },
  {
    DepartmentID: 'D007',
    DepartmentName: 'Pediatrics',
    Speciality: 'Children\'s health',
  },
  {
    DepartmentID: 'D008',
    DepartmentName: 'Ophthalmology',
    Speciality: 'Eye related issues',
  },
  {
    DepartmentID: 'D009',
    DepartmentName: 'Urology',
    Speciality: 'Urinary system disorders',
  },
  {
    DepartmentID: 'D010',
    DepartmentName: 'Nephrology',
    Speciality: 'Kidney related issues',
  },
  {
    DepartmentID: 'D011',
    DepartmentName: 'Oncology',
    Speciality: 'Cancer treatment',
  },
  {
    DepartmentID: 'D012',
    DepartmentName: 'Radiology',
    Speciality: 'Medical imaging',
  },
  {
    DepartmentID: 'D013',
    DepartmentName: 'Pathology',
    Speciality: 'Laboratory testing',
  },
  {
    DepartmentID: 'D014',
    DepartmentName: 'Psychiatry',
    Speciality: 'Mental health',
  },
  {
    DepartmentID: 'D015',
    DepartmentName: 'ENT',
    Speciality: 'Ear, nose, and throat disorders',
  },
  {
    DepartmentID: 'D016',
    DepartmentName: 'General Surgery',
    Speciality: 'Surgical procedures',
  },
  {
    DepartmentID: 'D017',
    DepartmentName: 'Neonatology',
    Speciality: 'Newborn care',
  },
  {
    DepartmentID: 'D018',
    DepartmentName: 'Pulmonology',
    Speciality: 'Lung related issues',
  },
  {
    DepartmentID: 'D019',
    DepartmentName: 'Rheumatology',
    Speciality: 'Joint and muscle disorders',
  },
  {
    DepartmentID: 'D020',
    DepartmentName: 'Endocrinology',
    Speciality: 'Hormone related issues',
  },
];


export const appointmentsGrid = [
  { type: 'checkbox', width: '50' },
  { 
    headerText: 'Appointment ID',
    field: 'AppointmentID',
    width: '60',
    textAlign: 'Center',
    isPrimaryKey: true
  },
  { 
    headerText: 'Patient Name',
    field: 'PatientName',
    width: '120',
    textAlign: 'Center' 
  },
  { 
    headerText: 'Patient ID',
    field: 'PatientID',
    width: '60',
    textAlign: 'Center' 
  },
  { 
    headerText: 'Doctor Name',
    field: 'DoctorName',
    width: '120',
    textAlign: 'Center' 
  },
  { 
    headerText: 'Doctor ID',
    field: 'DoctorID',
    width: '60',
    textAlign: 'Center' 
  },
  { 
    headerText: 'Appointment Date',
    field: 'AppointmentDate',
    width: '100',
    textAlign: 'Center' 
  },
  { 
    headerText: 'Appointment Time',
    field: 'AppointmentTime',
    width: '100',
    textAlign: 'Center' 
  },
  { 
    headerText: 'Status',
    field: 'Status',
    width: '100',
    textAlign: 'Center',
    template: appointmentsGridStatus 
  },
  { 
    headerText: 'Reason for Appointment',
    field: 'ReasonForAppointment',
    width: '100',
    textAlign: 'Center' 
  },
];
export const appointmentsData = [
  {
    AppointmentID: 'A001',
    PatientName: 'Lalrinkimi',
    PatientID: 'P001',
    DoctorName: 'Dr. Mike Wazowski',
    DoctorID: 'D002',
    AppointmentDate: '2024-01-01',
    AppointmentTime: '10:00 AM',
    Status: 'Pending',
    StatusBg: '#FEC90F',
    ReasonForAppointment: 'Skin Rash', // relates to Dr. Mike Wazowski's speciality (Dermatology)
  },
  {
    AppointmentID: 'A002',
    PatientName: 'Khuma',
    PatientID: 'P002',
    DoctorName: 'Dr. James P. Sullivan',
    DoctorID: 'D003',
    AppointmentDate: '2024-01-05',
    AppointmentTime: '2:00 PM',
    Status: 'Confirmed',
    StatusBg: '#8BE78B',
    ReasonForAppointment: 'Pregnancy Checkup', // relates to Dr. James P. Sullivan's speciality (Gynaecology)
  },
  {
    AppointmentID: 'A003',
    PatientName: 'Veli',
    PatientID: 'P003',
    DoctorName: 'Dr. Mike Wazowski',
    DoctorID: 'D002',
    AppointmentDate: '2024-01-10',
    AppointmentTime: '11:00 AM',
    Status: 'Rescheduled',
    StatusBg: 'red',
    ReasonForAppointment: 'Acne Treatment', // relates to Dr. Mike Wazowski's speciality (Dermatology)
  },
  {
    AppointmentID: 'A004',
    PatientName: 'Hmangaiha',
    PatientID: 'P004',
    DoctorName: 'Dr. Randall Boggs',
    DoctorID: 'D004',
    AppointmentDate: '2024-01-12',
    AppointmentTime: '3:00 PM',
    Status: 'Pending',
    StatusBg: '#FEC90F',
    ReasonForAppointment: 'Headache', // relates to Dr. Randall Boggs' speciality (Neurology)
  },
  {
    AppointmentID: 'A005',
    PatientName: 'Lalchhuanmawia',
    PatientID: 'P005',
    DoctorName: 'Dr. Fungus',
    DoctorID: 'D005',
    AppointmentDate: '2024-01-15',
    AppointmentTime: '10:30 AM',
    Status: 'Confirmed',
    StatusBg: '#8BE78B',
    ReasonForAppointment: 'Heart Checkup', // relates to Dr. Fungus' speciality (Cardiology)
  },
  {
    AppointmentID: 'A006',
    PatientName: 'Lalremruata',
    PatientID: 'P006',
    DoctorName: 'Dr. Needleman',
    DoctorID: 'D006',
    AppointmentDate: '2024-01-18',
    AppointmentTime: '2:30 PM',
    Status: 'Pending',
    StatusBg: '#FEC90F',
    ReasonForAppointment: 'Knee Pain', // relates to Dr. Needleman's speciality (Orthopedics)
  },
  {
    AppointmentID: 'A007',
    PatientName: 'Lalhmingliana',
    PatientID: 'P007',
    DoctorName: 'Dr. Waternoose',
    DoctorID: 'D007',
    AppointmentDate: '2024-01-20',
    AppointmentTime: '11:30 AM',
    Status: 'Confirmed',
    StatusBg: '#8BE78B',
    ReasonForAppointment: 'Stomach Issues', // relates to Dr. Waternoose's speciality (Gastroenterology)
  },
  {
    AppointmentID: 'A008',
    PatientName: 'Lalruatfela',
    PatientID: 'P008',
    DoctorName: 'Dr. Celia Mae',
    DoctorID: 'D008',
    AppointmentDate: '2024-01-22',
    AppointmentTime: '3:30 PM',
    Status: 'Pending',
    StatusBg: '#FEC90F',
    ReasonForAppointment: 'Vaccination', // relates to Dr. Celia Mae's speciality (Pediatrics)
  },
  {
    AppointmentID: 'A009',
    PatientName: 'Lalchhuanawma',
    PatientID: 'P009',
    DoctorName: 'Dr. Roz',
    DoctorID: 'D009',
    AppointmentDate: '2024-01-25',
    AppointmentTime: '10:00 AM',
    Status: 'Confirmed',
    StatusBg: '#8BE78B',
    ReasonForAppointment: 'Eye Checkup', // relates to Dr. Roz's speciality (Ophthalmology)
  },
  {
    AppointmentID: 'A010',
    PatientName: 'Lalhlimpuia',
    PatientID: 'P010',
    DoctorName: 'Dr. Sulley',
    DoctorID: 'D010',
    AppointmentDate: '2024-01-26',
    AppointmentTime: '11:00 AM',
    Status: 'Pending',
    StatusBg: '#FEC90F',
    ReasonForAppointment: 'Erectile Dysfunction', // relates to Dr. Roz's speciality (Ophthalmology)
  },
] 

export const doctorAppointmentsGrid = [
  { type: 'checkbox', width: '50' },
  { 
    headerText: 'Appointment ID',
    field: 'AppointmentID',
    width: '60',
    textAlign: 'Center',
    isPrimaryKey: true
  },
  { 
    headerText: 'Patient Name',
    field: 'PatientName',
    width: '120',
    textAlign: 'Center' 
  },
  { 
    headerText: 'Patient ID',
    field: 'PatientID',
    width: '60',
    textAlign: 'Center' 
  },
  { 
    headerText: 'Appointment Date',
    field: 'AppointmentDate',
    width: '100',
    textAlign: 'Center' 
  },
  { 
    headerText: 'Appointment Time',
    field: 'AppointmentTime',
    width: '100',
    textAlign: 'Center' 
  },
  { 
    headerText: 'Status',
    field: 'Status',
    width: '100',
    textAlign: 'Center',
    template: appointmentsGridStatus 
  },
  { 
    headerText: 'Reason for Appointment',
    field: 'ReasonForAppointment',
    width: '100',
    textAlign: 'Center' 
  },
];

export const scheduledAppointmentsGrid = [
  { type: 'checkbox', width: '50' },
  { 
    headerText: 'Appointment ID',
    field: 'AppointmentID',
    width: '60',
    textAlign: 'Center',
    isPrimaryKey: true
  },
  { 
    headerText: 'Patient Name',
    field: 'PatientName',
    width: '120',
    textAlign: 'Center' 
  },
  { 
    headerText: 'Patient ID',
    field: 'PatientID',
    width: '60',
    textAlign: 'Center' 
  },
  { 
    headerText: 'Appointment Date',
    field: 'AppointmentDate',
    width: '100',
    textAlign: 'Center' 
  },
  { 
    headerText: 'Appointment Time',
    field: 'AppointmentTime',
    width: '100',
    textAlign: 'Center' 
  },
  { 
    headerText: 'Status',
    field: 'Status',
    width: '100',
    textAlign: 'Center',
    template: appointmentsGridStatus 
  },
  { 
    headerText: 'Reason for Appointment',
    field: 'ReasonForAppointment',
    width: '100',
    textAlign: 'Center' 
  },
  { 
    headerText: 'Confirm Appointment',
    field: 'ConfirmAppointment',
    width: '100',
    textAlign: 'Center',
    // template: confirmAppointment 
  },
];

