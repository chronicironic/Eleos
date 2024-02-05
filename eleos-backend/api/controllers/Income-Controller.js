const IncomeModel = require('../models/Income-Model');

module.exports = {
    deleteStatus: (req, res) => {
        IncomeModel.deleteStatus()
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
        IncomeModel.getStatus()
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
        IncomeModel.patchStatus()
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
        IncomeModel.postStatus()
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
        IncomeModel.putStatus()
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