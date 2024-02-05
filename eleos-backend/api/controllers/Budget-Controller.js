const BudgetModel = require('../models/Budget-Model');

module.exports = {
    deleteStatus: (req, res) => {
        BudgetModel.deleteStatus()
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
        BudgetModel.getStatus()
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
        BudgetModel.patchStatus()
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
        BudgetModel.postStatus()
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
        BudgetModel.putStatus()
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