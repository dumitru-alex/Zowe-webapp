const Mainframe = require('../services/mainframe')

const host = "your_z/osmf_hostname";
const port = "your_z/osmf_hostname";
const user = "your_zos_user";
const password = "your_zos_password";

const mainframe = new Mainframe(host, port, user, password);

const account = 'your_zos_accounting_number';

exports.getIplInfo = function(req, res, next) {
    const iplinfo = mainframe.getIplInfo(account);
    iplinfo.then(function(result) {
        res.render('index', { title: 'z/OS IPL INFO' , output: result});
    }, function(err) {
        console.log(err);
    });
}