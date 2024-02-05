const ExpenseModel = require('../models/Expense-Model');

module.exports = {
    deleteStatus: (req, res) => {
        ExpenseModel.deleteStatus()
            .then((data) => {
                return res.status(200).json({
                    status: true,
                    data: data
                });
            })
            .catch((err) => {
                return res.status(500).json({
                    status: false,
                    error: err
                });
            });
    },
    getStatus: (req, res) => {
        ExpenseModel.getStatus()
            .then((data) => {
                return res.status(200).json({
                    status: true,
                    data: data
                });
            })
            .catch((err) => {
                return res.status(500).json({
                    status: false,
                    error: err
                });
            });
    },
    patchStatus: (req, res) => {
        ExpenseModel.patchStatus()
            .then((data) => {
                return res.status(200).json({
                    status: true,
                    data: data
                });
            })
            .catch((err) => {
                return res.status(500).json({
                    status: false,
                    error: err
                });
            });
    },
    postStatus: (req, res) => {
        ExpenseModel.postStatus()
            .then((data) => {
                return res.status(200).json({
                    status: true,
                    data: data
                });
            })
            .catch((err) => {
                return res.status(500).json({
                    status: false,
                    error: err
                });
            });
    },
    putStatus: (req, res) => {
        ExpenseModel.putStatus()
            .then((data) => {
                return res.status(200).json({
                    status: true,
                    data: data
                });
            })
            .catch((err) => {
                return res.status(500).json({
                    status: false,
                    error: err
                });
            });
    },
}