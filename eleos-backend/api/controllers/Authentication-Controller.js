const AuthenticationModel = require('../models/Authentication-Model');

module.exports = {
    deleteStatus: (req, res) => {
        AuthenticationModel.deleteStatus()
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
        AuthenticationModel.getStatus()
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
        AuthenticationModel.patchStatus()
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
        AuthenticationModel.postStatus()
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
        AuthenticationModel.putStatus()
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