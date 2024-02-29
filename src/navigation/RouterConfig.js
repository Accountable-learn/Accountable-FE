import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from 'src/navigation/Auth/PrivateRoute';
import LoadingPage from 'src/pages/LoginSignUp/LoadingPage';
import { NotFound } from './NotFound';
import {
  ROOT,
  PROGRESS,
  LEADERBOARD,
  SIGNUP,
  LOGIN,
  CONFIRM_SIGNUP,
  PROFILE,
  LEARNING_CENTER, DAILY_SPEAKING, TASK_CENTER, ADMIN_CENTER, INVITATION,
} from './CONSTANTS';

const LoginPageContainer = lazy(() => import(/* webpackChunkName: "LoginPageContainer" */ '../pages/LoginSignUp/LoginPageContainer'));
// const DailyGoalContainer = lazy(() => import("../pages/Assignment/DailyGoalContainer"));
const LeaderboardContainer = lazy(() => import(/* webpackChunkName: "LeaderboardContainer" */ '../pages/Leaderboard/LeaderboardContainer'));
const ProgressContainer = lazy(() => import(/* webpackChunkName: "ProgressContainer" */ '../pages/Progress/ProgressContainer'));
const SignUp = lazy(() => import(/* webpackChunkName: "SignUp" */ '../pages/LoginSignUp/SignUp'));
const ConfirmSignUp = lazy(() => import(/* webpackChunkName: "ConfirmSignUp" */ '../pages/LoginSignUp/ConfirmSignUp'));
const Profile = lazy(() => import(/* webpackChunkName: "Profile" */ '../pages/LoginSignUp/Profile'));
const LearningCenterContainer = lazy(() => import(/* webpackChunkName: "LearningCenterContainer" */ 'src/pages/Home/LearningCenter'));
const DailySpeakingPage = lazy(() => import(/* webpackChunkName: "DailySpeakingPage" */ 'src/pages/Assignment/DailySpeakingPage'));
const Home = lazy(() => import(/* webpackChunkName: "HOME" */ 'src/pages/Home/HomeContainer'));
const InviteCode = lazy(() => import(/* webpackChunkName: "Invitation" */ 'src/pages/Invitation/InviteCode'));
const TaskCenter = lazy(() => import(/* webpackChunkName: "TaskCenter" */ 'src/pages/Teacher/TaskCenter'));
const AdminCenter = lazy(() => import(/* webpackChunkName: "AdminCenter" */ 'src/pages/Admin/AdminCenter'));

export function RouterConfig() {
  return (
    <div>
      <div>
        <Suspense fallback={<LoadingPage />}>
          <Switch>
            <Route exact path={LOGIN} component={LoginPageContainer} />
            <Route exact path={ROOT} component={Home} />
            <Route exact path={SIGNUP} component={SignUp} />

            {/* List all private/auth routes here */}
            <PrivateRoute exact path={LEARNING_CENTER} component={LearningCenterContainer} />
            <PrivateRoute exact path={DAILY_SPEAKING} component={DailySpeakingPage} />

            <PrivateRoute exact path={PROGRESS} component={ProgressContainer} />
            <PrivateRoute exact path={LEADERBOARD} component={LeaderboardContainer} />
            <PrivateRoute exact path={PROFILE} component={Profile} />
            <PrivateRoute exact path={INVITATION} component={InviteCode} />

            {/* Teacher Path */}
            <PrivateRoute exact path={TASK_CENTER} component={TaskCenter} />

            {/* Admin Path */}
            <PrivateRoute exact path={ADMIN_CENTER} component={AdminCenter} />

            <PrivateRoute exact path={CONFIRM_SIGNUP} component={ConfirmSignUp} />

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}
