import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  recruiters: [
    { id: 1, name: "Rahul Sharma", company: "TCS", email: "Rahul.sharma@tcs.com", phone: "9876543210", status: "Active", completion: 85 },
    { id: 2, name: "Priya Patel", company: "Infosys", email: "priya.patel@infosys.com", phone: "9867543210", status: "Pending", completion: 60 },
    { id: 3, name: "Rahul Verma", company: "Wipro", email: "rahul.verma@wipro.com", phone: "9845543210", status: "Inactive", completion: 40 },
    { id: 4, name: "Sneha Nair", company: "HCL", email: "sneha.nair@hcl.com", phone: "9836543210", status: "Active", completion: 90 },
    { id: 5, name: "Aniket Joshi", company: "Capgemini", email: "aniket.joshi@capgemini.com", phone: "9823543210", status: "Pending", completion: 50 },
    { id: 6, name: "Meera Iyer", company: "Tech Mahindra", email: "meera.iyer@techm.com", phone: "9817543210", status: "Inactive", completion: 35 },
    { id: 7, name: "Vikram Singh", company: "Accenture", email: "vikram.singh@accenture.com", phone: "9806543210", status: "Active", completion: 88 },
    { id: 8, name: "Pooja Mishra", company: "Deloitte", email: "pooja.mishra@deloitte.com", phone: "9796543210", status: "Active", completion: 92 },
    { id: 9, name: "Rohan Das", company: "IBM India", email: "rohan.das@ibm.com", phone: "9786543210", status: "Pending", completion: 45 },
    { id: 10, name: "Kavita Saxena", company: "L&T Infotech", email: "kavita.saxena@lntinfotech.com", phone: "9776543210", status: "Inactive", completion: 30 },
    { id: 11, name: "Manoj Kumar", company: "Cognizant", email: "manoj.kumar@cognizant.com", phone: "9766543210", status: "Active", completion: 85 },
    { id: 12, name: "Swati Reddy", company: "Mindtree", email: "swati.reddy@mindtree.com", phone: "9756543210", status: "Active", completion: 87 },
    { id: 13, name: "Gaurav Pandey", company: "Oracle India", email: "gaurav.pandey@oracle.com", phone: "9746543210", status: "Pending", completion: 55 },
    { id: 14, name: "Neha Kapoor", company: "Adobe India", email: "neha.kapoor@adobe.com", phone: "9736543210", status: "Inactive", completion: 25 },
    { id: 15, name: "Suresh Raina", company: "Google India", email: "suresh.raina@google.com", phone: "9726543210", status: "Active", completion: 98 },
    { id: 16, name: "Deepika Chauhan", company: "Microsoft India", email: "deepika.chauhan@microsoft.com", phone: "9716543210", status: "Pending", completion: 65 },
    { id: 17, name: "Arun Kumar", company: "Amazon India", email: "arun.kumar@amazon.com", phone: "9706543210", status: "Active", completion: 80 },
    { id: 18, name: "Shweta Mehta", company: "Flipkart", email: "shweta.mehta@flipkart.com", phone: "9696543210", status: "Active", completion: 75 },
    { id: 19, name: "Rajesh Yadav", company: "Paytm", email: "rajesh.yadav@paytm.com", phone: "9686543210", status: "Inactive", completion: 35 },
    { id: 20, name: "Tanvi Desai", company: "Zomato", email: "tanvi.desai@zomato.com", phone: "9676543210", status: "Active", completion: 82 }
  ],
  selectedRecruiters: [],
  bulkModalVisible: false,
  bulkAction: null,
};

// Redux Slice
const recruiterSlice = createSlice({
  name: "recruiters",
  initialState,
  reducers: {
    toggleSelection: (state, action) => {
      const id = action.payload;
      if (state.selectedRecruiters.includes(id)) {
        state.selectedRecruiters = state.selectedRecruiters.filter((recruiterId) => recruiterId !== id);
      } else {
        state.selectedRecruiters.push(id);
      }
    },
    toggleSelectAll: (state) => {
      if (state.selectedRecruiters.length === state.recruiters.length) {
        state.selectedRecruiters = [];
      } else {
        state.selectedRecruiters = state.recruiters.map((r) => r.id);
      }
    },
    updateStatus: (state, action) => {
      const status = action.payload;
      state.recruiters = state.recruiters.map((recruiter) =>
        state.selectedRecruiters.includes(recruiter.id) ? { ...recruiter, status } : recruiter
      );
      state.selectedRecruiters = [];
      state.bulkModalVisible = false;
    },
    showBulkModal: (state, action) => {
      state.bulkAction = action.payload;
      state.bulkModalVisible = true;
    },
    hideBulkModal: (state) => {
      state.bulkModalVisible = false;
    },
  },
});

// Export Actions
export const { toggleSelection, toggleSelectAll, updateStatus, showBulkModal, hideBulkModal } = recruiterSlice.actions;

// Export Reducer
export default recruiterSlice.reducer;
