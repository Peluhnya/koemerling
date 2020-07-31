class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'mailer'

  def test_welcome_email
    mail(:to => "peluhnya@outlook.com", :subject => "Test mail", :body => "Test mail body")
  end
end
