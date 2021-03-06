class MailerNotifierMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.mailer_notifier_mailer.mail_to_me.subject
  #
  def mail_to_me(name,email,content)
    @name = name
    @email = email
    @content = content
    mail to: ENV['MAIL_TO'],
         :subject => "Prośba o kontakt - ktoś ze strony Wizzart napisał do Ciebie"
  end
end
