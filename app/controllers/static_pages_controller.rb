class StaticPagesController < ApplicationController
  def home
    @projects = Project.order(created_at: :desc).first(3)
  end

  def offer
  end

  def contact_get

  end
  def contact
  end

  def mail
    MailerNotifierMailer.mail_to_me(params[:email], params[:name], params[:content]).deliver
    redirect_to contact_path, notice: "Twoja wiadomość została wysłana"
  end

end
