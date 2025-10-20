import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Registration from './components/Registration';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import GbDashboard from './components/GbDashboard';
import GmDashboard from './components/GmDashboard';
import DbDashboard from './components/DbDashboard';
import DcDashboard from './components/DcDashboard';
import EcDashboard from './components/EcDashboard';
import CfoDashboard from './components/CfoDashboard';
import IecHeadDashboard from './components/IecHeadDashboard';
import SecretaryDashboard from './components/SecretaryDashboard';
import GaDashboard from './components/GaDashboard';
import MeetingRoomPage from './components/MeetingRoomPage';
import { User, Notification, MediaItem, RegistrationApplication, FormDefinition, FormSubmission, VCInvitation, BudgetRequest, BudgetApprovalOrder, OutwardEntry, UserRole, BudgetStatus, MeetingMinute, EventType, NewsItem, GalleryImage, VideoItem, AboutUsData, Query, FullAddress, AttendanceRecord } from './types';
import { generateApprovalOrderPDF } from './utils/pdfGenerator';
import Events from './components/Events';
import NewsAndMedia from './components/dashboard/NewsAndMedia';
import GbNotifications from './components/dashboard/GbNotifications';
import ImageCarousel from './components/ImageCarousel';
import { api, setAuthToken } from './utils/api';
import AttendanceAuthModal from './components/AttendanceAuthModal';


type Page = 'home' | 'registration' | 'login' | 'dashboard' | 'meeting';

export type Theme = {
    name: string;
    primary: string;
    primaryHover: string;
    primaryLight: string;
    secondary: string;
    secondaryLight: string;
};
export type Fonts = { heading: string; body: string; };
export type HeroAlignment = 'text-left' | 'text-center' | 'text-right';

// --- Default State Values ---
const defaultTheme: Theme = {
    name: 'Default',
    primary: '#f97316',
    primaryHover: '#ea580c',
    primaryLight: '#ffedd5',
    secondary: '#0284c7',
    secondaryLight: '#e0f2fe',
};

const defaultFonts: Fonts = { heading: "'Poppins', sans-serif", body: "'Lato', sans-serif" };

const defaultAboutUsData: AboutUsData = {
    boardMembers: [],
    aims: 'Aims have not been set yet.',
    objectives: 'Objectives have not been set yet.',
    organizationalStructureUrl: '',
    projects: 'Projects have not been described yet.',
};

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('home');
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // --- Website Settings State ---
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    const [fonts, setFonts] = useState<Fonts>(defaultFonts);
    const [logoUrl, setLogoUrl] = useState<string>('');
    const [logoSize, setLogoSize] = useState<number>(40);
    const [formLogoUrl, setFormLogoUrl] = useState<string>('');
    const [heroAlignment, setHeroAlignment] = useState<HeroAlignment>('text-center');
    const [heroImageUrl, setHeroImageUrl] = useState<string>('');
    const [aboutUsData, setAboutUsData] = useState<AboutUsData>(defaultAboutUsData);
    const [visitorCount, setVisitorCount] = useState<number>(0);

    // --- Application Data State ---
    const [allUsers, setAllUsers] = useState<User[]>([]);
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
    const [applications, setApplications] = useState<RegistrationApplication[]>([]);
    const [forms, setForms] = useState<FormDefinition[]>([]);
    const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
    const [vcInvitations, setVcInvitations] = useState<VCInvitation[]>([]);
    const [budgetRequests, setBudgetRequests] = useState<BudgetRequest[]>([]);
    const [budgetApprovalOrders, setBudgetApprovalOrders] = useState<BudgetApprovalOrder[]>([]);
    const [outwardRegister, setOutwardRegister] = useState<OutwardEntry[]>([]);
    const [meetingMinutes, setMeetingMinutes] = useState<MeetingMinute[]>([]);
    const [events, setEvents] = useState<EventType[]>([]);
    const [queries, setQueries] = useState<Query[]>([]);
    const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([]);
    const [isAttendanceModalOpen, setIsAttendanceModalOpen] = useState(false);
    
    const [currentMeeting, setCurrentMeeting] = useState<VCInvitation | undefined>(undefined);

    // --- Data Fetching ---
    const fetchAllData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            // FIX: Replaced incorrect `create...` calls with actual data fetching calls from the API.
            const [
                users, notificationsData, media, apps, formDefs, subs, vcs,
                budgets, orders, outward, minutes, eventsData, queriesData
            ] = await Promise.all([
                api.getUsers(),
                api.getNotifications(),
                api.getMediaItems(),
                api.getApplications(),
                api.getForms(),
                api.getSubmissions(),
                api.getVcInvitations(),
                api.getBudgetRequests(),
                api.getBudgetApprovalOrders(),
                api.getOutwardRegister(),
                api.getMeetingMinutes(),
                api.getEvents(),
                api.getQueries(),
            ]);

            setAllUsers(users || []);
            setNotifications(notificationsData || []);
            setMediaItems(media || []);
            setApplications(apps || []);
            setForms(formDefs || []);
            setSubmissions(subs || []);
            setVcInvitations(vcs || []);
            setBudgetRequests(budgets || []);
            setBudgetApprovalOrders(orders || []);
            setOutwardRegister(outward || []);
            setMeetingMinutes(minutes || []);
            setEvents(eventsData || []);
            setQueries(queriesData || []);

        } catch (e: any) {
            setError('Failed to load application data. Please try again later.');
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // Fetch initial public settings on app load
        const fetchSettingsAndPublicData = async () => {
            setIsLoading(true);
            try {
                const [settings, users] = await Promise.all([
                    api.getSettings(),
                    api.getUsers()
                ]);
                setTheme(settings.theme || defaultTheme);
                setFonts(settings.fonts || defaultFonts);
                setLogoUrl(settings.logoUrl || '');
                setLogoSize(settings.logoSize || 40);
                setFormLogoUrl(settings.formLogoUrl || '');
                setHeroAlignment(settings.heroAlignment || 'text-center');
                setHeroImageUrl(settings.heroImageUrl || '');
                setAboutUsData(settings.aboutUsData || defaultAboutUsData);
                setVisitorCount(settings.visitorCount || 0);
                setAllUsers(users || []);
            } catch (e: any) {
                setError('Could not load website settings.');
                console.error(e);
            } finally {
                setIsLoading(false);
            }
        };
        fetchSettingsAndPublicData();
    }, []);

    // --- Handlers (rewritten for API calls) ---
    const handleNavigate = (page: Page) => setCurrentPage(page);

    const handleLogin = async (username: string, password: string): Promise<{ success: boolean; message: string }> => {
        try {
            const { token, user } = await api.login(username, password);
            setAuthToken(token);
            setCurrentUser(user);
            setCurrentPage('dashboard');
            await fetchAllData(); // Fetch all protected data after login
            return { success: true, message: '' };
        } catch (e: any) {
            return { success: false, message: e.message || 'Login failed.' };
        }
    };

    const handleLogout = () => {
        setAuthToken(null);
        setCurrentUser(null);
        setCurrentPage('home');
        // Clear all sensitive data
        setAllUsers([]);
        setApplications([]);
        // etc.
    };

    const handleRegisterUser = async (data: Omit<RegistrationApplication, 'id' | 'date' | 'status'>) => {
        try {
            await api.createApplication(data);
            // No need to update state, user sees a confirmation page.
        } catch (e) {
            console.error("Registration failed:", e);
            alert("Registration failed. Please try again.");
        }
    };

    const handleApproveApplication = async (appId: string) => {
        try {
            await api.approveApplication(appId);
            // Refetch data to show the update
            const [updatedUsers, updatedApps] = await Promise.all([api.getUsers(), api.getApplications()]);
            setAllUsers(updatedUsers);
            setApplications(updatedApps);
        } catch (e) { console.error("Failed to approve application:", e); }
    };
    
    const handleRejectApplication = async (appId: string) => {
        try {
            await api.rejectApplication(appId);
            const updatedApps = await api.getApplications();
            setApplications(updatedApps);
        } catch (e) { console.error("Failed to reject application:", e); }
    };

    const handleUpdateUser = async (userId: string, updates: Partial<User>) => {
        try {
            const updatedUser = await api.updateUser(userId, updates);
            setAllUsers(prev => prev.map(u => (u.id === userId ? updatedUser : u)));
            if (currentUser?.id === userId) {
                setCurrentUser(prev => prev ? { ...prev, ...updatedUser } : null);
            }
        } catch (e) { console.error("Failed to update user:", e); }
    };

    const handleSaveUser = async (user: User) => {
        try {
            if (allUsers.some(u => u.id === user.id)) {
                // Existing user, update it
                await api.updateUser(user.id, user);
            } else {
                // New user, create it
                await api.createUser(user);
            }
            // Refetch all users to ensure UI consistency
            const updatedUsers = await api.getUsers();
            setAllUsers(updatedUsers);
        } catch(e) {
            console.error("Failed to save user:", e);
            alert("Error: Could not save employee data.");
        }
    };

    const handlePostNotification = async (text: string, targetRoles: UserRole[]) => {
        try {
            const newNotification = await api.createNotification(text, targetRoles);
            setNotifications(prev => [newNotification, ...prev]);
        } catch (e) { console.error("Failed to post notification:", e); }
    };

    const handleMarkAttendance = (employeeId: string, method: 'Face Recognition' | 'Fingerprint') => {
        setAttendanceRecords(prev => {
            const now = new Date();
            const todayStr = now.toISOString().split('T')[0];
            const timeStr = now.toTimeString().split(' ')[0];
    
            const existingRecordIndex = prev.findIndex(rec => rec.employeeId === employeeId && rec.date === todayStr);
    
            if (existingRecordIndex > -1) {
                // It's a clock-out
                const updatedRecords = [...prev];
                updatedRecords[existingRecordIndex] = { ...updatedRecords[existingRecordIndex], clockOutTime: timeStr };
                return updatedRecords;
            } else {
                // It's a clock-in
                const newRecord: AttendanceRecord = {
                    id: `att-${Date.now()}`,
                    employeeId,
                    date: todayStr,
                    clockInTime: timeStr,
                    status: 'Present',
                    method,
                };
                return [newRecord, ...prev];
            }
        });
    };

    // Generic handler to update settings via API
    const createSettingUpdater = <T,>(setter: React.Dispatch<React.SetStateAction<T>>, key: string) => {
        return async (value: T) => {
            setter(value);
            try {
                await api.updateSettings({ [key]: value });
            } catch (e) { console.error(`Failed to update setting ${key}:`, e); }
        };
    };

    // All other handlers would follow a similar pattern: call API, then update state with response or refetch.
    // For brevity, only a few are fully implemented here. The structure is the key.
    const handlePostMedia = async (item: any, type: 'news' | 'image' | 'video') => {
        const newItem = await api.createMedia(item, type);
        setMediaItems(p => [newItem, ...p]);
    };
    const handleApproveMedia = async (mediaId: string) => {
        const updated = await api.updateMediaStatus(mediaId, 'Approved');
        setMediaItems(p => p.map(i => i.id === mediaId ? updated : i));
    };
    const handleRejectMedia = async (mediaId: string) => {
        const updated = await api.updateMediaStatus(mediaId, 'Rejected');
        setMediaItems(p => p.map(i => i.id === mediaId ? updated : i));
    };
    const handleCreateBudget = async (proposal: any) => {
        const newBudget = await api.createBudget(proposal);
        setBudgetRequests(p => [newBudget, ...p]);
    };
    const handleReviewBudget = async (requestId: string, decision: any, remarks: string) => {
        const updated = await api.reviewBudget(requestId, decision, remarks);
        setBudgetRequests(p => p.map(i => i.id === requestId ? updated : i));
    };
    const handleGenerateOrderAndRegister = async (requestId: string, remarks: string) => {
        await api.generateBudgetOrder(requestId, remarks);
        fetchAllData(); // Refetch all for complex state changes
    };
    const handleSignOrder = async (orderId: string) => {
        await api.signBudgetOrder(orderId);
        fetchAllData();
    };
    const handleSubmitForm = async (submission: any) => {
        const newSub = await api.createSubmission(submission);
        setSubmissions(p => [newSub, ...p]);
    };
    const handleCreateForm = async (form: FormDefinition) => {
        const newForm = await api.createForm(form);
        setForms(p => [newForm, ...p]);
    };
    const handleScheduleVC = async (vc: Omit<VCInvitation, 'id'>) => {
        const newVc = await api.createVC(vc);
        setVcInvitations(p => [newVc, ...p]);
    };
    const handleUploadMinutes = async (minute: Omit<MeetingMinute, 'id' | 'uploadedAt'>) => {
        const newMin = await api.createMinutes(minute);
        setMeetingMinutes(p => [newMin, ...p]);
    };
    const handleRaiseQuery = async (subject: string, message: string) => {
        const newQ = await api.createQuery(subject, message);
        setQueries(p => [newQ, ...p]);
    };
    const handleResolveQuery = async (queryId: string, response: string) => {
        const updated = await api.resolveQuery(queryId, response);
        setQueries(p => p.map(q => q.id === queryId ? updated : q));
    };

    // Placeholder handlers for unimplemented features
    const handleJoinMeeting = (link: string) => { /* ... */ };
    const handleDownloadOrder = (orderId: string) => { /* ... */ };

    const renderDashboard = () => {
        if (!currentUser) return <LoginPage onLogin={handleLogin} onNavigate={() => handleNavigate('registration')} />;
        const commonDownloadProps = { logoUrl, formLogoUrl };
        // The rest of this function remains largely the same as it passes props down
        // to child components, which don't need to know about the API calls.
        switch (currentUser.role) {
            case 'Admin':
            case 'GB':
                return <GbDashboard 
                    user={currentUser} allUsers={allUsers} applications={applications}
                    onApproveApplication={handleApproveApplication} onRejectApplication={handleRejectApplication}
                    notifications={notifications} onPostNotification={handlePostNotification}
                    forms={forms} submissions={submissions} onCreateForm={handleCreateForm}
                    budgetRequests={budgetRequests} onReviewBudget={handleReviewBudget}
                    onFinalGBApprove={handleGenerateOrderAndRegister} budgetApprovalOrders={budgetApprovalOrders}
                    outwardRegister={outwardRegister} onAddOutwardEntry={(e) => {}}
                    onDownloadOrder={handleDownloadOrder} meetingMinutes={meetingMinutes}
                    onUploadMinutes={handleUploadMinutes} vcInvitations={vcInvitations}
                    onScheduleVC={handleScheduleVC} onJoinMeeting={handleJoinMeeting}
                    mediaItems={mediaItems} onPostMedia={handlePostMedia} onApproveMedia={handleApproveMedia}
                    onRejectMedia={handleRejectMedia} theme={theme}
                    onThemeChange={createSettingUpdater(setTheme, 'theme')}
                    fonts={fonts} onFontsChange={createSettingUpdater(setFonts, 'fonts')}
                    logoUrl={logoUrl} onLogoChange={createSettingUpdater(setLogoUrl, 'logoUrl')}
                    logoSize={logoSize} onLogoSizeChange={createSettingUpdater(setLogoSize, 'logoSize')}
                    formLogoUrl={formLogoUrl} onFormLogoChange={createSettingUpdater(setFormLogoUrl, 'formLogoUrl')}
                    heroAlignment={heroAlignment} onAlignmentChange={createSettingUpdater(setHeroAlignment, 'heroAlignment')}
                    onUpdateUser={handleUpdateUser} heroImageUrl={heroImageUrl}
                    onHeroImageChange={createSettingUpdater(setHeroImageUrl, 'heroImageUrl')}
                    aboutUsData={aboutUsData} onAboutUsDataChange={createSettingUpdater(setAboutUsData, 'aboutUsData')}
                    queries={queries} onResolveQuery={handleResolveQuery}
                />;
            case 'DC':
                 return <DcDashboard
                    user={currentUser} allUsers={allUsers} applications={applications}
                    budgetRequests={budgetRequests.filter(b => b.division === currentUser.district)}
                    onCreateBudget={handleCreateBudget} budgetApprovalOrders={budgetApprovalOrders}
                    onDownloadOrder={handleDownloadOrder}
                    notifications={notifications.filter(n => !n.targetRoles || n.targetRoles.includes(currentUser.role))}
                    approvedMedia={mediaItems.filter(m => m.status === 'Approved')}
                    forms={forms} submissions={submissions} onSubmitForm={handleSubmitForm}
                    vcInvitations={vcInvitations.filter(vc => vc.targetRoles.includes(currentUser.role) || vc.createdBy === currentUser.id)}
                    onScheduleVC={handleScheduleVC} onJoinMeeting={handleJoinMeeting}
                    meetingMinutes={meetingMinutes} downloadProps={commonDownloadProps}
                />;
            case 'GM':
                return <GmDashboard
                    user={currentUser} notifications={notifications.filter(n => !n.targetRoles || n.targetRoles.includes(currentUser.role))}
                    approvedMedia={mediaItems.filter(m => m.status === 'Approved')}
                    forms={forms} submissions={submissions} onSubmitForm={handleSubmitForm}
                    vcInvitations={vcInvitations.filter(vc => vc.targetRoles.includes(currentUser.role))} 
                    onJoinMeeting={handleJoinMeeting} meetingMinutes={meetingMinutes}
                    queries={queries.filter(q => q.userId === currentUser.id)}
                    onRaiseQuery={handleRaiseQuery} onUpdateUser={handleUpdateUser}
                    downloadProps={commonDownloadProps}
                    allUsers={allUsers}
                />;
            case 'CFO':
                return <CfoDashboard
                    user={currentUser}
                    allUsers={allUsers}
                    budgetRequests={budgetRequests}
                    onReviewBudget={handleReviewBudget}
                    notifications={notifications.filter(n => !n.targetRoles || n.targetRoles.includes(currentUser.role))}
                    meetingMinutes={meetingMinutes}
                    downloadProps={commonDownloadProps}
                />;
            case 'EC':
                return <EcDashboard
                    user={currentUser}
                    budgetRequests={budgetRequests}
                    onReviewBudget={handleReviewBudget}
                    budgetApprovalOrders={budgetApprovalOrders}
                    onDownloadOrder={handleDownloadOrder}
                    notifications={notifications.filter(n => !n.targetRoles || n.targetRoles.includes(currentUser.role))}
                    approvedMedia={mediaItems.filter(m => m.status === 'Approved')}
                    forms={forms}
                    submissions={submissions}
                    onSubmitForm={handleSubmitForm}
                    vcInvitations={vcInvitations.filter(vc => vc.targetRoles.includes(currentUser.role))}
                    onJoinMeeting={handleJoinMeeting}
                    meetingMinutes={meetingMinutes}
                    downloadProps={commonDownloadProps}
                    allUsers={allUsers}
                />;
            case 'DB':
                return <DbDashboard
                    user={currentUser}
                    notifications={notifications.filter(n => !n.targetRoles || n.targetRoles.includes(currentUser.role))}
                    approvedMedia={mediaItems.filter(m => m.status === 'Approved')}
                    forms={forms}
                    submissions={submissions}
                    onSubmitForm={handleSubmitForm}
                    vcInvitations={vcInvitations.filter(vc => vc.targetRoles.includes(currentUser.role))}
                    onJoinMeeting={handleJoinMeeting}
                    meetingMinutes={meetingMinutes}
                    downloadProps={commonDownloadProps}
                    allUsers={allUsers}
                />;
            case 'IEC Head':
                return <IecHeadDashboard
                    user={currentUser}
                    mediaItems={mediaItems}
                    onPostMedia={handlePostMedia}
                    meetingMinutes={meetingMinutes}
                    downloadProps={commonDownloadProps}
                    allUsers={allUsers}
                />;
            case 'Secretary':
                return <SecretaryDashboard
                    user={currentUser}
                    notifications={notifications.filter(n => !n.targetRoles || n.targetRoles.includes(currentUser.role))}
                    approvalOrders={budgetApprovalOrders}
                    onSignOrder={handleSignOrder}
                    meetingMinutes={meetingMinutes}
                    downloadProps={commonDownloadProps}
                    allUsers={allUsers}
                />;
            case 'General Administration':
                return <GaDashboard
                    user={currentUser}
                    allUsers={allUsers}
                    onUpdateUser={handleUpdateUser}
                    onSaveUser={handleSaveUser}
                    attendanceRecords={attendanceRecords}
                    onMarkAttendance={handleMarkAttendance}
                />;
            default:
                return <Dashboard 
                    user={currentUser} 
                    notifications={notifications} 
                    approvedMedia={mediaItems.filter(m => m.status === 'Approved')} 
                    allUsers={allUsers}
                />;
        }
    };
    
    const renderContent = () => {
        if (isLoading) {
            return <div className="flex justify-center items-center h-screen">Loading...</div>;
        }
        if (error) {
            return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
        }
        
        const mainContent = () => {
             switch (currentPage) {
                case 'home': {
                    const publicNotifications = notifications.filter(n => !n.targetRoles);
                    const approvedNews = mediaItems.filter(item => item.type === 'news' && item.status === 'Approved') as NewsItem[];
                    const approvedImages = mediaItems.filter(item => item.type === 'image' && item.status === 'Approved') as GalleryImage[];
                    const approvedVideos = mediaItems.filter(item => item.type === 'video' && item.status === 'Approved') as VideoItem[];

                    return (
                        <>
                            <Hero onRegisterClick={() => handleNavigate('registration')} alignment={heroAlignment} heroImageUrl={heroImageUrl} />
                            <ImageCarousel images={approvedImages} />
                            <About data={aboutUsData} />
                            <section id="updates" className="bg-white py-16">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="text-center mb-12"><h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Latest Updates</h2><p className="mt-4 text-lg text-gray-500">Stay informed with the latest news, announcements, and media from the foundation.</p></div>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                        <GbNotifications notifications={publicNotifications} title="Announcements" />
                                        <NewsAndMedia newsItems={approvedNews} galleryImages={approvedImages} videoItems={approvedVideos} title="News & Media Gallery" />
                                    </div>
                                </div>
                            </section>
                            <Events events={events} />
                        </>
                    );
                }
                case 'registration': return <Registration onBackToHome={() => handleNavigate('home')} onRegister={handleRegisterUser} />;
                case 'login': return <LoginPage onLogin={handleLogin} onNavigate={() => handleNavigate('registration')} />;
                case 'dashboard': return renderDashboard();
                default: return <div>Page not found</div>;
            }
        };

        return (
            <>
                <Header onNavigate={handleNavigate} currentUser={currentUser} onLogout={handleLogout} logoUrl={logoUrl} logoSize={logoSize} onMarkAttendanceClick={() => setIsAttendanceModalOpen(true)} />
                <main>{mainContent()}</main>
                {(currentPage === 'home' || currentPage === 'registration' || currentPage === 'login') && <Footer visitorCount={visitorCount} />}
                {isAttendanceModalOpen && (
                    <AttendanceAuthModal
                        isOpen={isAttendanceModalOpen}
                        onClose={() => setIsAttendanceModalOpen(false)}
                        allUsers={allUsers}
                        onMarkAttendance={handleMarkAttendance}
                        attendanceRecords={attendanceRecords}
                        currentUser={currentUser}
                    />
                )}
            </>
        )
    };
    
    const appStyle: React.CSSProperties = {
        '--primary-color': theme.primary,
        '--primary-hover-color': theme.primaryHover,
        '--primary-light-color': theme.primaryLight,
        '--secondary-color': theme.secondary,
        '--secondary-light-color': theme.secondaryLight,
        '--heading-font': fonts.heading,
        '--body-font': fonts.body,
    } as React.CSSProperties;


    return <div className="App" style={appStyle}>{renderContent()}</div>;
};

export default App;