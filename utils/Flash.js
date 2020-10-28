class Flash {
    constructor(req) {
        this.req = req;
        this.success = this.extractMessage('success');
        this.failed = this.extractMessage('failed');
    }

    extractMessage(name) {
        const message = this.req.flash(name);
        return message.length > 0 ? message[0] : false;
    }

    hasMessage() {
        return !(!this.success && !this.failed);
    }

    static getMessages(req) {
        const flash = new Flash(req);

        return {
            success: flash.success,
            failed: flash.failed,
            hasMessage: flash.hasMessage()
        }
    }
}

module.exports = Flash;