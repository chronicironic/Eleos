const router = require('express').Router();
const AuthenticationRoutes = require('./routes/Authentication-Routes');
const BudgetRoutes = require('./routes/Budget-Routes');
const ExpenseRoutes = require('./routes/Expense-Routes');
const IncomeRoutes = require('./routes/Income-Routes');
const ReportRoutes = require('./routes/Report-Routes');
const UserRoutes = require('./routes/User-Routes');


router.use("/authentication", AuthenticationRoutes);
router.use("/budget", BudgetRoutes);
router.use("/configuration", BudgetRoutes);
router.use("/expense", ExpenseRoutes);
router.use("/income", IncomeRoutes);
router.use("/report", ReportRoutes);
router.use("/user", UserRoutes);

module.exports = router;