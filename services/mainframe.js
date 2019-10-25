const zowe = require('@zowe/cli');

class Mainframe {
    constructor(host, port, user, password) {
        this.profile = {
            host,
            port,
            user,
            password,
            rejectUnauthorized: false
        }
    }

    async getIplInfo(account) {
        const session = zowe.ZosmfSession.createBasicZosmfSessionFromArguments(this.profile);
        const command = `D IPLINFO`;
        const out = await zowe.IssueCommand.issueAndCollect(session, {command}, {});
        const commandResponse = out.commandResponse.split('\n');
        return commandResponse;
    }
}

module.exports = Mainframe;