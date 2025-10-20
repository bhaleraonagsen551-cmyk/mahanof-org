import { User } from './types';

export const USERS: User[] = [
    { id: 'user-gb', membershipId: 'MEM-NOF-1001', fullName: 'Dr. Rajendra Patil', username: 'gbuser', password: 'password', role: 'GB', status: 'active', cadre: 'Technical', profile: { photoUrl: '', mobile: '', gender: 'Male', permanentAddress: {} as any, correspondenceAddress: {} as any, officeDetails: {} as any, documents: { aadharNumber: '111122223333', aadharCardUrl: '', panCardUrl: '', mncRegistrationUrl: '', instituteIdCardUrl: '' } } },
    { id: 'user-admin', membershipId: 'MEM-NOF-1002', fullName: 'Admin User', username: 'admin', password: 'password', role: 'Admin', status: 'active', cadre: 'Non-Technical', profile: { photoUrl: '', mobile: '', gender: 'Other', permanentAddress: {} as any, correspondenceAddress: {} as any, officeDetails: {} as any, documents: { aadharNumber: '222233334444', aadharCardUrl: '', panCardUrl: '', mncRegistrationUrl: '', instituteIdCardUrl: '' } } },
    { id: 'user-ec', membershipId: 'MEM-NOF-1003', fullName: 'Sunita Williams', username: 'ecuser', password: 'password', role: 'EC', status: 'active', cadre: 'Technical', profile: { photoUrl: '', mobile: '', gender: 'Female', permanentAddress: {} as any, correspondenceAddress: {} as any, officeDetails: {} as any, documents: { aadharNumber: '333344445555', aadharCardUrl: '', panCardUrl: '', mncRegistrationUrl: '', instituteIdCardUrl: '' } } },
    { id: 'user-cfo', membershipId: 'MEM-NOF-1004', fullName: 'Mohan Kumar', username: 'cfouser', password: 'password', role: 'CFO', status: 'active', cadre: 'Non-Technical', profile: { photoUrl: '', mobile: '', gender: 'Male', permanentAddress: {} as any, correspondenceAddress: {} as any, officeDetails: {} as any, documents: { aadharNumber: '444455556666', aadharCardUrl: '', panCardUrl: '', mncRegistrationUrl: '', instituteIdCardUrl: '' } } },
    { id: 'user-sec', membershipId: 'MEM-NOF-1005', fullName: 'Aarav Mehta', username: 'secuser', password: 'password', role: 'Secretary', status: 'active', cadre: 'Non-Technical', profile: { photoUrl: '', mobile: '', gender: 'Male', permanentAddress: {} as any, correspondenceAddress: {} as any, officeDetails: {} as any, documents: { aadharNumber: '555566667777', aadharCardUrl: '', panCardUrl: '', mncRegistrationUrl: '', instituteIdCardUrl: '' } } },
    { id: 'user-iec', membershipId: 'MEM-NOF-1006', fullName: 'Deepika Rao', username: 'iecuser', password: 'password', role: 'IEC Head', status: 'active', cadre: 'Non-Technical', profile: { photoUrl: '', mobile: '', gender: 'Female', permanentAddress: {} as any, correspondenceAddress: {} as any, officeDetails: {} as any, documents: { aadharNumber: '666677778888', aadharCardUrl: '', panCardUrl: '', mncRegistrationUrl: '', instituteIdCardUrl: '' } } },
    { id: 'user-dc-pune', membershipId: 'MEM-NOF-1007', fullName: 'Prakash Kulkarni', username: 'dc_pune', password: 'password', role: 'DC', district: 'Pune Division', status: 'active', cadre: 'Technical', profile: { photoUrl: '', mobile: '', gender: 'Male', permanentAddress: {} as any, correspondenceAddress: {} as any, officeDetails: {} as any, documents: { aadharNumber: '777788889999', aadharCardUrl: '', panCardUrl: '', mncRegistrationUrl: '', instituteIdCardUrl: '' } } },
    { id: 'user-dc-nagpur', membershipId: 'MEM-NOF-1008', fullName: 'Anita Deshpande', username: 'dc_nagpur', password: 'password', role: 'DC', district: 'Nagpur Division', status: 'active', cadre: 'Technical', profile: { photoUrl: '', mobile: '', gender: 'Female', permanentAddress: {} as any, correspondenceAddress: {} as any, officeDetails: {} as any, documents: { aadharNumber: '888899990000', aadharCardUrl: '', panCardUrl: '', mncRegistrationUrl: '', instituteIdCardUrl: '' } } },
    { id: 'user-db-mumbai', membershipId: 'MEM-NOF-1009', fullName: 'Suresh Iyer', username: 'db_mumbai', password: 'password', role: 'DB', district: 'Mumbai', status: 'active', cadre: 'Technical', profile: { photoUrl: '', mobile: '', gender: 'Male', permanentAddress: {} as any, correspondenceAddress: {} as any, officeDetails: {} as any, documents: { aadharNumber: '999900001111', aadharCardUrl: '', panCardUrl: '', mncRegistrationUrl: '', instituteIdCardUrl: '' } } },
    { id: 'user-gm-pune', membershipId: 'MEM-NOF-1010', fullName: 'Kavita Chavan', username: 'gm_pune', password: 'password', role: 'GM', district: 'Pune', taluka: 'Haveli', status: 'active', cadre: 'Technical', profile: { photoUrl: '', mobile: '', gender: 'Female', permanentAddress: {} as any, correspondenceAddress: {} as any, officeDetails: {} as any, documents: { aadharNumber: '101020203030', aadharCardUrl: '', panCardUrl: '', mncRegistrationUrl: '', instituteIdCardUrl: '' } } },
    { id: 'user-gm-nagpur-1', membershipId: 'MEM-NOF-1011', fullName: 'Rajesh Kumar', username: 'gm_nagpur1', password: 'password', role: 'GM', district: 'Nagpur Division', taluka: 'Nagpur City', status: 'active', cadre: 'Technical', profile: { photoUrl: '', mobile: '', gender: 'Male', permanentAddress: {} as any, correspondenceAddress: {} as any, officeDetails: {} as any, documents: { aadharNumber: '202030304040', aadharCardUrl: '', panCardUrl: '', mncRegistrationUrl: '', instituteIdCardUrl: '' } } },
    { id: 'user-db-nagpur-1', membershipId: 'MEM-NOF-1012', fullName: 'Meena Patel', username: 'db_nagpur1', password: 'password', role: 'DB', district: 'Nagpur Division', taluka: 'Kamthi', status: 'active', cadre: 'Non-Technical', profile: { photoUrl: '', mobile: '', gender: 'Female', permanentAddress: {} as any, correspondenceAddress: {} as any, officeDetails: {} as any, documents: { aadharNumber: '303040405050', aadharCardUrl: '', panCardUrl: '', mncRegistrationUrl: '', instituteIdCardUrl: '' } } },
    { id: 'user-ga', membershipId: 'MEM-NOF-1013', fullName: 'Girish Oak', username: 'gauser', password: 'password', role: 'General Administration', status: 'active', cadre: 'Non-Technical', profile: { photoUrl: '', mobile: '', gender: 'Male', permanentAddress: {} as any, correspondenceAddress: {} as any, officeDetails: {} as any, documents: { aadharNumber: '404050506060', aadharCardUrl: '', panCardUrl: '', mncRegistrationUrl: '', instituteIdCardUrl: '' } } },
    // Merged from old salary mock data
    { 
        id: 'user-rohan-sharma', 
        membershipId: 'TECH001', 
        fullName: 'Rohan Sharma', 
        username: 'rohans', 
        password: 'password', 
        role: 'GM', 
        status: 'active', 
        cadre: 'Technical',
        profile: {
            photoUrl: '', mobile: '9876543210', gender: 'Male', permanentAddress: {} as any, correspondenceAddress: {} as any,
            officeDetails: { designation: 'Senior System Analyst', dateOfAppointment: '2020-05-10', officeName: 'IT Department, Head Office', department: 'IT', address: {} as any, natureOfAppointment: '', typeOfAppointment: ''},
            bank: { account: '1122334455', ifsc: 'PUNB01234', branch: 'Pune Main' },
            documents: { aadharNumber: '505060607070', aadharCardUrl: '', panCardUrl: '', mncRegistrationUrl: '', instituteIdCardUrl: '' }
        }
    },
    { 
        id: 'user-priya-verma', 
        membershipId: 'TECH002', 
        fullName: 'Priya Verma', 
        username: 'priyav', 
        password: 'password', 
        role: 'GM', 
        status: 'active', 
        cadre: 'Technical',
        profile: {
            photoUrl: '', mobile: '9876543211', gender: 'Female', permanentAddress: {} as any, correspondenceAddress: {} as any,
            officeDetails: { designation: 'Network Engineer', dateOfAppointment: '2021-08-22', officeName: 'Network Division, Nagpur', department: 'IT', address: {} as any, natureOfAppointment: '', typeOfAppointment: ''},
            bank: { account: '9988776655', ifsc: 'BKID05678', branch: 'Nagpur Civil Lines' },
            documents: { aadharNumber: '606070708080', aadharCardUrl: '', panCardUrl: '', mncRegistrationUrl: '', instituteIdCardUrl: '' }
        }
    },
    { 
        id: 'user-amit-patel', 
        membershipId: 'TECH003', 
        fullName: 'Amit Patel', 
        username: 'amitp', 
        password: 'password', 
        role: 'GM', 
        status: 'active', 
        cadre: 'Technical',
        profile: {
            photoUrl: '', mobile: '9876543212', gender: 'Male', permanentAddress: {} as any, correspondenceAddress: {} as any,
            officeDetails: { designation: 'Database Administrator', dateOfAppointment: '2019-02-15', officeName: 'Data Center, Mumbai', department: 'IT', address: {} as any, natureOfAppointment: '', typeOfAppointment: ''},
            bank: { account: '5566778899', ifsc: 'MAHB09876', branch: 'Mumbai Fort' },
            documents: { aadharNumber: '707080809090', aadharCardUrl: '', panCardUrl: '', mncRegistrationUrl: '', instituteIdCardUrl: '' }
        }
    },
    { 
        id: 'user-sunita-joshi', 
        membershipId: 'NONTECH001', 
        fullName: 'Sunita Joshi', 
        username: 'sunitaj', 
        password: 'password', 
        role: 'GM', 
        status: 'active', 
        cadre: 'Non-Technical',
        profile: {
            photoUrl: '', mobile: '9876543213', gender: 'Female', permanentAddress: {} as any, correspondenceAddress: {} as any,
            officeDetails: { designation: 'Office Clerk', dateOfAppointment: '2022-01-18', officeName: 'Admin Department, Head Office', department: 'Admin', address: {} as any, natureOfAppointment: '', typeOfAppointment: ''},
            bank: { account: '1234567890', ifsc: 'SBIN01234', branch: 'Mumbai Main' },
            documents: { aadharNumber: '808090901010', aadharCardUrl: '', panCardUrl: '', mncRegistrationUrl: '', instituteIdCardUrl: '' }
        }
    },
    { 
        id: 'user-rajesh-gupta', 
        membershipId: 'NONTECH002', 
        fullName: 'Rajesh Gupta', 
        username: 'rajeshg', 
        password: 'password', 
        role: 'GM', 
        status: 'active', 
        cadre: 'Non-Technical',
        profile: {
            photoUrl: '', mobile: '9876543214', gender: 'Male', permanentAddress: {} as any, correspondenceAddress: {} as any,
            officeDetails: { designation: 'Peon', dateOfAppointment: '2021-11-01', officeName: 'Pune Division Office', department: 'Admin', address: {} as any, natureOfAppointment: '', typeOfAppointment: ''},
            bank: { account: '0987654321', ifsc: 'HDFC05678', branch: 'Pune Camp' },
            documents: { aadharNumber: '909010102020', aadharCardUrl: '', panCardUrl: '', mncRegistrationUrl: '', instituteIdCardUrl: '' }
        }
    },
     { 
        id: 'user-meena-kumari', 
        membershipId: 'NONTECH003', 
        fullName: 'Meena Kumari', 
        username: 'meenak', 
        password: 'password', 
        role: 'GM', 
        status: 'active', 
        cadre: 'Non-Technical',
        profile: {
            photoUrl: '', mobile: '9876543215', gender: 'Female', permanentAddress: {} as any, correspondenceAddress: {} as any,
            officeDetails: { designation: 'Accountant Assistant', dateOfAppointment: '2020-07-30', officeName: 'Finance Department, Head Office', department: 'Finance', address: {} as any, natureOfAppointment: '', typeOfAppointment: ''},
            bank: { account: '1112223334', ifsc: 'ICIC09876', branch: 'Bandra West' },
            documents: { aadharNumber: '121234345656', aadharCardUrl: '', panCardUrl: '', mncRegistrationUrl: '', instituteIdCardUrl: '' }
        }
    }
];