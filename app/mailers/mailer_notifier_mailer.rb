class MailerNotifierMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.mailer_notifier_mailer.mail_to_me.subject
  #
  def mail_to_me(message)
    @message = message
    mail to: "masterrascal@gmail.com",
         :subject => "Prośba o kontakt - ktoś ze strony Wizzart napisał do Ciebie",
         :bcc => ["maciej.lorens@gmail.com", "vladimirkabar@gmail.com"]
  end
end
