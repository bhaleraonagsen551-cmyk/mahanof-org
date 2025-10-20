// FIX: Removed redundant self-import of `UserRole` that was causing a naming conflict.

export type UserRole = 'Admin' | 'GB' | 'EC' | 'DC' | 'DB' | 'GM' | 'CFO' | 'IEC Head' | 'Secretary' | 'General Administration';

export interface FullAddress {
  address: string; // For street, area, etc.
  division: string;
  district: string;
  taluka: string;
  village: string;
  pinCode: string;
}

export interface OfficeAddress {
  division: string;
  district: string;
  taluka: string;
  village: string;
}

export interface OfficeDetails {
  department: string;
  officeName: string;
  designation: string;
  address: OfficeAddress;
  natureOfAppointment: string;
  typeOfAppointment: string;
  dateOfAppointment?: string;
}

export interface UserDocuments {
  aadharCardUrl: string; // base64
  panCardUrl: string; // base64
  mncRegistrationUrl: string; // base64
  instituteIdCardUrl: string; // base64
  aadharNumber?: string;
}

export interface UserProfile {
  photoUrl: string; // base64
  mobile: string;
  gender?: 'Male' | 'Female' | 'Other';
  permanentAddress: FullAddress;
  correspondenceAddress: FullAddress;
  officeDetails: OfficeDetails;
  documents: UserDocuments;
  bank?: {
    account: string;
    ifsc: string;
    branch: string;
  };
}

export interface User {
  id: string;
  fullName: string;
  username: string;
  password?: string; // Should not be exposed on client-side in a real app
  membershipId: string;
  role: UserRole;
  district?: string;
  taluka?: string;
  status: 'active' | 'disabled';
  profile?: UserProfile;
  cadre?: 'Technical' | 'Non-Technical';
}

export interface Notification {
  id:string;
  text: string;
  date: string;
  isNew: boolean;
  targetRoles?: UserRole[];
}

export type MediaStatus = 'Pending' | 'Approved' | 'Rejected';

export interface NewsItem {
  id: string;
  type: 'news';
  title: string;
  content: string;
  source: string;
  date: string;
  status: MediaStatus;
  decisionDate?: string;
}

export interface GalleryImage {
  id: string;
  type: 'image';
  imageUrl: string;
  caption: string;
  status: MediaStatus;
  decisionDate?: string;
}

export interface VideoItem {
  id: string;
  type: 'video';
  videoUrl: string;
  title: string;
  status: MediaStatus;
  decisionDate?: string;
}

export type MediaItem = NewsItem | GalleryImage | VideoItem;

export interface RegistrationApplication {
    id: string;
    fullName: string;
    mobile: string;
    email: string;
    permanentAddress: FullAddress;
    correspondenceAddress: FullAddress;
    mncRegistration: string;
    qualification: string;
    username: string;
    password?: string; // Stored temporarily until user is created
    date: string;
    status: 'Pending' | 'Approved' | 'Rejected';
}

export interface FormField {
    id: string;
    label: string;
    type: 'text' | 'textarea' | 'select';
    options?: string[];
}

export interface FormDefinition {
    id: string;
    title: string;
    description: string;
    fields: FormField[];
    targetRoles: UserRole[];
}

export interface FormSubmission {
    id: string;
    formId: string;
    userId: string;
    userName: string;
    submittedAt: string;
    data: Record<string, any>;
}

export interface VCInvitation {
    id: string;
    title: string;
    date: string;
    time: string;
    link: string;
    targetRoles: UserRole[];
    createdBy?: string;
    attendance?: string[]; // Array of user IDs
}

export type BudgetStatus = 
    'Draft' |
    'Pending' | 
    'Pending EC Review' |
    'Pending CFO Review' |
    'Pending GB Approval' |
    'Pending Secretary Signature' |
    'Approved' | 
    'Rejected by EC' | 
    'Rejected by CFO' | 
    'Rejected by GB';

export interface BudgetRequest {
    id: string;
    title: string;
    fiscalYear: string;
    lineItems: { description: string; amount: number }[];
    totalAmount: number;
    createdBy: string; // User ID
    division: string; // e.g., 'Pune Division'
    submittedAt: string; // Date string
    status: BudgetStatus;
    
    // Tracking fields
    reviews: {
        role: 'EC' | 'CFO' | 'GB';
        userId: string;
        userName: string;
        decision: 'Approved' | 'Rejected';
        remarks: string;
        date: string;
    }[];

    approvalOrderId?: string;
}

export interface BudgetApprovalOrder {
    id: string;
    budgetRequestId: string;
    generatedDate: string;
    status: 'Pending Signature' | 'Signed';
    signedBy?: string; // Secretary's full name
    signedDate?: string;
}


export interface OutwardEntry {
    id: string;
    date: string;
    reference: string;
    recipient: string;
    subject: string;
    dispatchedBy: string; // User's full name
}

export interface MeetingMinute {
  id: string;
  title: string;
  description: string;
  date: string; // Meeting date
  uploadedAt: string;
  fileUrl: string; // Base64 data URL
  targetRoles: UserRole[];
}

export interface EventType {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD format
  description: string;
  category: 'Meeting' | 'Workshop' | 'Holiday' | 'Conference';
}

export interface Query {
  id: string;
  userId: string;
  userName: string;
  subject: string;
  message: string;
  submittedAt: string;
  status: 'Pending' | 'Resolved';
  response?: string;
  resolvedAt?: string;
}

export interface AttendanceRecord {
  id: string;
  employeeId: string;
  date: string; // YYYY-MM-DD
  clockInTime: string; // HH:mm:ss
  clockOutTime?: string; // HH:mm:ss
  status: 'Present' | 'Absent';
  method: 'Face Recognition' | 'Fingerprint';
}

// --- About Us Page Content ---
export interface GoverningBoardMember {
  id: string;
  name: string;
  designation: string;
  mobile: string;
  email: string;
  photoUrl: string; // base64
}

export interface AboutUsData {
  boardMembers: GoverningBoardMember[];
  aims: string;
  objectives: string;
  organizationalStructureUrl: string; // base64
  projects: string;
}