
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const RecruitmentAuthRoutes = ({ allowedRoles }) => {
  const { user, token } = useSelector((state) => state.auth);
  const role = user?.role || localStorage.getItem("role"); // Get role from Redux or localStorage

  if (!token) {
    return <Navigate to="/recruiter/login" replace />; // Redirect if not logged in
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />; // Redirect if role not allowed
  }

  return <Outlet />;
}

export default RecruitmentAuthRoutes
