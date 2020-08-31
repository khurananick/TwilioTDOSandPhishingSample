exports.handler = function(context, event, callback) {
    const client = context.getTwilioClient();
    client.verify.services('VAXXXXXXXXXXXXXXXXXXXX')
        .verifications
        .create({to: event.Number, channel: 'sms'})
        .then(verification => callback(null, verification.status));
};
