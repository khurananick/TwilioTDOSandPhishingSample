exports.handler = function(context, event, callback) {
    const client = context.getTwilioClient();
    client.verify.services('VAXXXXXXXXXXXXXXXXXXX')
      .verificationChecks
      .create({to: event.Number, code: event.Code})
      .then(verification_check => callback(null, verification_check.status));
};
