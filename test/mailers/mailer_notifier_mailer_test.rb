require 'test_helper'

class MailerNotifierMailerTest < ActionMailer::TestCase
  test "mail_to_me" do
    mail = MailerNotifierMailer.mail_to_me
    assert_equal "Mail to me", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
