const clickModel = require("../models/click.model");

async function getAnalytics(req, res) {
    const { shortCode } = req.params;
    const shortCodeExists = await clickModel.findOne({ shortCode });
    if (!shortCodeExists) {
        return res.status(404).json({
            message: "Short code not found",
            status: "failed"
        })
    }

    const totalClicks = await clickModel.countDocuments({ shortCode });
    const clicksByDevice = await clickModel.aggregate([
        { $match: { shortCode: shortCode } },
        { $group: { _id: '$device', count: { $sum: 1 } } }
    ]);
    const clickByDates = await clickModel.aggregate([
        { $match: { shortCode: shortCode } },
        {
            $group: {
                _id: { $dateToString: { format: "%Y-%m-%d", date: "$timestamp" } },
                count: { $sum: 1 }
            }
        },
        { $sort: { _id: 1 } }
    ])

    return res.status(200).json({
        message: "Analytics fetched successfully",
        status: "success",
        totalClicks: totalClicks,
        clicksByDevice: clicksByDevice,
        clickByDates: clickByDates

    })
}


module.exports = {
    getAnalytics
}