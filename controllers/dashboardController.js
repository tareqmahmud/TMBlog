/**
 * Controller to view dashboard page
 *
 * @param req
 * @param res
 */
module.exports.dashboardGetController = (req, res) => {
    res.render('pages/dashboard/dashboard', {
        title: 'My Dashboard'
    })
}