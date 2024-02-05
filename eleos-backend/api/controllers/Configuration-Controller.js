const ConfigurationModel = require('../models/Configuration-Model');

module.exports = {
    deleteStatus: (req, res) => {
        ConfigurationModel.deleteStatus()
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
        ConfigurationModel.getStatus()
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
        ConfigurationModel.patchStatus()
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
        ConfigurationModel.postStatus()
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
        ConfigurationModel.putStatus()
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