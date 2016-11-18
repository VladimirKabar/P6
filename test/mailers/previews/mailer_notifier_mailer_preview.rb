# Preview all emails at http://localhost:3000/rails/mailers/mailer_notifier_mailer
class MailerNotifierMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/mailer_notifier_mailer/mail_to_me
  def mail_to_me
    MailerNotifierMailer.mail_to_me
  end

end
